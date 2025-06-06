import type { SVGComponent } from '../../../types';

export const LanguageFlagLG: SVGComponent = ({ title = 'Ganda', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 394.7h512V512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 309.3h512v117.4H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 224h512v117.3H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 138.7h512V256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 53.3h512v117.4H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v85.3H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M341.4 256a85.4 85.4 0 1 1-170.8 0 85.4 85.4 0 0 1 170.8 0"/><path fill="var(--flag-palette-black, #333333)" d="M287.3 260.4 256 246.8l7.7-26a17 17 0 0 0-4.4-15.6l7.8-7.8a27.7 27.7 0 0 0-39.3 0l7.8 7.8a17 17 0 0 0-4.1 16.7l-11.9 11.8h21.6s-9 13.4-13.8 24.4 0 24.4 11.3 29.4l6.5 2.9 10.8 10.1v11.2l-11.1 11H267v-22.2l10.2-10.1h21l.3-.7a22 22 0 0 0-11.3-29.3"/>
  </svg>
);
