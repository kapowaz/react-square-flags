import type { SVGComponent } from '../../../types';

export const CountryFlagCW: SVGComponent = ({ title = 'Curaçao', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 342.3h512v66.8H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M189 180.3h44.7l-36.1 26.2 13.8 42.5-36.2-26.2-36.1 26.2 13.8-42.5-36.2-26.2h44.7l13.8-42.6zm-82.3-61.6h26.9l-21.7 15.8 8.3 25.5-21.7-15.8L76.8 160l8.2-25.5-21.7-15.8h26.9l8.3-25.5z"/>
  </svg>
);
