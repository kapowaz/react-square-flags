import type { SVGComponent } from '../../../types';

export const LanguageFlagMN: SVGComponent = ({ title = 'Mongolian', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-blue, #0052b4)" d="M376 0v512H136V0z"/><path fill="var(--flag-palette-dark-red, #a2001d)" d="M168 0v512H0V0zm344 0v512H344V0z"/><path fill="var(--flag-palette-yellow, #ffda44)" d="M117.4 256h22.3v89h-22.3zm-89.1 0h22.3v89H28.3zM84 311.7a22.3 22.3 0 1 0 0-44.6 22.3 22.3 0 0 0 0 44.6m0-89.1a11.1 11.1 0 1 0 0-22.3 11.1 11.1 0 0 0 0 22.3M61.7 322.8h44.6V345H61.7zm0-89.1h44.6V256H61.7zM84 133.6l7.9 24.2h25.5l-20.6 15 7.8 24.3L84 182l-20.6 15 7.8-24.3-20.6-15h25.5z"/>
  </svg>
);
