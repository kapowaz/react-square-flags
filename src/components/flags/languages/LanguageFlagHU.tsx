import type { SVGComponent } from '../../../types';

export const LanguageFlagHU: SVGComponent = ({ title = 'Hungarian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 376H0V136h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 168H0V0h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V344h512z"/>
  </svg>
);
