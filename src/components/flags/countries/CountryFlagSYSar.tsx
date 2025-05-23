import type { SVGComponent } from '../../../types';

export const CountryFlagSYSar: SVGComponent = ({ title = 'Syria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="m145.3 182 16.6 51.2h53.7L172 264.7l16.6 51.1-43.4-31.6-43.5 31.6 16.6-51L75 233.1h53.7zm221.4 0 16.6 51.2H437l-43.4 31.5 16.6 51.1-43.5-31.6-43.4 31.6 16.6-51-43.5-31.6h53.7z"/>
  </svg>
);
