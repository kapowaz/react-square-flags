import type { SVGComponent } from '../../../types';

export const OtherFlagGalacticEmpire: SVGComponent = ({ title = 'Galactic Empire', ...props }) => (
  <svg viewBox="0 0 512 512" role="img" {...props}>
    {title && <title>{title}</title>}
    <path fill="var(--flag-palette-black, #333333)" d="M0 0h512v512H0z"/><path fill="var(--flag-palette-mid-grey-3, #acabb1)" fillRule="evenodd" d="M448 256a192 192 0 1 1-384 0 192 192 0 0 1 384 0m-16 0c0 29.3-7.1 56.9-19.8 81.2L394.6 327V185.4l17.8-10.2A175 175 0 0 1 432 256m-45.6 84.7 17.8 10.3a176 176 0 0 1-140.4 80.8v-20.3zm-138.6 70.6v20.5a176 176 0 0 1-140.2-81.1l17.7-10.2zM80 256c0 29.1 7 56.6 19.6 80.8l17.8-10.2V185l-17.6-10.2A175 175 0 0 0 80 256m168.2-155.5-122.6 70.8-17.8-10.3c30-46.7 81.4-78.3 140.4-80.8zm16 .2V80.2c59 2.7 110.3 34.4 140.2 81.1l-17.7 10.2zM240 136v58a64 64 0 0 0-29.7 17.2l-50.2-29-16 27.7 50.2 29a64 64 0 0 0 0 34.2l-50.2 29 16 27.8 50.2-29a64 64 0 0 0 29.7 17V376h32v-58a64 64 0 0 0 29.7-17.2l50.2 29 16-27.7-50.2-29a64 64 0 0 0 0-34.2l50.2-29-16-27.8-50.2 29a64 64 0 0 0-29.7-17V136z" clipRule="evenodd"/>
  </svg>
);
