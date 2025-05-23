import type { SVGComponent } from '../../../types';

export const CountryFlagETTi: SVGComponent = ({ title = 'Tigray', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0v512l256-256zm473.9 256-68 22.1v71.5l-42-57.8-68.1 22 42-57.8-42-57.9 68 22.1 42-57.8v71.5z"/>
  </svg>
);
