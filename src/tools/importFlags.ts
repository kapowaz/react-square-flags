import fs from 'fs';
import { JSDOM } from 'jsdom';
import path from 'path';
import { optimize } from 'svgo';
import colors from 'colors';
import { camelCase } from 'change-case';
import Handlebars from 'handlebars';
import { exec as execChildProcess } from 'child_process';
import util from 'util';
import serialize from 'w3c-xmlserializer';
import hash from '@emotion/hash';
import { getFlagName } from '../components';
import { getComponentName } from './utils';
import { FlagTypeName } from '../types';

const exec = util.promisify(execChildProcess);

const FLAGS_OUTPUT_PATH = './src/components/flags';
const PACKAGE_PATH = './node_modules/@kapowaz/square-flags';

interface FlagPaths {
  [key: string]: {
    outputPath: string;
    typeName: FlagTypeName;
  };
}

const FLAG_PATHS: FlagPaths = {
  [`${PACKAGE_PATH}/flags`]: {
    outputPath: './src/components/flags/countries',
    typeName: 'CountryCode',
  },
  [`${PACKAGE_PATH}/flags/language`]: {
    outputPath: './src/components/flags/languages',
    typeName: 'LanguageCode',
  },
  [`${PACKAGE_PATH}/flags/other`]: {
    outputPath: './src/components/flags/others',
    typeName: 'OtherFlagCode',
  },
};

const FLAGS_INDEX_TEMPLATE = './src/tools/index.ts.hbs';
const ALL_FLAGS_TEMPLATE = './src/tools/allFlags.ts.hbs';
const FLAG_TEMPLATE = './src/tools/Flag.tsx.hbs';
const FLAG_SIZE = 512;
const FLAGTYPE_ALLEXPORTSNAME: Record<FlagTypeName, string> = {
  CountryCode: 'allCountryFlags',
  LanguageCode: 'allLanguageFlags',
  OtherFlagCode: 'allOtherFlags',
};

type Warning = {
  filename: string;
  width?: number;
  height?: number;
};

const flagTemplate = Handlebars.compile(fs.readFileSync(FLAG_TEMPLATE, 'utf8'));

const indexTemplate = Handlebars.compile(
  fs.readFileSync(FLAGS_INDEX_TEMPLATE, 'utf8'),
);

const allFlagsTemplate = Handlebars.compile(
  fs.readFileSync(ALL_FLAGS_TEMPLATE, 'utf8'),
);

/**
 * Returns a promise to a string containing the original filename if the file is
 * a symlink, or an empty string otherwise
 */
const getSymlinkOriginal = async (filename: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.lstat(filename, function (err, stats) {
      if (err) return reject(err);

      const isSymLink = stats.isSymbolicLink();

      if (isSymLink) {
        fs.readlink(filename, (err, string) => {
          if (err) return reject(err);
          return resolve(string);
        });
      } else {
        return resolve('');
      }
    });
  });
};

const HYPHENATED_ATTRIBUTES = [
  'clip-path',
  'clip-rule',
  'fill-opacity',
  'fill-rule',
  'stop-color',
  'stop-opacity',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'transform-origin',
];

/**
 * Replace (a subset of) hyphenated SVG attributes with React-compatible camelCase versions
 */
const camelCaseAttributes = (svg: string): string => {
  return HYPHENATED_ATTRIBUTES.reduce<string>((output, attribute) => {
    return output.replaceAll(attribute, camelCase(attribute));
  }, svg);
};

const outputIndexTemplate = ({
  componentNames,
  outputPath,
}: {
  componentNames: Array<string>;
  outputPath: string;
}): void => {
  const indexOutput = indexTemplate({ componentNames });
  const outputFileName = `${outputPath}/index.ts`;

  try {
    fs.writeFileSync(outputFileName, indexOutput, 'utf8');
    console.log(
      `${colors.green('✓')} Wrote flag exports to: ${colors.bold(outputFileName)}`,
    );
  } catch (error) {
    console.error(
      `${colors.red('✗')} An error occurred writing exports file '${outputFileName}': ${error}`,
    );
  }
};

const outputAllFlagsTemplate = ({
  componentNames,
  componentsByCode,
  outputPath,
  typeName,
}: {
  componentNames: Array<string>;
  componentsByCode: { [key: string]: string };
  outputPath: string;
  typeName: FlagTypeName;
}): void => {
  const allFlagsOutput = allFlagsTemplate({
    componentNames,
    componentsByCode,
    typeName,
    exportName: FLAGTYPE_ALLEXPORTSNAME[typeName],
  });

  const outputFileName = `${outputPath}/allFlags.ts`;

  try {
    fs.writeFileSync(outputFileName, allFlagsOutput, 'utf8');
    console.log(
      `${colors.green('✓')} Wrote all flags exports to: ${colors.bold(outputFileName)}`,
    );
  } catch (error) {
    console.error(
      `${colors.red('✗')} An error occurred writing exports file '${outputFileName}': ${error}`,
    );
  }
};

const fileNameFromPath = (name: string): string => {
  const pathParts = name.split('/');
  const [filename] = pathParts[pathParts.length - 1].split('.');
  return filename;
};

