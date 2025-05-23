import type { SVGComponent } from '../../../types';

export const CountryFlagTT: SVGComponent = ({ title = 'Trinidad and Tobago', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M112 0H0v112l400 400h112V400z"/><path fill="var(--flag-palette-black, #333333)" d="M448 512h64v-64L64 0H0v64z"/>
  </svg>
);
