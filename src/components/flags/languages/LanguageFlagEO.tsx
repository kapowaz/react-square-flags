import type { SVGComponent } from '../../../types';

export const LanguageFlagEO: SVGComponent = ({ title = 'Esperanto', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-green, #6da544)" d="m128 29.6 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"/>
  </svg>
);
