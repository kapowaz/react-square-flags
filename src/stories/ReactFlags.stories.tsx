import type { Meta, StoryObj } from '@storybook/react';
import styles from './ReactFlags.module.css';

import type { CountryCode, LanguageCode, OtherFlagCode } from '../types';
import {
  allCountryFlags,
  allLanguageFlags,
  allOtherFlags,
} from '../components/flags';
import { countryFlagNames, languageNames, otherFlagNames } from '../flagNames';
import { FlagExample } from './components/FlagExample';
import { FlagImageExample } from './components/FlagImageExample/FlagImageExample';

const meta: Meta = {
  title: 'All Flags',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Countries: Story = {
  name: 'Countries (SquareFlag)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allCountryFlags) as Array<CountryCode>).map((key) => (
        <FlagExample
          key={key}
          code={key}
          name={countryFlagNames[key]}
          Flag={allCountryFlags[key]}
        />
      ))}
    </div>
  ),
};

export const CountriesImages: Story = {
  name: 'Countries (SquareFlagImage)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allCountryFlags) as Array<CountryCode>).map((key) => (
        <FlagImageExample
          key={key}
          code={key}
          type="country"
          name={countryFlagNames[key]}
        />
      ))}
    </div>
  ),
};

export const Languages: Story = {
  name: 'Languages (SquareFlag)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allLanguageFlags) as Array<LanguageCode>).map((key) => (
        <FlagExample
          key={key}
          code={key}
          name={languageNames[key]}
          Flag={allLanguageFlags[key]}
        />
      ))}
    </div>
  ),
};

export const LanguagesImages: Story = {
  name: 'Languages (SquareFlagImage)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allLanguageFlags) as Array<LanguageCode>).map((key) => (
        <FlagImageExample
          key={key}
          code={key}
          type="language"
          name={languageNames[key]}
        />
      ))}
    </div>
  ),
};

export const Others: Story = {
  name: 'Others (SquareFlag)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allOtherFlags) as Array<OtherFlagCode>).map((key) => (
        <FlagExample
          key={key}
          code={key}
          name={otherFlagNames[key]}
          Flag={allOtherFlags[key]}
        />
      ))}
    </div>
  ),
};

export const OthersImages: Story = {
  name: 'Others (SquareFlagImage)',
  render: () => (
    <div className={styles.grid}>
      {(Object.keys(allOtherFlags) as Array<OtherFlagCode>).map((key) => (
        <FlagImageExample
          key={key}
          code={key}
          type="other"
          name={otherFlagNames[key]}
        />
      ))}
    </div>
  ),
};
