import type { LanguageCode } from '../../types';
import { languageNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagImageStory } from './utils';

const meta = {
  title: 'Square Flag (image)',
  ...getFlagMeta<LanguageCode>({
    flagNames: languageNames,
  }),
};

export default meta;

export const Languages = getSquareFlagImageStory({
  fallback: 'en',
  type: 'language',
});
