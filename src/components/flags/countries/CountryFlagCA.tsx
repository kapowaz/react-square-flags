import type { SVGComponent } from '../../../types';

export const CountryFlagCA: SVGComponent = ({ title = 'Canada', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M128 512V0h256v512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 512V0h144v512zm368 0V0h144v512zm-67.5-222.6L345 267l-22.2-11v-22.3L278.3 256l22.2-44.5h-22.2L256 178l-22.3 33.4h-22.2l22.2 44.5-44.5-22.3V256L167 267.1l44.5 22.3-11.2 22.3H245V345h22v-33.3h44.6z"/>
  </svg>
);