const importFlags = async () => {
  const warnings: Array<Warning> = [];

  for (const [inputPath, options] of Object.entries(FLAG_PATHS)) {
    const { outputPath, typeName } = options;

    try {
      const files = fs.readdirSync(inputPath).filter((file): file is string => {
        if (typeof file === 'string' && file.match(/\.svg$/)) return true;
        return false;
      });

      const componentsByCode: { [key: string]: string } = {};
      const componentNames: Array<string> = [];

      for (const file of files) {
        const svgPath = `${inputPath}/${file}`;
        const original = await getSymlinkOriginal(svgPath);
        const filename = path.parse(file).name;

        const componentName = getComponentName({
          code: original ? fileNameFromPath(original) : filename,
          typeName,
        });

        const svgString = fs.readFileSync(svgPath, 'utf8');
        const { data: optimizedSvgString } = optimize(svgString, {
          path: svgPath,
          multipass: true,
        });

        const dom = new JSDOM(optimizedSvgString);
        const svgElement = dom.window.document.querySelector('svg');

        /**
         * If for any reason no `<svg>` element existed in the DOM of the
         * optimised SVG, skip this file
         */
        if (svgElement === null) return;

        /**
         * For no discernible reason, if an SVG element has a width and height
         * attribute, the viewBox attribute is null in JSDOM, so we need to fall
         * back to reconstructing it.
         */
        const dimensions = {
          width: svgElement.getAttribute('width'),
          height: svgElement.getAttribute('height'),
        };

        const width = dimensions.width
          ? parseInt(dimensions.width, 10)
          : undefined;
        const height = dimensions.height
          ? parseInt(dimensions.height, 10)
          : undefined;
        const viewBox =
          svgElement.getAttribute('viewBox') || `0 0 ${width} ${height}`;

        /**
         * Use this to generate a warning if any of the flags had a non-standard
         * height or width (usually indicates something went wrong when exporting
         * from Figma)
         */
        if (width !== FLAG_SIZE || height !== FLAG_SIZE) {
          warnings.push({
            filename: svgPath,
            width,
            height,
          });
        }

        let clipPathCounter = 0;
        const clipPaths: { [key: string]: string } = {};

        /**
         * Serialize the SVG content _inside_ the `<svg>` tag, and convert all
         * attributes to camelCase for use within React
         */
        const svgData = camelCaseAttributes(
          Array.from(
            dom.window.document.querySelectorAll('svg > *'),
          ).reduce<string>((output, element) => {
            switch (true) {
              /**
               * Whenever we encounter a group used as a clip-path, create a new
               * unique hash identifier representing it, to ensure that all clip
               * paths across the entire DOM are unique, then increment
               * clipPathCounter to ensure the next clip-path in the same SVG has
               * a unique value; also, store the value within an object so we can
               * replace all the definitions within the <defs> element in the same
               * SVG file.
               */
              case element.localName === 'g' &&
                element.hasAttribute('clip-path'): {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [_, initialIdentifier] = element
                  .getAttribute('clip-path')
                  ?.match(/url\(#(.+)\)/) || ['', ''];

                const hashedIdentifier = hash(`${svgPath}-${clipPathCounter}`);
                clipPaths[initialIdentifier] = hashedIdentifier;
                element.setAttribute(
                  'clip-path',
                  `url(#flag-${hashedIdentifier})`,
                );
                clipPathCounter++;
              }

              /**
               * Within <defs> replace all <clipPath id={foo}> with <clipPath id={clipPaths[foo]}>
               */
              case element.localName === 'defs': {
                Array.from(element.children).map((child) => {
                  if (child.localName === 'clipPath') {
                    const oldId = child.getAttribute('id') || '';
                    child.setAttribute('id', `flag-${clipPaths[oldId]}`);
                  }
                });
              }
            }

            return `${output}${serialize(element, { requireWellFormed: true })}`;
          }, ''),
        ).replaceAll(' xmlns="http://www.w3.org/2000/svg"', '');

        const flagOutput = flagTemplate({
          name: componentName,
          title: getFlagName({ code: filename, typeName }),
          viewBox,
          svgData,
        });

        const flagOutputPath = path.join(outputPath, `${componentName}.tsx`);

        try {
          fs.writeFileSync(flagOutputPath, flagOutput, 'utf8');
          console.log(
            `${colors.green('✓')} Wrote flag component file to: ${colors.bold(
              flagOutputPath,
            )}`,
          );
        } catch (error) {
          console.error(
            `${colors.red(
              '✗',
            )} An error occurred writing flag component file '${flagOutputPath}': ${error}`,
          );
        }

        componentsByCode[filename] = componentName;
        if (!componentNames.includes(componentName)) {
          componentNames.push(componentName);
        }
      }

      outputIndexTemplate({
        componentNames,
        outputPath,
      });

      outputAllFlagsTemplate({
        componentsByCode,
        componentNames,
        outputPath,
        typeName,
      });
    } catch (error) {
      console.error(
        `${colors.red('✗')} Unable to read the directory listing for '${inputPath}': ${error}`,
      );
    }
  }

  try {
    console.log(
      `${colors.green('✓')} Tidying generated files with eslint --fix…`,
    );
    exec(`eslint --fix --ext .ts,.tsx ${FLAGS_OUTPUT_PATH}`);

    if (warnings.length) {
      console.error(
        `${colors.yellow(
          '!',
        )} The viewbox dimensions for the following components were not ${FLAG_SIZE}×${FLAG_SIZE}:`,
      );

      warnings.forEach(({ filename, width, height }) => {
        console.error(
          `${colors.yellow('↳')} ${filename}: ${colors.bold(`${width}×${height}`)}`,
        );
      });
    }
  } catch (error) {
    console.error(`${colors.red('✗')} Error running eslint': ${error}`);
  }
};

importFlags();
