import type { SVGComponent } from '../../../types';

export const CountryFlagSG: SVGComponent = ({ title = 'Singapore', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 204.9h512V512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M83.5 128a78 78 0 0 1 61.2-76.1q-8.1-1.8-16.7-1.8a78 78 0 1 0 16.7 154A78 78 0 0 1 83.5 128m100.1-72.3 5.6 17H207l-14.5 10.5 5.5 17-14.5-10.5-14.4 10.5 5.5-17-14.5-10.5h18z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m140.3 89 5.5 17h17.9l-14.5 10.6 5.5 17-14.4-10.5-14.5 10.5 5.5-17L117 106h17.8zm86.7 0 5.5 17h18L236 116.6l5.5 17L227 123l-14.4 10.5 5.5-17-14.5-10.6h17.9zm-16.7 50.1 5.6 17h17.8l-14.4 10.5 5.5 17-14.5-10.5-14.4 10.6 5.5-17-14.5-10.6h17.9zm-53.3 0 5.5 17h17.9l-14.5 10.5 5.5 17-14.4-10.5-14.5 10.6 5.5-17-14.4-10.6h17.8z"/>
  </svg>
);
