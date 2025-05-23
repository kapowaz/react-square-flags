import type { SVGComponent } from '../../../types';

export const LanguageFlagTN: SVGComponent = ({ title = 'Tswana', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 178.1h512v155.8H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 211.5h512v89H0z"/>
  </svg>
);
