import type { SVGComponent } from '../../../types';

export const LanguageFlagKW: SVGComponent = ({ title = 'Cornish', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/>
  </svg>
);
