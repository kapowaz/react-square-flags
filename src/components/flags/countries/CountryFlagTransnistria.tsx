import type { SVGComponent } from '../../../types';

export const CountryFlagTransnistria: SVGComponent = ({ title = 'Transnistria', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 192h512v128H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M104.4 83a37 37 0 0 1 26.3 18.9c7.9 13.4 7.2 29.1-.5 39.1l12 12-7.1 7-12.5-12.4c-10.5 6-24.5 3.7-35-5.7L71 160l-7.1-7 22.9-21c8.3 8 19 10.6 27.3 7L90 114.8l-8.2 8.3-9.8-9.8L91 94l17.3 2.4L97 107.8l25 25c6.5-8.3 6.7-22-.3-34-3.9-7-10-12.6-17.3-15.8m4.8-32.5h19.6L113 62l6 18.6-15.7-11.5-15.7 11.5 6-18.6-15.9-11.6h19.6l6-18.5zm-8.4 4.7h-8.5l6.9 5.2-2.6 8.1 6.7-5 6.6 5-2.5-8.1 6.9-5.2h-8.6l-2.4-7.9z"/>
  </svg>
);
