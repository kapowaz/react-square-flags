import type { SVGComponent } from '../../../types';

export const CountryFlagESGa: SVGComponent = ({ title = 'Galicia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512H0V0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M448 512h64v-64L64 0H0v64z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m211 181 46 16.4 44-16.4v-38l-18 9-27-27-27 27-18-9z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M186 181v103a70 70 0 1 0 140 0V181z"/>
  </svg>
);
