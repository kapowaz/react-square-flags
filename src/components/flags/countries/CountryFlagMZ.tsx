import type { SVGComponent } from '../../../types';

export const CountryFlagMZ: SVGComponent = ({ title = 'Mozambique', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 352H0v-32h512zm0-160H0v-32h512z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m92.9 182 16.6 51.2h53.7l-43.5 31.5 16.6 51.1L93 284.2l-43.5 31.6 16.6-51-43.4-31.6h53.7z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M44.4 248.9h97v44.5h-97z"/><path fill="var(--flag-palette-black, #333333)" d="M159.8 197.8 144 182.1l-51 51.1-51.2-51.1L26 197.8 77.2 249 26 300.1l15.7 15.5 51.2-51 51.1 51 15.8-15.5-51.2-51.2z"/>
  </svg>
);
