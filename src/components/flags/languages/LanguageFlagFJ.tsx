import type { SVGComponent } from '../../../types';

export const LanguageFlagFJ: SVGComponent = ({ title = 'Fijian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-light-blue, #338af3)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h24v-24L152 128 256 24V0h-24L128 104 24 0H0v24l104 104L0 232v24h24l104-104z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 160V96h-96V0H96v96H0v64h96v96h64v-96z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 144v-32H144V0h-32v112H0v32h112v112h32V144z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 16V0l96 96H80zm256 224v16l-96-96h16zM16 256H0l96-96v16zM240 0h16l-96 96V80z"/><path fill="var(--flag-palette-light-grey, #f3f3f3)" d="M306 189.2v89c0 59.7 78 78 78 78s78-18.3 78-78v-89L384 167z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M462 189.2v-33.4H306v33.4h67V256h-67v22.3h66.8v74.5c6.7 2.3 11.1 3.4 11.1 3.4s4.4-1 11.1-3.4v-74.5h67V256h-66.8v-66.8z"/>
  </svg>
);
