import type { SVGComponent } from '../../../types';

export const CountryFlagHN: SVGComponent = ({ title = 'Honduras', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M512 512H0V368h512zm0-368H0V0h512zM159.3 274.5l8.3 25.5h26.9l-21.7 15.7 8.2 25.5-21.7-15.7-21.6 15.7 8.2-25.5-21.7-15.7h26.9zm0-110.8 8.3 25.5h26.9L172.8 205l8.2 25.5-21.7-15.8-21.6 15.8 8.2-25.5-21.7-15.8h26.9zm193.4 110.8 8.2 25.5h26.9L366 315.7l8.3 25.5-21.7-15.7-21.7 15.7 8.2-25.5-21.7-15.7h26.9zm0-110.8 8.2 25.5h26.9L366 205l8.3 25.5-21.7-15.8-21.7 15.8 8.2-25.5-21.7-15.8h26.9zM256 219l8.3 25.6H291l-21.7 15.8 8.3 25.5L256 270l-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"/>
  </svg>
);
