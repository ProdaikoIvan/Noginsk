import { useI18n } from "../../../shared/i18n/I18nProvider";
import styles from "./PaymentPackageCard.module.scss";

export interface PaymentPackage {
  id: string;
  coins: number;
  price: number;
  bonus?: number;
}

interface Props {
  pkg: PaymentPackage;
  isSelected: boolean;
  onSelect: () => void;
}

export const PaymentPackageCard = ({ pkg, isSelected, onSelect }: Props) => {
  const { t } = useI18n();

  return (
    <div
      className={`${styles.packageCard} ${isSelected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.packageHeader}>
        <h3>{t.payment.packages[pkg.id as keyof typeof t.payment.packages] || pkg.id}</h3>
        {pkg.bonus && (
          <span className={styles.bonus}>+{pkg.bonus} {t.payment.bonus}</span>
        )}
      </div>
      <div className={styles.coins}>
        <span className={styles.coinIcon}>🪙</span>
        <span className={styles.coinAmount}>{pkg.coins + (pkg.bonus || 0)}</span>
      </div>
      <div className={styles.price}>
        <span className={styles.currency}>{t.payment.currency}</span>
        <span className={styles.amount}>{pkg.price}</span>
      </div>
    </div>
  );
};
