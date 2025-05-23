import { CountryCode } from '../../types';
import { allCountryFlags, CountryFlagEU } from '../../components/flags';
import { countryFlagNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagStory } from './utils';

const meta = {
  title: 'Square Flag',
  ...getFlagMeta<CountryCode>({
    components: allCountryFlags,
    flagNames: countryFlagNames,
    typeName: 'CountryCode',
  }),
};

export default meta;

export const Countries = getSquareFlagStory({ fallback: CountryFlagEU });
