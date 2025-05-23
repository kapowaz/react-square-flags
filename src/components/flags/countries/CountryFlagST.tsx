import type { SVGComponent } from '../../../types';

export const CountryFlagST: SVGComponent = ({ title = 'São Tomé and Príncipe', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-green, #6da544)" d="M512 512H0V368h512zm0-368H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-black, #333333)" d="m326.4 208 10.8 33.2H372l-28.3 20.5 10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.2-20.5h34.8zm115.2 0 10.8 33.2h34.9L459 261.7l10.8 33.1-28.2-20.5-28.2 20.5 10.8-33.1-28.3-20.5h35z"/>
  </svg>
);
