import type { SVGComponent } from '../../../types';

export const CountryFlagBA: SVGComponent = ({ title = 'Bosnia and Herzegovina', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m0 0 512 512V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M394.8 481.2h34.8l-28.2 20.5 3.4 10.3h-41.6l3.4-10.3-28.2-20.5h34.8L384 448zm-64-64h34.8l-28.2 20.5 10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.2-20.5h34.8L320 384zm-64-64h34.8l-28.2 20.5 10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.2-20.5h34.8L256 320zm-64-64h34.8l-28.2 20.5 10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.2-20.5h34.8L192 256zm-64-64h34.8l-28.2 20.5 10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.3-20.5h35L128 192zm-64-64h34.9l-28.3 20.5 10.8 33.1L64 194.3l-28.2 20.5 10.8-33.1-28.3-20.5h35L64 128zm-64-64h34.9l-28.3 20.5 10.8 33.1L0 130.3V64z"/>
  </svg>
);
