import type { SVGComponent } from '../../../types';

export const CountryFlagUSPr: SVGComponent = ({ title = 'Puerto Rico', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-white, #fcfcfc)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v102.4H0zm0 204.8h512v102.4H0zm0 204.8h512V512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m106 182 16.7 51.2h53.7l-43.5 31.5 16.6 51.1-43.4-31.6-43.5 31.6 16.6-51-43.4-31.6h53.7z"/>
  </svg>
);
