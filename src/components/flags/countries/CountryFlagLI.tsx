import type { SVGComponent } from '../../../types';

export const CountryFlagLI: SVGComponent = ({ title = 'Liechtenstein', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M200.3 144.7a33.4 33.4 0 0 0-55.6-24.9v-19.6h11.1V77.9h-11.1V66.8h-22.3v11.1h-11v22.3h11v19.6A33.4 33.4 0 0 0 78 169.6v19.6h111.3v-19.6c6.8-6.1 11.1-15 11.1-24.9"/>
  </svg>
);
