import type { SVGComponent } from '../../../types';

export const LanguageFlagAA: SVGComponent = ({ title = 'Afar', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0v512l256-256z"/><path fill="var(--flag-palette-brown, #85693d)" d="m345 229-12 11 40 40-40 40 11 11 40-40 40 40 11-11-40-40 40-40-11-11-40 40z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m384 181 21 62-54-38h66l-53 39z"/>
  </svg>
);
