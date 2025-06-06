import type { SVGComponent } from '../../../types';

export const CountryFlagUSGa: SVGComponent = ({ title = 'Georgia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v171l-64 85 64 85v171H0V341L341 0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M341 171h171v170H341l-64-85z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h341v341H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M168 117a40 40 0 0 0-40 40v60h80v-60a40 40 0 0 0-40-40"/><path fill="var(--flag-palette-white, #eeeeee)" d="m151 89 52-37h-64l52 37-20-61zm101 62 37 52v-64l-37 52 61-20zm-62 101-52 37h64l-52-37 20 61zM89 191l-37-52v64l37-52-61 20zm125-92 63 10-45-45 10 63 29-57zm28 115-10 63 45-45-63 10 57 29zm-115 28-63-10 45 45-10-63-29 57zM99 127l10-63-45 45 63-10-57-29z"/>
  </svg>
);
