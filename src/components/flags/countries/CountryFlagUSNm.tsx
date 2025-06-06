import type { SVGComponent } from '../../../types';

export const CountryFlagUSNm: SVGComponent = ({ title = 'New Mexico', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-yellow, #ffda44)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-bright-red, #d80027)" fillRule="evenodd" d="M238 56a12 12 0 0 1 12 12v84.2a106 106 0 0 1 12 0V68a12 12 0 0 1 24 0v88.4q6.2 1.8 12 4.4V104a12 12 0 0 1 24 0v71.6q7.8 6.5 14.4 14.4H408a12 12 0 0 1 0 24h-56.8q2.6 5.9 4.4 12H444a12 12 0 0 1 0 24h-84.2a106 106 0 0 1 0 12H444a12 12 0 0 1 0 24h-88.4q-1.8 6.2-4.4 12H408a12 12 0 0 1 0 24h-71.6q-6.5 7.8-14.4 14.4V408a12 12 0 0 1-24 0v-56.8q-5.8 2.6-12 4.4V444a12 12 0 0 1-24 0v-84.2a106 106 0 0 1-12 0V444a12 12 0 0 1-24 0v-88.4q-6.1-1.8-12-4.4V408a12 12 0 0 1-24 0v-71.6q-7.8-6.5-14.4-14.4H104a12 12 0 0 1 0-24h56.8q-2.6-5.8-4.4-12H68a12 12 0 0 1 0-24h84.2a106 106 0 0 1 0-12H68a12 12 0 0 1 0-24h88.4q1.8-6.1 4.4-12H104a12 12 0 0 1 0-24h71.6q6.5-7.8 14.4-14.4V104a12 12 0 0 1 24 0v56.8q5.9-2.6 12-4.4V68a12 12 0 0 1 12-12m18 280a80 80 0 1 0 0-160 80 80 0 0 0 0 160" clipRule="evenodd"/>
  </svg>
);
