import type { SVGComponent } from '../../../types';

export const LanguageFlagHR: SVGComponent = ({ title = 'Croatian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-white, #eeeeee)" d="M0 136h512v240H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 344h512v168H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v168H0z"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M338.5 181.7h-55l9.2-68.7 36.6-27.5L366 113v55zm-165 0h55l-9.2-68.7-36.6-27.5L146 113v55z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M292.7 181.7h-73.4V113L256 85.5l36.7 27.5z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M146 168v110a110 110 0 0 0 220 0V168z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M146 168v110a110 110 0 0 0 220 0V168z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M278 385.8a111 111 0 0 1-44 0V344h44zM190 300h44v44h-44v22a111 111 0 0 1-22-22h22zh-41.8q-2.1-10.7-2.2-22v-22h44zm154 44a111 111 0 0 1-22 22v-22zm-22 0h-44v-44h44zm-44-44h-44v-44h44zm88-22q0 11.3-2.2 22H322v-44h44zM190 168v44h44v44h-44v-44h-44v-44zm132 88h-44v-44h44zm-44-88v44h-44v-44zm88 0v44h-44v-44z"/>
  </svg>
);
