import type { SVGComponent } from '../../../types';

export const CountryFlagKP: SVGComponent = ({ title = 'North Korea', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 512H0v-89h512zm0-423H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 122.4h512v267.1H0z"/><circle cx="157.6" cy="256" r="98.4" fill="var(--flag-palette-white, #eeeeee)"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m157.6 157.6 22 68h71.6l-57.9 42 22.1 68-57.8-42-58 42 22.2-68-57.9-42h71.5z"/>
  </svg>
);
