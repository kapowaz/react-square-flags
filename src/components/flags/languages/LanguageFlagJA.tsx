import type { SVGComponent } from '../../../types';

export const LanguageFlagJA: SVGComponent = ({ title = 'Japanese', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 368a112 112 0 1 0 0-224 112 112 0 0 0 0 224"/>
  </svg>
);
