import { LanguageCode } from '../../types';
import { allLanguageFlags, LanguageFlagEN } from '../../components/flags';
import { languageNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagStory } from './utils';

const meta = {
  title: 'Square Flag',
  ...getFlagMeta<LanguageCode>({
    components: allLanguageFlags,
    flagNames: languageNames,
    typeName: 'LanguageCode',
  }),
};

export default meta;

export const Languages = getSquareFlagStory({ fallback: LanguageFlagEN });
