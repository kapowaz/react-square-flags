import type { SVGComponent } from '../../../types';

export const OtherFlagLGBTProgress: SVGComponent = ({ title = 'LGBT Progress', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-violet, #9c27b0)" d="m0 425 256-32 256 32v87H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="m0 340 256-32 256 32v85H0z"/><path fill="var(--flag-palette-green, #6da544)" d="m0 255 256-32 256 32v85H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m0 170 256-32 256 32v85H0z"/><path fill="var(--flag-palette-gold, #ff9811)" d="m0 85 256-32 256 32v85H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v85H0z"/><path fill="var(--flag-palette-black, #333333)" d="M160 0H80l192 256L80 512h80l256-256z"/><path fill="var(--flag-palette-brown, #85693d)" d="M80 0H0l192 256L0 512h80l256-256z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0v80l112 176L0 432v80l256-256z"/><path fill="var(--flag-palette-pink, #f5a9b8)" d="M0 80v80l32 96-32 96v80l176-176z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 160v192l96-96z"/>
  </svg>
);
