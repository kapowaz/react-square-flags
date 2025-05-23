import type { SVGComponent } from '../../../types';

export const LanguageFlagTH: SVGComponent = ({ title = 'Thai', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0v-85.3h512zm0-426.7H0V0h512z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 170.7h512v170.7H0z"/>
  </svg>
);
