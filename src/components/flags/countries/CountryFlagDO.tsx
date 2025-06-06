import type { SVGComponent } from '../../../types';

export const CountryFlagDO: SVGComponent = ({ title = 'Dominican Republic', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M0 0h256v256H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M512 0v256H256V0z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M512 512H256V256h256z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M0 512V256h256v256z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 320V192H320V0H192v192H0v128h192v192h128V320z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M208 205.4v53.3a48 48 0 1 0 96 0v-53.3z"/><path fill="var(--flag-palette-blue, #0052b4)" d="M304 258.7a48 48 0 0 1-48 48V256h48zm-48-53.3V256h-48v-50.6z"/><path fill="var(--flag-palette-green, #6da544)" fillRule="evenodd" d="m240.9 245.8-1.5 4.8a17.5 17.5 0 1 0 33.2 0l-1.5-4.8 9.5-3 1.6 4.7a27.5 27.5 0 1 1-52.4 0l1.6-4.8z" clipRule="evenodd"/>
  </svg>
);
