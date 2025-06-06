import type { SVGComponent } from '../../../types';

export const CountryFlagTK: SVGComponent = ({ title = 'Tokelau', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><g clipPath="url(#flag-nhmeuw)"><path fill="var(--flag-palette-yellow, #ffda44)" d="m598.6 382.9-32 16.7h-438l-16-16.7 16-16.7h438zM411.8 121.3c-2.3 11-3.3 22.8-3.3 34.5 0 59.6 46.5 177.2 177.4 178.5h12.7v9.6h-454z"/></g><path fill="var(--flag-palette-white, #eeeeee)" d="m188 133.6 5.6 17h17.9L197 161l5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zM115.4 256l7 21.3h22.3l-18 13 6.8 21.4-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zm0-178 7 21.2h22.3l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2 6.9 21.2-18.1-13.1-18.1 13.1 7-21.2-18.2-13.2H53z"/><defs><clipPath id="flag-nhmeuw"><path fill="#fff" d="M0 0h512v512H0z"/></clipPath></defs>
  </svg>
);
