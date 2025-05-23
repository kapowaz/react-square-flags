import type { SVGComponent } from '../../../types';

export const CountryFlagAUQld: SVGComponent = ({ title = 'Queensland', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-navy, #002266)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h24v-24L152 128 256 24V0h-24L128 104 24 0H0v24l104 104L0 232v24h24l104-104z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 160V96h-96V0H96v96H0v64h96v96h64v-96z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 144v-32H144V0h-32v112H0v32h112v112h32V144z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 16V0l96 96H80zm256 224v16l-96-96h16zM16 256H0l96-96v16zM240 0h16l-96 96V80z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M384 330a74 74 0 1 0 0-148 74 74 0 0 0 0 148"/><path fill="var(--flag-palette-light-blue, #338af3)" d="M407 322.1 384 312l-23 10.2 23-66.1zm0-132.2L384 200l-23-10.2 23 66.1zM318 279l10.1-23-10.2-23 66.1 23zm132.1 0-10-23 10.1-23-66 23z"/><path fill="var(--flag-palette-dark-yellow, #ffc635)" d="M379 228v5h-5v10h5v9.4a15.2 15.2 0 0 0-20.7 22.2v9.4H410v-9.4a15.2 15.2 0 0 0-20.7-22.2V243h5v-10h-5v-5z"/>
  </svg>
);
