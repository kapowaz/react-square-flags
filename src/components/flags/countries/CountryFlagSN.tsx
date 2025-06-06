import type { SVGComponent } from '../../../types';

export const CountryFlagSN: SVGComponent = ({ title = 'Senegal', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M384 0v512H128V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v512H368V0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M144 0v512H0V0zm112 157.6 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"/>
  </svg>
);
