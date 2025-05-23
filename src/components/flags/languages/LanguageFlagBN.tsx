import type { SVGComponent } from '../../../types';

export const LanguageFlagBN: SVGComponent = ({ title = 'Bengali', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M240 368a112 112 0 1 0 0-224 112 112 0 0 0 0 224"/>
  </svg>
);
