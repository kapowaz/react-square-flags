import type { SVGComponent } from '../../../types';

export const LanguageFlagIA: SVGComponent = ({ title = 'Interlingua', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m256 0 48 208 208 48-208 48-48 208-48-208L0 256l208-48z"/>
  </svg>
);
