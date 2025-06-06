import type { SVGComponent } from '../../../types';

export const CountryFlagOtomi: SVGComponent = ({ title = 'Otomi', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-gold, #ff9811)" d="m0 160 256-32 256 32v192l-256 32L0 352z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 160 256-32 256 32v32H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v160H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m0 352 256 32 256-32v-32H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 352h512v160H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 416a160 160 0 1 0 0-320 160 160 0 0 0 0 320"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M256 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256"/><path fill="var(--flag-palette-gold, #ff9811)" d="M207 139v68h-68l49 49-49 49h68v68l49-49 49 49v-68h68l-49-49 49-49h-68v-68l-49 49z"/>
  </svg>
);
