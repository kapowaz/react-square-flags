import type { SVGComponent } from '../../../types';

export const CountryFlagBS: SVGComponent = ({ title = 'Bahamas', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 344h512v168H0zM0 0h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0v512l256-256z"/>
  </svg>
);
