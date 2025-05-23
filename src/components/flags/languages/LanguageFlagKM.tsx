import type { SVGComponent } from '../../../types';

export const LanguageFlagKM: SVGComponent = ({ title = 'Central Khmer', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M345 306v-33.3h-22.2v-44.5l-22.3-22.3-22.2 22.3v-44.5L256 161.4l-22.3 22.3v44.5l-22.2-22.3-22.3 22.3v44.5H167v33.4h-22.3v33.4h222.6V306z"/>
  </svg>
);
