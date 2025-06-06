import type { SVGComponent } from '../../../types';

export const LanguageFlagNA: SVGComponent = ({ title = 'Nauru', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 224h512v64H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m144 288 10.4 41.4 29.6-30.7-11.7 41 41-11.7-30.7 29.6L224 368l-41.4 10.4 30.7 29.6-41-11.7 11.7 41-29.6-30.7L144 448l-10.4-41.4-29.6 30.7 11.7-41-41 11.7 30.7-29.6L64 368l41.4-10.4L74.7 328l41 11.7-11.7-41 29.6 30.7z"/>
  </svg>
);
