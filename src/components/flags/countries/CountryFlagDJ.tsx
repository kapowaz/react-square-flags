import type { SVGComponent } from '../../../types';

export const CountryFlagDJ: SVGComponent = ({ title = 'Djibouti', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m106 182 16.7 51.2h53.7l-43.5 31.5 16.6 51.1-43.4-31.6-43.5 31.6 16.6-51-43.4-31.6h53.7z"/>
  </svg>
);
