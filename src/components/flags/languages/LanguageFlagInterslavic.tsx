import type { SVGComponent } from '../../../types';

export const LanguageFlagInterslavic: SVGComponent = ({ title = 'Interslavic', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 512h512L256 256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512V0L256 256z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 0H0l256 256z"/>
  </svg>
);
