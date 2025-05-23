import {
  CountryCode,
  FlagTypeName,
  LanguageCode,
  OtherFlagCode,
} from '../../types';
import {
  countryFlagNames,
  languageNames,
  otherFlagNames,
} from '../../flagNames';

export const SVG_ASSET_HOST =
  'https://raw.githubusercontent.com/kapowaz/square-flags/refs/heads/main/flags-original';

export const isCountryCode = (code: string): code is CountryCode =>
  Object.keys(countryFlagNames).includes(code);

export const isLanguageCode = (code: string): code is LanguageCode =>
  Object.keys(languageNames).includes(code);

export const isOtherFlagCode = (code: string): code is OtherFlagCode =>
  Object.keys(otherFlagNames).includes(code);

/**
 * Return the name for a flag, based on code and typeName
 */
export const getFlagName = ({
  code,
  typeName,
}: {
  code: string;
  typeName: string;
}): string => {
  switch (true) {
    case typeName === 'LanguageCode' && isLanguageCode(code):
      return languageNames[code];
    case typeName === 'OtherFlagCode' && isOtherFlagCode(code):
      return otherFlagNames[code];
    case typeName === 'CountryCode' && isCountryCode(code):
      return countryFlagNames[code];
    default:
      return 'Unknown Flag';
  }
};

/**
 * Return the asset URL for a flag, based on code and type
 */
export const getFlagUrl = ({
  code,
  typeName,
  host = SVG_ASSET_HOST,
}: {
  code: CountryCode | LanguageCode | OtherFlagCode;
  typeName: FlagTypeName;
  host?: string;
}): string => {
  const filename = (() => {
    switch (true) {
      case typeName === 'LanguageCode' && isLanguageCode(code):
        return `language/${code}.svg`;
      case typeName === 'OtherFlagCode' && isOtherFlagCode(code):
        return `other/${code}.svg`;
      case typeName === 'CountryCode' && isCountryCode(code):
        return `${code}.svg`;
      default:
        return 'xx.svg';
    }
  })();

  return `${host}/${filename}`;
};
