import type { SVGComponent } from '../../../types';

export const LanguageFlagLO: SVGComponent = ({ title = 'Lao', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 345a89 89 0 1 0 0-178 89 89 0 0 0 0 178"/>
  </svg>
);
