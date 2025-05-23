import type { SVGComponent } from '../../../types';

export const CountryFlagLC: SVGComponent = ({ title = 'Saint Lucia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-light-grey, #f3f3f3)" d="M96 444.2h320L256 67.8z"/><path fill="var(--flag-palette-black, #333333)" d="M151.6 406.6 256 169l104.4 237.5z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M96 444.2h320L256 293.6z"/>
  </svg>
);
