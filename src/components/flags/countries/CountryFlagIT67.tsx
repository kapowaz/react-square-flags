import type { SVGComponent } from '../../../types';

export const CountryFlagIT67: SVGComponent = ({ title = 'Molise', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M344 152H144v141c0 18 5 33.3 12.7 46.3l30.9 33.1c31.4 23.5 68.4 32 68.4 32S368 378.7 368 293V192z"/><path fill="var(--flag-palette-white, #eeeeee)" fillRule="evenodd" d="m202.4 210.3-14.2-4.7-6.7 13.4-6.7-13.4-14.2 4.7 4.8-14.2-13.4-6.6 13.4-6.7-4.8-14.2 14.2 4.8 6.7-13.4 6.7 13.4 14.2-4.8-4.8 14.2 13.4 6.7-13.4 6.6z" clipRule="evenodd"/><path fill="var(--flag-palette-white, #eeeeee)" d="M344 152 156.6 339.4a117 117 0 0 0 30.9 33.1L368 192v-40z"/>
  </svg>
);
