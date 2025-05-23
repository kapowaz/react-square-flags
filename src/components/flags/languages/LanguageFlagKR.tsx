import type { SVGComponent } from '../../../types';

export const LanguageFlagKR: SVGComponent = ({ title = 'Kanuri', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m428.5 354.6 16.6 51h53.7l-43.4 31.7 16.6 51-43.5-31.5-43.4 31.5 16.6-51-43.5-31.6H412z"/>
  </svg>
);
