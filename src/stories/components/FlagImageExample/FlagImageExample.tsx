import { SquareFlagImage } from '../../../components/SquareFlagImage';
import type { CountryCode, LanguageCode, OtherFlagCode } from '../../../types';
import styles from './FlagImageExample.module.css';

export interface IFlagImageExampleProps {
  code: CountryCode | LanguageCode | OtherFlagCode;
  type: 'country' | 'language' | 'other';
  name: string;
}

export const FlagImageExample = ({
  code,
  type,
  name,
}: IFlagImageExampleProps) => {
  return (
    <div className={styles.cell}>
      <code className={styles.code} title={code}>
        {code}
      </code>
      <SquareFlagImage code={code} type={type} className={styles.flag} />
      <strong className={styles.name} title={name}>
        {name}
      </strong>
    </div>
  );
};
