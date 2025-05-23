import type { SVGComponent } from '../../../types';

export const CountryFlagFI: SVGComponent = ({ title = 'Finland', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 288v-64H192V0h-64v224H0v64h128v224h64V288z"/>
  </svg>
);
