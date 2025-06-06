import type { SVGComponent } from '../../../types';

export const LanguageFlagSS: SVGComponent = ({ title = 'Swati', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-dark-red, #a2001d)" d="M512 384H0V128h512z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 512H0V368h512z"/><path fill="var(--flag-palette-black, #333333)" d="M512 144H0V0h512z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M0 128h512v32H0zm0 224h512v32H0zm423-84.9H89V245h334zm-44.6-44.5H133.6v-22.3h244.8z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M380 256s-57.2 66.8-124 66.8-66.8-66.8-66.8-66.8 0-66.8 66.8-66.8S380 256 380 256"/><path fill="var(--flag-palette-black, #333333)" d="M256 322.8c-66.8 0-124-66.8-124-66.8s57.2-66.8 124-66.8"/><path fill="var(--flag-palette-white, #eeeeee)" d="M211.5 233.7h22.2v44.6h-22.2z"/><path fill="var(--flag-palette-black, #333333)" d="M278.3 233.7h22.2v44.6h-22.2z"/><path fill="var(--flag-palette-dark-brown, #584528)" d="M89 233.7a22.3 22.3 0 1 1 0 44.6 22.3 22.3 0 0 1 0-44.6m334 0a22.3 22.3 0 1 1 0 44.6 22.3 22.3 0 0 1 0-44.6"/>
  </svg>
);
