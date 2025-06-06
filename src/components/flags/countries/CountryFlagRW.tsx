import type { SVGComponent } from '../../../types';

export const CountryFlagRW: SVGComponent = ({ title = 'Rwanda', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="m0 384 256-64 256 64v128H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m0 256 256-64 256 64v128H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="m0 128 256-64 256 64v128H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v128H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m384 200-11.2-30.3a43 43 0 0 0 22.4 0zm-41.7-60.8a43 43 0 0 0 30.5 30.5L348 190.4l5.5-31.9-31.9 5.5zm104 24.8-31.8-5.5 5.5 31.9-24.8-20.7a43 43 0 0 0 30.5-30.5zM384 92a36 36 0 1 1 0 72 36 36 0 0 1 0-72m-41.7 24.8a43 43 0 0 0 0 22.4L312 128zM456 128l-30.3 11.2a43 43 0 0 0 0-22.4zm-83.2-41.7a43 43 0 0 0-30.5 30.5L321.6 92l31.9 5.5-5.5-31.9zm41.7 11.2 31.9-5.5-20.7 24.8a43 43 0 0 0-30.5-30.5L420 65.6zm-19.3-11.2a43 43 0 0 0-22.4 0L384 56z"/>
  </svg>
);
