import type { SVGComponent } from '../../../types';

export const CountryFlagCL: SVGComponent = ({ title = 'Chile', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m128 54 16.6 51.2h53.7l-43.4 31.5 16.5 51.1-43.4-31.6-43.4 31.6 16.5-51-43.4-31.6h53.7z"/>
  </svg>
);
