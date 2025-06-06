import type { SVGComponent } from '../../../types';

export const CountryFlagNU: SVGComponent = ({ title = 'Niue', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M232 256h24v-24L152 128 256 24V0h-24L128 104 24 0H0v24l104 104L0 232v24h24l104-104z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M256 160V96h-96V0H96v96H0v64h96v96h64v-96z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M256 144v-32H144V0h-32v112H0v32h112v112h32V144z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 16V0l96 96H80zm256 224v16l-96-96h16zM16 256H0l96-96v16zM240 0h16l-96 96V80z"/><circle cx="128" cy="128" r="37" fill="var(--flag-palette-navy, #002266)"/><path fill="var(--flag-palette-yellow, #ffda44)" d="m128 91 8.3 25.6h26.8l-21.7 15.8 8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.8-15.8h26.9zm80.7 20.3 3.8 11.5h12l-9.7 7.2 3.7 11.5-9.8-7.1-9.8 7.1 3.7-11.5-9.8-7.2H205zm-161.4 0 3.7 11.5h12.2l-9.8 7.2 3.7 11.5-9.8-7.1-9.8 7.1 3.7-11.5-9.8-7.2h12.1zM128 192l3.8 11.5h12l-9.7 7.2 3.7 11.5-9.8-7.1-9.8 7.1 3.7-11.5-9.8-7.2h12.2zm0-161.4 3.8 11.5h12l-9.7 7.2 3.7 11.5-9.8-7.1-9.8 7.1 3.7-11.5-9.8-7.2h12.2z"/>
  </svg>
);
