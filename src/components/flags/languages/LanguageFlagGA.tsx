import type { SVGComponent } from '../../../types';

export const LanguageFlagGA: SVGComponent = ({ title = 'Irish', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M136 512V0h240v512z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M344 512V0h168v512z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512V0h168v512z"/>
  </svg>
);
