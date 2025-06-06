import type { SVGComponent } from '../../../types';

export const CountryFlagAN: SVGComponent = ({ title = 'Netherlands Antilles', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M171 0h170v512H171z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 171v170H0V171z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m256 181 8.3 25.5H291l-21.7 15.8 8.3 25.5L256 232l-21.7 15.8 8.3-25.5-21.7-15.8h26.8zm47 76.2 8.2 25.5H338l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zm-94 0 8.4 25.5h26.8l-21.7 15.7 8.3 25.6-21.7-15.8-21.7 15.8 8.3-25.6-21.7-15.7h26.8zM135.3 219l8.3 25.6h26.8l-21.7 15.8 8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8H127zm241.4 0 8.3 25.6h26.8l-21.7 15.8 8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"/>
  </svg>
);
