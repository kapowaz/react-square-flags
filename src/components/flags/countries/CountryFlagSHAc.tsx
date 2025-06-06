import type { SVGComponent } from '../../../types';

export const CountryFlagSHAc: SVGComponent = ({ title = 'Ascension Island', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h24v-24L152 128 256 24V0h-24L128 104 24 0H0v24l104 104L0 232v24h24l104-104z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 160V96h-96V0H96v96H0v64h96v96h64v-96z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 144v-32H144V0h-32v112H0v32h112v112h32V144z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 16V0l96 96H80zm256 224v16l-96-96h16zM16 256H0l96-96v16zM240 0h16l-96 96V80z"/><path fill="var(--flag-palette-green, #6da544)" d="m336 233.5 48-80 48 80z"/><path fill="var(--flag-palette-mid-grey-3, #acabb1)" d="M384 281.5a48 48 0 1 0 0-96 48 48 0 0 0 0 96"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M336 233.5v77c0 36 48 48 48 48s48-12 48-48v-77z"/><path fill="var(--flag-palette-brown, #85693d)" d="M336 233.5a16 16 0 1 0-32 0v96a16 16 0 1 0 32 0zm128 0a16 16 0 1 0-32 0v96a16 16 0 1 0 32 0z"/><path fill="var(--flag-palette-green, #6da544)" d="m384 249.5-48 67c2 11 9 19 16 26l32-45 32 45c8-7 14-15 16-26z"/>
  </svg>
);
