import type { SVGComponent } from '../../../types';

export const CountryFlagWF: SVGComponent = ({ title = 'Wallis and Futuna', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-bright-red, #d80027)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="m384 232-72-72h144zm-24 24-72-72v144zm24 24-72 72h144zm24-24 72-72v144zM0 0h256v256H0z"/><path fill="var(--flag-palette-navy, #002266)" d="M0 0h75v224H0z"/><path fill="var(--flag-palette-white, #eeeeee)" d="M75 0h74v224H75z"/><path fill="var(--flag-palette-bright-red, #d80027)" d="M149 0h75v224h-75z"/>
  </svg>
);
