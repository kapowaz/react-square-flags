import type { SVGComponent } from '../../../types';

export const LanguageFlagOS: SVGComponent = ({ title = 'Ossetian, Ossetic', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v168H0z"/>
  </svg>
);
