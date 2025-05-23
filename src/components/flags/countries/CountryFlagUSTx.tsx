import type { SVGComponent } from '../../../types';

export const CountryFlagUSTx: SVGComponent = ({ title = 'Texas', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h170.7v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m85.3 182 16.6 51.2h53.7l-43.4 31.5 16.6 51.1-43.5-31.6L42 315.8l16.6-51L15 233.1h53.7z"/>
  </svg>
);
