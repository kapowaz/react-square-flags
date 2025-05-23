import type { SVGComponent } from '../../../types';

export const CountryFlagMW: SVGComponent = ({ title = 'Malawi', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m332.5 122.4-31.2-14.7 16.6-30.3-34 6.5-4.3-34.3L256 75l-23.6-25.3L228 84l-34-6.5 16.7 30.3-31.3 14.7z"/>
  </svg>
);
