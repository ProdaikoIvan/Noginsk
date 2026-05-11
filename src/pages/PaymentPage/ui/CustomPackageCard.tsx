import { useI18n } from "../../../shared/i18n/I18nProvider";
import baseStyles from "./PaymentPackageCard.module.scss";
import styles from "./CustomPackageCard.module.scss";

interface Props {
  customAmount: string;
  isSelected: boolean;
  onSelect: () => void;
  onAmountChange: (value: string) => void;
  minAmount: number;
  pricePerCoin: number;
}

export const CustomPackageCard = ({
  customAmount,
  isSelected,
  onSelect,
  onAmountChange,
  minAmount,
  pricePerCoin,
}: Props) => {
  const { t } = useI18n();

  return (
    <div
      className={`${baseStyles.packageCard} ${styles.customCard} ${
        isSelected ? baseStyles.selected : ""
      }`}
      onClick={onSelect}
    >
      <div className={baseStyles.packageHeader}>
        <h3>{t.payment.packages.custom}</h3>
      </div>
      <div className={styles.customInput}>
        <input
          type="number"
          value={customAmount}
          onChange={(e) => onAmountChange(e.target.value)}
          placeholder={t.payment.enterAmount}
          min={minAmount}
          className={styles.amountInput}
          onClick={(e) => e.stopPropagation()}
        />
        <span className={baseStyles.coinIcon}>🪙</span>
      </div>
      <div className={baseStyles.price}>
        <span className={styles.minAmount}>{t.payment.minAmount}</span>
        <div className={styles.pricePerCoin}>
          <span className={baseStyles.currency}>{t.payment.pricePerCoin}:</span>
          <span>{pricePerCoin} {t.payment.currency}</span>
        </div>
      </div>
    </div>
  );
};
