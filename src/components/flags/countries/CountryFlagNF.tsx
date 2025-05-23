import type { SVGComponent } from '../../../types';

export const CountryFlagNF: SVGComponent = ({ title = 'Norfolk Island', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M128 512V0h256v512z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512V0h144v512zm368 0V0h144v512zm-45.2-178L256 122.3 189.2 334h50.1v55.7h33.4V334z"/>
  </svg>
);
