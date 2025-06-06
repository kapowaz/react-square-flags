import type { SVGComponent } from '../../../types';

export const CountryFlagIT65: SVGComponent = ({ title = 'Abruzzo', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M256 404.4S368 378.7 368 293v-77l-88 80-78 86c27.3 16.3 54 22.4 54 22.4"/><path fill="var(--flag-palette-white, #eeeeee)" d="M144 152v141a97 97 0 0 0 1.6 17.4L224 240l80-88z"/><path fill="var(--flag-palette-green, #6da544)" d="M304 152 145.5 310.5c6.5 34 31.7 57 56.4 71.6l166-166v-64h-64z"/>
  </svg>
);
