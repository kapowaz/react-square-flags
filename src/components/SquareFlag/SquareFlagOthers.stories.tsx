import { OtherFlagCode } from '../../types';
import { allOtherFlags, OtherFlagPirate } from '../../components/flags';

import { otherFlagNames } from '../../flagNames';
import { getFlagMeta, getSquareFlagStory } from './utils';

const meta = {
  title: 'Square Flag',
  ...getFlagMeta<OtherFlagCode>({
    components: allOtherFlags,
    flagNames: otherFlagNames,
    typeName: 'OtherFlagCode',
  }),
};

export default meta;

export const Others = getSquareFlagStory({ fallback: OtherFlagPirate });
