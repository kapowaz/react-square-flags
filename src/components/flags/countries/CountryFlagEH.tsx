import type { SVGComponent } from '../../../types';

export const CountryFlagEH: SVGComponent = ({ title = 'Western Sahara', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-black, #333333)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0v512l256-256zm333.5 185.5A78 78 0 0 1 384 180a78 78 0 0 0 0 152.2 78 78 0 0 1-50.5-146.7"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m398.3 240.1-11-34-11.1 34h-35.8l29 21-11.1 34 28.9-21 29 21-11.1-34 29-21z"/>
  </svg>
);
