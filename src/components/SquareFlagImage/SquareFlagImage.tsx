import type { Property as CSSProperty } from 'csstype';
import type {
  CountryCode,
  FlagTypeName,
  LanguageCode,
  OtherFlagCode,
  SquareFlagSize,
} from '../../types';
import { SQUAREFLAGSIZE_DIMENSIONS } from '../common';
import { getFlagName, getFlagUrl } from '../utils';

export interface ISquareFlagImageProps
  extends React.ComponentPropsWithoutRef<'img'> {
  /**
   * A string representing an ISO 3166-1 alpha-2 country code (or other named
   * country code); ISO 639 language code; or, other accepted code. Since there
   * is overlap between CountryCode and LanguageCode, a type prop should also be
   * provided to avoid ambiguity, otherwise it will default to using the country
   * version of any overlapping code
   */
  code: CountryCode | LanguageCode | OtherFlagCode;

  /**
   * Optional type to hint which type of flag is being used here
   */
  type?: 'country' | 'language' | 'other';

  /**
   * Named size, or a CSS unit size
   */
  size?: SquareFlagSize | CSSProperty.Height;
}

const isSquareFlagSize = (size: string): size is SquareFlagSize => {
  return Object.keys(SQUAREFLAGSIZE_DIMENSIONS).includes(size);
};

/**
 * Map FlagTypeName to a more user-friendly name suitable for an external API
 */
const TYPE_TYPENAME: Record<'country' | 'language' | 'other', FlagTypeName> = {
  country: 'CountryCode',
  language: 'LanguageCode',
  other: 'OtherFlagCode',
};

export const SquareFlagImage = ({
  code,
  type = 'country',
  size = 'medium',
  ...otherProps
}: ISquareFlagImageProps) => {
  const dimensions =
    typeof size === 'string' && isSquareFlagSize(size)
      ? SQUAREFLAGSIZE_DIMENSIONS[size]
      : `${size}`;

  const alt = getFlagName({ code, typeName: TYPE_TYPENAME[type] });
  const src = getFlagUrl({ code, typeName: TYPE_TYPENAME[type] });

  const props = {
    src,
    alt,
    width: dimensions,
    height: dimensions,
    ...otherProps,
  };

  return <img {...props} />;
};
