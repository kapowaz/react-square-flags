import type { SVGComponent } from '../../../types';

export const CountryFlagUSCa: SVGComponent = ({ title = 'California', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 416h512v96H0z"/><path fill="var(--flag-palette-green, #6da544)" d="m396 280-67-8-34 3-24-2-54-2-93 13-8 12h299z"/><path fill="var(--flag-palette-dark-brown, #584528)" d="m389 273-10-33-9-44-23-23-32-13-50 3-41-8-50 24-29 9-9 20-7 15 11 19 10 2 16-1 6-7 28-8-12 31-11 14-19 9 13 3 15 1 19-12 26-24 11 3 14 13-16 12 16 1 10-3 9-16-4-19 11 1 10 3 1 23-14 8 1 6h26l34-30 15 12 12 4-6 8 1 5h17l10-7zM84 340h178v32H84zm204 0h140v32H288z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m71 182 69-50H55l69 50-26-81z"/>
  </svg>
);
