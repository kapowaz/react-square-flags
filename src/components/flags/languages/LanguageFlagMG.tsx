import type { SVGComponent } from '../../../types';

export const LanguageFlagMG: SVGComponent = ({ title = 'Malagasy', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h174.6v512H0z"/>
  </svg>
);
