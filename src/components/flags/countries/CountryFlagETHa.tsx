import type { SVGComponent } from '../../../types';

export const CountryFlagETHa: SVGComponent = ({ title = 'Harari', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 64h512v96H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 352h512v96H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M256 328a72 72 0 1 0 0-144 72 72 0 0 0 0 144"/>
  </svg>
);
