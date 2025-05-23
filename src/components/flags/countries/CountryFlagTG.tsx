import type { SVGComponent } from '../../../types';

export const CountryFlagTG: SVGComponent = ({ title = 'Togo', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v102.4H0zm0 204.8h512v102.4H0zm0 204.8h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h256v307.2H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m128 79.7 16.6 51h53.7l-43.4 31.6 16.5 51.1-43.4-31.6-43.4 31.6 16.5-51-43.4-31.6h53.7z"/>
  </svg>
);
