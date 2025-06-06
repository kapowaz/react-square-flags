import type { SVGComponent } from '../../../types';

export const LanguageFlagLN: SVGComponent = ({ title = 'Lingala', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 71.4 297.4 199h134.1l-108.4 78.8 41.4 127.5L256 326.5l-108.5 78.8L189 277.8 80.5 199h134z"/><path fill="var(--flag-palette-black, #333333)" fillRule="evenodd" d="M297.4 199 256 71.4 214.6 199H80.5l108.4 78.8-41.4 127.5L256 326.5l108.5 78.8L323 277.8 431.5 199zm84.9 16h-96.5L256 123.2 226.2 215h-96.5l78 56.7-29.8 91.7 78.1-56.7 78 56.7-29.8-91.7z" clipRule="evenodd"/>
  </svg>
);
