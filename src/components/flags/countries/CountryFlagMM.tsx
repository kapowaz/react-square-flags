import type { SVGComponent } from '../../../types';

export const CountryFlagMM: SVGComponent = ({ title = 'Myanmar', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M298.4 215.7h137l-110.9 80.6L367 426.7 256 346l-111 80.6 42.5-130.4-111-80.6h137.1L256 85.3z"/>
  </svg>
);
