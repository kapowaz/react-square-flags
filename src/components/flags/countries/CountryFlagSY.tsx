import type { SVGComponent } from '../../../types';

export const CountryFlagSY: SVGComponent = ({ title = 'Syria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m90 182 16.5 51.2h53.7l-43.4 31.5 16.6 51.1-43.5-31.6-43.4 31.6 16.6-51-43.5-31.6h53.7zm166 0 16.6 51.2h53.7l-43.4 31.5 16.5 51.1-43.4-31.6-43.4 31.6 16.5-51-43.4-31.6h53.7zm166 0 16.7 51.2h53.7l-43.5 31.5 16.6 51.1-43.4-31.6-43.5 31.6 16.6-51-43.4-31.6h53.7z"/>
  </svg>
);
