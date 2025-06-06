import type { SVGComponent } from '../../../types';

export const LanguageFlagPT: SVGComponent = ({ title = 'Portuguese', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M136 512V0h240v512z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M344 512V0h168v512z"/><path fill="var(--flag-palette-dark-green, #496e2d)" d="M0 512V0h168v512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M167 345a89 89 0 1 0 0-178 89 89 0 0 0 0 178"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M108.5 202.6v64.9a58.4 58.4 0 1 0 116.9 0v-65z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M167 304.2a34.4 34.4 0 0 1-34.3-34.3v-45.3h68.6v45.1A34.4 34.4 0 0 1 167 304z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M173.8 286c0 3.7-3.1 6.7-6.8 6.7v.1a7 7 0 0 1-6.8-6.8v-8.9h13.6zM154 264.4c0 3.7-3 6.8-6.8 6.8s-6.7-3-6.7-6.8v-8.9H154zm19.8 0c0 3.7-3.1 6.8-6.8 6.8s-6.8-3-6.8-6.8v-8.9h13.6zm19.7 0a6.7 6.7 0 1 1-13.5 0v-8.9h13.5zm-19.7-21.6a6.8 6.8 0 0 1-13.6.1v-9h13.6z"/>
  </svg>
);
