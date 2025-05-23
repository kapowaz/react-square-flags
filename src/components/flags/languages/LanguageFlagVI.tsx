import type { SVGComponent } from '../../../types';

export const LanguageFlagVI: SVGComponent = ({ title = 'Vietnamese', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m256 133 27.6 85H373l-72.3 52.5 27.6 85L256 303l-72.3 52.5 27.6-85L139 218h89.4z"/>
  </svg>
);
