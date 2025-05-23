import type { SVGComponent } from '../../../types';

export const LanguageFlagIO: SVGComponent = ({ title = 'Ido', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m256 73-27 158h-64l32 55L73 390l151-55 32 55 32-55 151 55-124-103 32-55h-64z"/>
  </svg>
);
