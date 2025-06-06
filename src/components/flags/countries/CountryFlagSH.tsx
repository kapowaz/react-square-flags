import type { SVGComponent } from '../../../types';

export const CountryFlagSH: SVGComponent = ({ title = 'Saint Helena', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h24v-24L152 128 256 24V0h-24L128 104 24 0H0v24l104 104L0 232v24h24l104-104z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 160V96h-96V0H96v96H0v64h96v96h64v-96z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 144v-32H144V0h-32v112H0v32h112v112h32V144z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 16V0l96 96H80zm256 224v16l-96-96h16zM16 256H0l96-96v16zM240 0h16l-96 96V80z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M304 152h160v80l-80 32-80-32z"/><path fill="var(--flag-palette-black, #333333)" d="M384 164a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14 14 14 0 0 0 14 14 14 14 0 0 0 14 14h28a14 14 0 0 0 14-14 14 14 0 0 0 14-14 14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M304 232v48c0 61 80 80 80 80s80-19 80-80v-48z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M388 245c-9 0-15 8-25 1 5 12 14 9 22 10v6h-14s-14 20 0 38h14v5h-14c-9 0-9-11-9-11h-34v11h7c9 8 13 26 27 26h52c15 0 17-9 20-17 3-7 5-8 6-9v-8h-29s0 8-8 8h-12v-6h14c-11-17 0-37 0-37h-14v-16l-4-1zm-23 17c-20 6-31 26-31 26h25c-2-17 6-26 6-26m44 6a34 34 0 0 0-2 23h24c-5-12 0-23 0-23z"/>
  </svg>
);
