import type { SVGComponent } from '../../../types';

export const CountryFlagAF: SVGComponent = ({ title = 'Afghanistan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M128 512V0h256v512z"/><path fill="var(--flag-palette-black, #333333)" d="M0 512V0h144v512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M368 512V0h144v512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 167a89 89 0 1 0 0 178 89 89 0 0 0 0-178m0 144.7a55.7 55.7 0 1 1 0-111.4 55.7 55.7 0 0 1 0 111.4"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M256 222.6c-12.3 0-22.3 10-22.3 22.3v33.4h44.6v-33.4c0-12.3-10-22.3-22.3-22.3"/>
  </svg>
);
