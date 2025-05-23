import type { SVGComponent } from '../../../types';

export const CountryFlagGBEng: SVGComponent = ({ title = 'England', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/>
  </svg>
);
