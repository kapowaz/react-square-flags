import type { SVGComponent } from '../../../types';

export const CountryFlagAO: SVGComponent = ({ title = 'Angola', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m220.9 203.6 21.7 15.8-8.3 25.5L256 229l21.7 15.7-8.3-25.5 21.7-15.7h-26.8L256 178l-8.3 25.5z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M320 145.1a127 127 0 0 0-64-17v33.3A94.7 94.7 0 1 1 208.7 338a94 94 0 0 1-31.6-29.8l-27.9 18.4a128 128 0 0 0 217.7-6.5 128 128 0 0 0-46.9-175"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M182.2 233.7a33.4 33.4 0 0 0 13.3 45.4l108.4 59.2c-7.4 13.5-3.4 30 10 37.3l29.3 16a28 28 0 0 0 37.8-11l16-29.3z"/>
  </svg>
);
