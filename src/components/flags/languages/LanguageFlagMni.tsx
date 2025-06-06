import type { SVGComponent } from '../../../types';

export const LanguageFlagMni: SVGComponent = ({ title = 'Manipuri', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v73L256 96 0 73z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 73h512v73l-256 23L0 146z"/><path fill="var(--flag-palette-black, #333333)" d="M0 146h512v73l-256 23L0 219z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 219h512v74l-256 22L0 293z"/><path fill="var(--flag-palette-purple, #4a1f63)" d="M0 293h512v73l-256 23L0 366z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 366h512v73l-256 23L0 439z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 439h512v73H0z"/>
  </svg>
);
