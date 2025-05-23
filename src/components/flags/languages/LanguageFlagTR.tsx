import type { SVGComponent } from '../../../types';

export const LanguageFlagTR: SVGComponent = ({ title = 'Turkish', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M160.8 126A141 141 0 0 1 314 155a114 114 0 1 0 0 202 141 141 0 1 1-153.2-231m221.8 103.1 51.1-16.5-31.5 43.4 31.5 43.4-51-16.5-31.6 43.4v-53.7L300 256l51-16.6v-53.7z"/>
  </svg>
);
