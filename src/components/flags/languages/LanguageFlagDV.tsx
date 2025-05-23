import type { SVGComponent } from '../../../types';

export const LanguageFlagDV: SVGComponent = ({ title = 'Divehi, Dhivehi, Maldivian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M96 96h320v320H96z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M296 149.3q10.2 0 20 1.9a106.7 106.7 0 0 0 0 209.6q-9.8 1.9-20 1.9a106.7 106.7 0 1 1 0-213.4"/>
  </svg>
);
