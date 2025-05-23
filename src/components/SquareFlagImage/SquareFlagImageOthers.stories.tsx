import type { OtherFlagCode } from '../../types';
import { otherFlagNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagImageStory } from './utils';

const meta = {
  title: 'Square Flag (image)',
  ...getFlagMeta<OtherFlagCode>({
    flagNames: otherFlagNames,
  }),
};

export default meta;

export const Others = getSquareFlagImageStory({
  fallback: 'pirate',
  type: 'other',
});
