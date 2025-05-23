import type { SVGComponent } from '../../../types';

export const LanguageFlagPap: SVGComponent = ({ title = 'Papiamento', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 396.8h512v28.8H0zm0-57.6h512V368H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m88.7 141.7-59.9-26.5 60-26.5 26.4-59.9 26.5 60 59.9 26.4-60 26.5-26.4 59.9z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m115.2 61.8 16.3 37 37 16.4-37 16.3-16.3 37-16.3-37-37-16.3 37-16.3z"/>
  </svg>
);
