import type { SVGComponent } from '../../../types';
import styles from './FlagExample.module.css';

export interface IFlagExampleProps {
  code: string;
  name: string;
  Flag: SVGComponent;
}

export const FlagExample = ({ code, name, Flag }: IFlagExampleProps) => {
  return (
    <div className={styles.cell}>
      <code className={styles.code} title={code}>
        {code}
      </code>
      <Flag className={styles.flag} />
      <strong className={styles.name} title={name}>
        {name}
      </strong>
    </div>
  );
};
