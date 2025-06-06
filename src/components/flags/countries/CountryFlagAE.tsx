import type { SVGComponent } from '../../../types';

export const CountryFlagAE: SVGComponent = ({ title = 'United Arab Emirates', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h167v512H0z"/>
  </svg>
);
