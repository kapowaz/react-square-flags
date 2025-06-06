import type { SVGComponent } from '../../../types';

export const LanguageFlagENIe: SVGComponent = ({ title = 'Irish English', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M136 512V0h240v512z"/><path fill="var(--flag-palette-gold, #ff9811)" d="M344 512V0h168v512z"/><path fill="var(--flag-palette-green, #6da544)" d="M0 512V0h168v512z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 0v512H16l176-176v-16l32-32h64v-64z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M320 368v144h144zM48 512l144-144v144zm320-192 144 144V320zm144-128V48L368 192z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="m288 224-64 64v224h64V288h224v-64z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 480 352 320h-32l192 192zM32 512l160-160v-32L0 512z"/>
  </svg>
);
