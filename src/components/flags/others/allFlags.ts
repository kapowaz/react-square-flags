import type { SVGComponent, OtherFlagCode } from '../../../types';
import { OtherFlagAmsterdam } from './OtherFlagAmsterdam';
import { OtherFlagCheckered } from './OtherFlagCheckered';
import { OtherFlagChequered } from './OtherFlagChequered';
import { OtherFlagEarth } from './OtherFlagEarth';
import { OtherFlagGalacticEmpire } from './OtherFlagGalacticEmpire';
import { OtherFlagJollyRoger } from './OtherFlagJollyRoger';
import { OtherFlagKlingon } from './OtherFlagKlingon';
import { OtherFlagLGBTProgress } from './OtherFlagLGBTProgress';
import { OtherFlagLGBTTransgender } from './OtherFlagLGBTTransgender';
import { OtherFlagLGBT } from './OtherFlagLGBT';
import { OtherFlagMars } from './OtherFlagMars';
import { OtherFlagNATO } from './OtherFlagNATO';
import { OtherFlagOlympics } from './OtherFlagOlympics';
import { OtherFlagPirate } from './OtherFlagPirate';
import { OtherFlagRebelAlliance } from './OtherFlagRebelAlliance';
import { OtherFlagUN } from './OtherFlagUN';
import { OtherFlagUnitedNations } from './OtherFlagUnitedNations';

export const allOtherFlags: Record<OtherFlagCode, SVGComponent> = {
  'amsterdam': OtherFlagAmsterdam,
  'checkered': OtherFlagCheckered,
  'chequered': OtherFlagChequered,
  'earth': OtherFlagEarth,
  'galactic_empire': OtherFlagGalacticEmpire,
  'jolly_roger': OtherFlagJollyRoger,
  'klingon': OtherFlagKlingon,
  'lgbt-progress': OtherFlagLGBTProgress,
  'lgbt-transgender': OtherFlagLGBTTransgender,
  'lgbt': OtherFlagLGBT,
  'mars': OtherFlagMars,
  'nato': OtherFlagNATO,
  'olympics': OtherFlagOlympics,
  'pirate': OtherFlagPirate,
  'rebel_alliance': OtherFlagRebelAlliance,
  'un': OtherFlagUN,
  'united_nations': OtherFlagUnitedNations,
};
