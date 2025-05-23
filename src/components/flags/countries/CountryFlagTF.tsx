import type { SVGComponent } from '../../../types';

export const CountryFlagTF: SVGComponent = ({ title = 'French Southern Territories', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M389.1 429H405l-12.9 8.7L397 452l-13-8.8-13 8.8 4.9-14.3L363 429h15.9l5.1-15zm-45-34H360l-12.9 8.7L352 418l-13-8.8-13 8.8 4.9-14.3L318 395h15.9l5.1-15zm90 0H450l-12.9 8.7L442 418l-13-8.8-13 8.8 4.9-14.3L408 395h15.9l5.1-15zM445 256l-13 21h-36v12h28l-12 20h-16v39l27-43 37 59h-18l-3.4-6h-31.2L384 400l-23.4-42h-31.2l-3.4 6h-18l37-59 27 43v-71h-36l-13-21zm-29.8 88h15.6l-7.8-14zm-78 0h15.6l-7.8-14zm-31-50H322l-12.9 8.7L314 317l-13-8.8-13 8.8 4.9-14.3L280 294h15.9l5.1-15zm166 0H488l-12.9 8.7L480 317l-13-8.8-13 8.8 4.9-14.3L446 294h15.9l5.1-15zM0 0h256v256H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h75v224H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M75 0h74v224H75z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M149 0h75v224h-75z"/>
  </svg>
);
