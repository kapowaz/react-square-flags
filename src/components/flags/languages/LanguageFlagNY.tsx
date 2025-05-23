import type { SVGComponent } from '../../../types';

export const LanguageFlagNY: SVGComponent = ({ title = 'Chichewa, Chewa, Nyanja', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-black, #333333)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m332.5 122.4-31.2-14.7 16.6-30.2-34 6.4-4.3-34.3L256 75l-23.6-25.3L228 84l-33.9-6.4 16.6 30.2-31.2 14.7z"/>
  </svg>
);
