import type { SVGComponent } from '../../../types';

export const CountryFlagVA: SVGComponent = ({ title = 'Holy See (Vatican)', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M307.1 0v512H.1V0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 0v512H256V0z"/><path fill="var(--flag-palette-mid-grey-3, #acabb1)" d="m354 222.8 48.1 63.6A33.4 33.4 0 1 0 420 273l-75-99.2-17.7 13.4-26.7 20.2 26.9 35.5zm69.3 73.1a11.1 11.1 0 1 1 13.4 17.8 11.1 11.1 0 0 1-13.4-17.8"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m436.5 242.9 26.9-35.5-26.6-20.2-17.8-13.4-75 99.2a33.4 33.4 0 1 0 17.8 13.4l48-63.6zm-93.7 68.6a11.1 11.1 0 1 1-17.8-13.4 11.1 11.1 0 0 1 17.8 13.4"/>
  </svg>
);
