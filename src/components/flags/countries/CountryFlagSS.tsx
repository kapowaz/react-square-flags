import type { SVGComponent } from '../../../types';

export const CountryFlagSS: SVGComponent = ({ title = 'South Sudan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 352H0v-32h512zm0-160H0v-32h512z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m106 182 16.7 51.2h53.7l-43.5 31.5 16.6 51.1-43.4-31.6-43.5 31.6 16.6-51-43.4-31.6h53.7z"/>
  </svg>
);
