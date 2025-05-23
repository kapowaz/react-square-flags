import type { Meta, StoryObj } from '@storybook/react';
import styles from './SVGFlags.module.css';

import type { CountryCode, LanguageCode, OtherFlagCode } from '../types';
import { countryFlagNames, languageNames, otherFlagNames } from '../flagNames';
import {
  allCountryFlags,
  allLanguageFlags,
  allOtherFlags,
} from '../components/flags';

const meta: Meta = {
  title: 'Testing',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CountriesSVG: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(countryFlagNames) as Array<CountryCode>).map(
        (countryCode) => {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const svgFile = require(
            `@kapowaz/square-flags/flags/${countryCode}.svg`,
          );

          return (
            <img
              key={countryCode}
              src={svgFile}
              alt={countryFlagNames[countryCode]}
              height="48"
              width="48"
            />
          );
        },
      )}
    </div>
  ),
};

export const CountriesReact: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(allCountryFlags) as Array<CountryCode>).map(
        (countryCode) => {
          const SVG = allCountryFlags[countryCode];
          return <SVG key={countryCode} height="48" width="48" />;
        },
      )}
    </div>
  ),
};

export const LanguagesSVG: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(languageNames) as Array<LanguageCode>).map(
        (languageCode) => {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const svgFile = require(
            `@kapowaz/square-flags/flags/language/${languageCode}.svg`,
          );

          return (
            <img
              key={languageCode}
              src={svgFile}
              alt={languageNames[languageCode]}
              height="48"
              width="48"
            />
          );
        },
      )}
    </div>
  ),
};

export const LanguagesReact: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(languageNames) as Array<LanguageCode>).map(
        (languageCode) => {
          const SVG = allLanguageFlags[languageCode];
          return <SVG key={languageCode} height="48" width="48" />;
        },
      )}
    </div>
  ),
};

export const OthersSVG: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(otherFlagNames) as Array<OtherFlagCode>).map(
        (otherFlagCode) => {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const svgFile = require(
            `@kapowaz/square-flags/flags/other/${otherFlagCode}.svg`,
          );

          return (
            <img
              key={otherFlagCode}
              src={svgFile}
              alt={otherFlagNames[otherFlagCode]}
              height="48"
              width="48"
            />
          );
        },
      )}
    </div>
  ),
};

export const OthersReact: Story = {
  render: () => (
    <div className={styles.grid} id="story-content">
      {(Object.keys(otherFlagNames) as Array<OtherFlagCode>).map(
        (otherFlagCode) => {
          const SVG = allOtherFlags[otherFlagCode];
          return <SVG key={otherFlagCode} height="48" width="48" />;
        },
      )}
    </div>
  ),
};
