import { pascalCase } from 'change-case';

export type FlagDetails = {
  code: string;
  subdirectory: string;
};

/**
 * Return the filename (and React component name) for a given flag name
 */
export const getComponentName = ({
  code,
  typeName,
}: Omit<FlagDetails, 'subdirectory'> & {
  typeName: string;
}): string => {
  const [prefix, ...rest] = code.split('-');

  switch (typeName) {
    case 'LanguageCode': {
      if (prefix.length === 2) {
        return `LanguageFlag${prefix.toUpperCase()}${pascalCase(rest.join('-'))}`;
      }

      return `LanguageFlag${pascalCase(code)}`;
    }
    case 'OtherFlagCode': {
      switch (true) {
        case prefix === 'lgbt':
          return `OtherFlag${prefix.toUpperCase()}${pascalCase(rest.join('-'))}`;
        case code === 'nato':
          return 'OtherFlagNATO';
        case code === 'un':
          return 'OtherFlagUN';
        default:
          return `OtherFlag${pascalCase(code)}`;
      }
    }
    case 'CountryCode': {
      if (prefix.length === 2) {
        return `CountryFlag${prefix.toUpperCase()}${pascalCase(rest.join('-'))}`;
      }

      return `CountryFlag${pascalCase(code)}`;
    }
    default:
      return 'UnknownFlag';
  }
};
