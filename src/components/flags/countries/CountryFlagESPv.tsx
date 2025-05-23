import type { SVGComponent } from '../../../types';

export const CountryFlagESPv: SVGComponent = ({ title = 'Basque Country', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M464 512h48v-48L304 256 512 48V0h-48L256 208 48 0H0v48l208 208L0 464v48h48l208-208z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/>
  </svg>
);
