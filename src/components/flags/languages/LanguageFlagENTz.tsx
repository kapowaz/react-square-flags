import type { SVGComponent } from '../../../types';

export const LanguageFlagENTz: SVGComponent = ({ title = 'Tanzanian English', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M512 0v512H0V0z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512V0h512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M512 112V0H400L0 400v112h112z"/><path fill="var(--flag-palette-black, #333333)" d="M0 448v64h64L512 64V0h-64z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 512H0V16l176 176h16l32 32v64h64z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M144 320H0v144zM0 48l144 144H0zm192 320L48 512h144zm128 144h144L320 368z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m288 288-64-64H0v64h224v224h64z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m32 512 160-160v-32L0 512zM0 32l160 160h32L0 0z"/>
  </svg>
);
