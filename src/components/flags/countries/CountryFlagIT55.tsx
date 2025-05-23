import type { SVGComponent } from '../../../types';

export const CountryFlagIT55: SVGComponent = ({ title = 'Umbria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-green, #6da544)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M152 72h208v384H152z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M232 136h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48zm112-48h-48v48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16zm-176 48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48z"/>
  </svg>
);
