import type { SVGComponent } from '../../../types';

export const CountryFlagCH: SVGComponent = ({ title = 'Switzerland', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M304 208h112v96H304v112h-96V304H96v-96h112V96h96z"/>
  </svg>
);
