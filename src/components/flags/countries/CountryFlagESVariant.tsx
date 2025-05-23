import type { SVGComponent } from '../../../types';

export const CountryFlagESVariant: SVGComponent = ({ title = 'Spain', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V368h512zm0-368H0V0h512z"/>
  </svg>
);
