import type { SVGComponent } from '../../../types';

export const CountryFlagCR: SVGComponent = ({ title = 'Costa Rica', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 80h512v352H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 168h512v176H0z"/>
  </svg>
);
