import type { SVGComponent } from '../../../types';

export const CountryFlagSR: SVGComponent = ({ title = 'Suriname', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M512 512H0V409.6h512zm0-409.6H0V0h512z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 153.6h512v204.8H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m256 167 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"/>
  </svg>
);
