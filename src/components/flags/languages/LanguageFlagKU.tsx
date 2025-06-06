import type { SVGComponent } from '../../../types';

export const LanguageFlagKU: SVGComponent = ({ title = 'Kurdish', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 376H0V136h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 168H0V0h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V344h512z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m256 95.9 19.4 83.6 56.1-65-21.6 83 79.8-31.4-57.7 63.5 85.3 9.2-80.7 29.3L408 316l-85-11.5 40.8 75.5-70-49.7L295 416l-39-76.4-38.9 76.4 1.2-85.8-70 49.7 40.8-75.5-85 11.5 71.3-47.9-80.7-29.3 85.3-9.3-57.7-63.4 79.8 31.5-21.6-83.1 56 65z"/>
  </svg>
);
