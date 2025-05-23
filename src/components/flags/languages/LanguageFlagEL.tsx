import type { SVGComponent } from '../../../types';

export const LanguageFlagEL: SVGComponent = ({ title = 'Modern Greek', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512H0v-64h512zm0-128H0v-64h512zm0-128H0v-64h512zm0-128H0V64h512z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h320v320H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M128 0h64v320h-64z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M320 128v64H0v-64z"/>
  </svg>
);
