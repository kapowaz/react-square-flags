import { CountryCode } from '../../types';
import { countryFlagNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagImageStory } from './utils';

const meta = {
  title: 'Square Flag (image)',
  ...getFlagMeta<CountryCode>({
    flagNames: countryFlagNames,
  }),
};

export default meta;

export const Countries = getSquareFlagImageStory({ fallback: 'eu' });
