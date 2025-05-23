import type { SVGComponent } from '../../../types';

export const LanguageFlagKN: SVGComponent = ({ title = 'Kannada', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v256H0z"/>
  </svg>
);
