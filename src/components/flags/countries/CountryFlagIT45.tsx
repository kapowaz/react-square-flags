import type { SVGComponent } from '../../../types';

export const CountryFlagIT45: SVGComponent = ({ title = 'Emilia-Romagna', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M136 128v240h240V128zm16 224V247l203 105zm208-161a166 166 0 0 1-104 0 166 166 0 0 0-104 0v-47h208z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M136 384h240v16H136z"/>
  </svg>
);
