import type { SVGComponent } from '../../../types';

export const CountryFlagZA: SVGComponent = ({ title = 'South Africa', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <g clipPath="url(#flag-qvjzt7)"><path fill="var(--flag-palette-blue, #0052b4)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-green, #6da544)" fillRule="evenodd" d="M267.9 222.6 45.3 0H0v512h45.3l222.6-222.6H512v-66.8z" clipRule="evenodd"/><path fill="var(--flag-palette-white, #eeeeee)" fillRule="evenodd" d="m58.5-32 222.6 222.6H544v130.8H281.1L58.5 544H-32V-32zm210.8 320H512v-64H269.3L45.3 0H0v512h45.3z" clipRule="evenodd"/><path fill="var(--flag-palette-black, #333333)" d="M211.2 256 0 467.2V44.8z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M211.2 256 0 467.2v-45.3L166 256 0 90V44.9z"/></g><defs><clipPath id="flag-qvjzt7"><path fill="#fff" d="M0 0h512v512H0z"/></clipPath></defs>
  </svg>
);
