import type { SVGComponent } from '../../../types';

export const CountryFlagUSAz: SVGComponent = ({ title = 'Arizona', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M71 0 0 34v91l16 35-16 36v60l256 64 256-64v-60l-16-36 16-35V34L441 0h-85l-32 16-32-16h-72l-32 16-32-16z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 256h512v256H0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m292 0-36 256L356 0zm-36 256L512 34V0h-71zm0 0 256-60v-71zm0 0L0 125v71zm0 0L71 0H0v35zm0 0L220 0h-64z"/><path fill="var(--flag-palette-gold, #ff9811)" d="m256 128 83 256-217-159h268L173 384z"/>
  </svg>
);
