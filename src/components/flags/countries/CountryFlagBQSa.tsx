import type { SVGComponent } from '../../../types';

export const CountryFlagBQSa: SVGComponent = ({ title = 'Saba', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <g clipPath="url(#flag-99pk7v)"><path fill="var(--flag-palette-blue, #0052b4)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M0 256 256 0l256 256-256 256z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"/></g><defs><clipPath id="flag-99pk7v"><path fill="#fff" d="M0 0h512v512H0z"/></clipPath></defs>
  </svg>
);
