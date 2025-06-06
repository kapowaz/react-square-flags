import type { SVGComponent } from '../../../types';

export const CountryFlagBQSe: SVGComponent = ({ title = 'Sint Eustatius', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" fillRule="evenodd" d="M480 32H32v448h448zM0 0v512h512V0z" clipRule="evenodd"/><path fill="var(--flag-palette-white, #eeeeee)" d="m100.2 256.1 155.8-98 155.8 98-155.8 98z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M167 300.6h200.3l-44.5-66.8-22.3 22.3-22.2-11-22.3 33.3h-44.5l-22.3-22.3z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="m256 189.3 5.5 17h18l-14.6 10.5 5.6 17-14.5-10.5-14.5 10.5 5.6-17-14.5-10.5h17.9z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M272 149.3 416.4 240H512v32h-95.6L272 362.9v133.3h-32V362.9L95.6 272.1H0v-32h95.6L240 149.3V16h32zM130.3 256 256 335.2l125.8-79.1L256 177z"/>
  </svg>
);
