import type { SVGComponent } from '../../../types';

export const CountryFlagNA: SVGComponent = ({ title = 'Namibia', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-green, #496e2d)" d="M512 0v512H0V0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 512V0h512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 112V0H400L0 400v112h112z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 448v64h64L512 64V0h-64z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m117.7 189.7-11.2-30.3a43 43 0 0 0 22.4 0zM75.9 129a43 43 0 0 0 30.6 30.5l-24.8 20.7 5.4-31.8-31.8 5.4zM180 153.7l-31.8-5.4 5.5 31.8-24.8-20.7a43 43 0 0 0 30.5-30.5zm-62.3-72a36 36 0 1 1 0 72 36 36 0 0 1 0-72m-41.8 24.8a43 43 0 0 0 0 22.4l-30.2-11.2zm113.8 11.2L159.4 129a43 43 0 0 0 0-22.4zM106.5 76a43 43 0 0 0-30.6 30.5L55.3 81.7l31.8 5.5-5.4-31.8zm41.7 11.2 31.8-5.5-20.6 24.8A43 43 0 0 0 129 76l24.8-20.6zM129 76a43 43 0 0 0-22.4 0l11.2-30.3z"/>
  </svg>
);
