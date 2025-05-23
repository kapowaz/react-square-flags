import type { SVGComponent } from '../../../types';

export const CountryFlagIT72: SVGComponent = ({ title = 'Campania', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m176 152-32 32v109c0 85.6 112 111.4 112 111.4s40.6-9.3 73-35.5l29.2-34.7A89 89 0 0 0 368 293V152z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M358.2 334.2 176 152h-32v32l185 185a110 110 0 0 0 29.2-34.8"/>
  </svg>
);
