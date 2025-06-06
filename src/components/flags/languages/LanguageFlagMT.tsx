import type { SVGComponent } from '../../../types';

export const LanguageFlagMT: SVGComponent = ({ title = 'Maltese', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M204.9 512V0h307v512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 512V0h256v512z"/><path fill="var(--flag-palette-dark-grey, #818085)" d="M96 64V32H64v32H32v32h32v32h32V96h32V64z"/>
  </svg>
);
