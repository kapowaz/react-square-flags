import type { SVGComponent } from '../../../types';

export const CountryFlagGL: SVGComponent = ({ title = 'Greenland', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M192 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M64 256a128 128 0 0 1 256 0"/>
  </svg>
);
