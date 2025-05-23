import type { SVGComponent } from '../../../types';

export const LanguageFlagHT: SVGComponent = ({ title = 'Haitian, Haitian Creole', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m352 328-96-12-96 12V184h192z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M256 316a48 48 0 1 0 0-96 48 48 0 0 0 0 96"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M256 292a24 24 0 1 0 0-48 24 24 0 0 0 0 48"/><path fill="var(--flag-palette-white, #eeeeee)" d="M222 234a48 48 0 0 1 68 0l-34 34z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M220 208h72l-36 36z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M244 232h24v72h-24z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M295 296h-78l-57 32h192z"/>
  </svg>
);
