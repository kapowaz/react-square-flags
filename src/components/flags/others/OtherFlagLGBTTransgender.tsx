import type { SVGComponent } from '../../../types';

export const OtherFlagLGBTTransgender: SVGComponent = ({ title = 'Transgender', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="m0 410 256-32 256 32v102H0z"/><path fill="var(--flag-palette-pink, #f5a9b8)" d="m0 308 256-32 256 32v102H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 204 256-32 256 32v104H0z"/><path fill="var(--flag-palette-pink, #f5a9b8)" d="m0 102 256-32 256 32v102H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v102H0z"/>
  </svg>
);
