import type { SVGComponent } from '../../../types';

export const CountryFlagGD: SVGComponent = ({ title = 'Grenada', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M64 64h384v384H64z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M64 64v384l192-192zm384 384V64L256 256z"/><circle cx="256" cy="256" r="98.4" fill="var(--flag-palette-dark-red, #a2001d)"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m256 157.6 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5zm-128.2 94.2a22.3 22.3 0 0 1-37.6 23.8c-12-18.8-5-49.5-5-49.5s30.7 6.9 42.6 25.7"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M115 284.2a11.1 11.1 0 1 0 0-22.2 11.1 11.1 0 0 0 0 22.2"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m140.8 451.2 6.5 19.9h20.9l-17 12.3 6.5 19.9-16.9-12.3-17 12.3 6.5-19.9-16.9-12.3h21zm115.2 0 6.5 19.9h20.9l-17 12.3 6.5 19.9L256 491l-17 12.3 6.5-19.9-16.9-12.3h21zm115.2 0 6.5 19.9h20.9l-17 12.3 6.5 19.9-16.9-12.3-17 12.3 6.5-19.9-16.9-12.3h21zM140.8 3.2l6.5 19.9h20.9l-17 12.3 6.5 19.9L140.8 43l-17 12.3 6.5-19.9-16.9-12.3h21zm115.2 0 6.5 19.9h20.9l-17 12.3 6.5 19.9L256 43l-17 12.3 6.5-19.9-16.9-12.3h21zm115.2 0 6.5 19.9h20.9l-17 12.3 6.5 19.9L371.2 43l-17 12.3 6.5-19.9-16.9-12.3h21z"/>
  </svg>
);
