import type { SVGComponent } from '../../../types';

export const CountryFlagAQTrueSouth: SVGComponent = ({ title = 'Antarctica', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M398 256 256 28 114 256l142 228z"/><path fill="var(--flag-palette-blue, #0052b4)" d="m114 256 142 228 142-228-142 57z"/>
  </svg>
);
