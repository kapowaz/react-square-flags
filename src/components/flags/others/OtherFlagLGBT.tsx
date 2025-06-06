import type { SVGComponent } from '../../../types';

export const OtherFlagLGBT: SVGComponent = ({ title = 'LGBT', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-violet, #9c27b0)" d="m0 425 256-32 256 32v87H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="m0 340 256-32 256 32v85H0z"/><path fill="var(--flag-palette-green, #6da544)" d="m0 255 256-32 256 32v85H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m0 170 256-32 256 32v85H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="m0 85 256-32 256 32v85H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v85H0z"/>
  </svg>
);
