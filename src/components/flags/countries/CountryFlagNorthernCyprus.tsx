import type { SVGComponent } from '../../../types';

export const CountryFlagNorthernCyprus: SVGComponent = ({ title = 'Northern Cyprus', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 464h512v-48H0zM0 48v48h512V48zm185 119a89 89 0 0 1 62 25 72 72 0 1 0 0 128 89 89 0 1 1-62-153m106 71 34-11-21 29 21 29-34-11-21 29v-36l-34-11 34-11v-36z"/>
  </svg>
);
