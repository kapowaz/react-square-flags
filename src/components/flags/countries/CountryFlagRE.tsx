import type { SVGComponent } from '../../../types';

export const CountryFlagRE: SVGComponent = ({ title = 'Réunion', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 512h512L256 256z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 256 224 0h64zL448 0h64v64zL0 288v-64zL0 64V0h64zm256 32-256-32 256-32z"/>
  </svg>
);
