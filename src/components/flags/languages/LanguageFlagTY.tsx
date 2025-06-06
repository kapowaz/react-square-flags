import type { SVGComponent } from '../../../types';

export const LanguageFlagTY: SVGComponent = ({ title = 'Tahitian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M345 256c0 49.2-39.8 78-89 78s-89-28.8-89-78a89 89 0 1 1 178 0"/><path fill="var(--flag-palette-blue, #0052b4)" d="M345 256a89 89 0 1 1-178 0"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M222.6 278.3h-22.3v-44.6h22.3zm89 0h-22.2v-44.6h22.3zm-44.5 0H245v-78h22z"/>
  </svg>
);
