import type { SVGComponent } from '../../../types';

export const CountryFlagIT23: SVGComponent = ({ title = 'Aosta Valley', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M204.9 512V0h307v512z"/><path fill="var(--flag-palette-black, #333333)" d="M0 512V0h256v512z"/>
  </svg>
);
