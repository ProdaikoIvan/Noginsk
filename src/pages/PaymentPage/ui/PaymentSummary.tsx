import { useI18n } from "../../../shared/i18n/I18nProvider";
import styles from "./PaymentSummary.module.scss";
import { PaymentPackage } from "./PaymentPackageCard";

interface Props {
  selectedPackageData: PaymentPackage | undefined;
  isLoading: boolean;
  onPayment: () => void;
}

export const PaymentSummary = ({ selectedPackageData, isLoading, onPayment }: Props) => {
  const { t } = useI18n();

  return (
    <div className={styles.paymentDetails}>
      {selectedPackageData && (
        <div className={styles.selectedInfo}>
          <h3>{t.payment.selectedPackage}</h3>
          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <span>{t.payment.totalCoins}:</span>
              <span>
                {selectedPackageData.coins + (selectedPackageData.bonus || 0)} 🪙
              </span>
            </div>
            <div className={styles.summaryItem}>
              <span>{t.payment.totalPrice}:</span>
              <span>
                {t.payment.currency} {selectedPackageData.price}
              </span>
            </div>
            {selectedPackageData.bonus && (
              <div className={styles.summaryItem}>
                <span>{t.payment.bonusCoins}:</span>
                <span className={styles.bonusText}>+{selectedPackageData.bonus} 🪙</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.paymentSection}>
        <h3>{t.payment.paymentMethod}</h3>
        <div className={styles.paymentMethods}>
          <label className={styles.paymentMethod}>
            <input type="radio" name="payment" defaultChecked />
            <span className={styles.methodIcon}>💳</span>
            <span>{t.payment.methods.card}</span>
          </label>
          <label className={styles.paymentMethod}>
            <input type="radio" name="payment" />
            <span className={styles.methodIcon}>📱</span>
            <span>{t.payment.methods.mobile}</span>
          </label>
          <label className={styles.paymentMethod}>
            <input type="radio" name="payment" />
            <span className={styles.methodIcon}>🏦</span>
            <span>{t.payment.methods.bank}</span>
          </label>
        </div>
      </div>

      <button
        type="button"
        className={styles.payButton}
        onClick={onPayment}
        disabled={!selectedPackageData || isLoading}
      >
        {isLoading ? t.payment.processing : t.payment.payButton}
      </button>

      <div className={styles.info}>
        <p>{t.payment.info}</p>
      </div>
    </div>
  );
};
