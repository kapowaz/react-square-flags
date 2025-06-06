import type { SVGComponent } from '../../../types';

export const CountryFlagPT30: SVGComponent = ({ title = 'Madeira', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M384 0v512H128V0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 0v512H368V0zM144 0v512H0V0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m328.4 278.3 16.7 22.2v-89l-16.7 22.2h-50v-50l22.2-16.7h-89l22.2 16.7v50h-50l-16.7-22.2v89l16.7-22.2h50v50L211.6 345h89l-22.2-16.7v-50z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M323 244.9h-56v-55.7h-22V245h-55.7v22H245v55.7h22V267h55.7z"/>
  </svg>
);
