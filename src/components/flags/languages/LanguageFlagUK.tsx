import type { SVGComponent } from '../../../types';

export const LanguageFlagUK: SVGComponent = ({ title = 'Ukrainian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v256H0z"/>
  </svg>
);
