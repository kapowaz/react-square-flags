import type { SVGComponent } from '../../../types';

export const CountryFlagAFEmirate: SVGComponent = ({ title = 'Afghanistan', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-black, #333333)" d="M131 189v78c0 12-10 22-22 22v34c30 0 55-25 55-56v-78zm50 0v45a39 39 0 0 0 61 32 39 39 0 0 0 22 7l5-1a22 22 0 0 1-21 17v34c30 0 55-25 55-56v-78h-33v45a6 6 0 0 1-11 0v-45h-34v45a6 6 0 0 1-11 0v-45zm139 0v78h33v-78zm50 0v78c0 12-10 22-22 22v34c31 0 56-25 56-56v-78zM181 289v34h50v-34z"/>
  </svg>
);
