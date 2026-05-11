import { useState } from "react";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./PaymentPage.module.scss";

interface PaymentPackage {
  id: string;
  coins: number;
  price: number;
  bonus?: number;
}

export const PaymentPage = () => {
  const { t } = useI18n();
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const packages: PaymentPackage[] = [
    { id: "starter", coins: 100, price: 100 },
    { id: "bronze", coins: 500, price: 450, bonus: 50 },
    { id: "silver", coins: 1000, price: 850, bonus: 150 },
    { id: "gold", coins: 2500, price: 2000, bonus: 500 },
    { id: "platinum", coins: 5000, price: 3750, bonus: 1250 },
  ];

  const PRICE_PER_COIN = 0.9; // Base price per coin
  const MIN_AMOUNT = 100;

  const calculateCustomPrice = (amount: number): number => {
    return Math.ceil(amount * PRICE_PER_COIN);
  };

  const calculateCustomBonus = (amount: number): number => {
    if (amount >= 10000) return Math.floor(amount * 0.3); // 30% bonus for 10k+
    if (amount >= 5000) return Math.floor(amount * 0.25); // 25% bonus for 5k+
    if (amount >= 2500) return Math.floor(amount * 0.2); // 20% bonus for 2.5k+
    if (amount >= 1000) return Math.floor(amount * 0.15); // 15% bonus for 1k+
    if (amount >= 500) return Math.floor(amount * 0.1); // 10% bonus for 500+
    return 0;
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    if (packageId !== "custom") {
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= MIN_AMOUNT || value === "") {
      setCustomAmount(value);
      setSelectedPackage("custom");
    }
  };

  const handlePayment = async () => {
    if (!selectedPackage) return;
    
    setIsLoading(true);
    // Payment logic will be implemented later
    console.log("Processing payment for package:", selectedPackage);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      alert(t.payment.successMessage || "Payment successful!");
    }, 2000);
  };

  const selectedPackageData = selectedPackage === "custom" && customAmount ? {
    id: "custom",
    coins: parseInt(customAmount) || 0,
    price: calculateCustomPrice(parseInt(customAmount) || 0),
    bonus: calculateCustomBonus(parseInt(customAmount) || 0)
  } : packages.find(p => p.id === selectedPackage);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1>{t.payment.title}</h1>
        <p className={styles.subtitle}>{t.payment.subtitle}</p>

        <div className={styles.mainContent}>
          <div className={styles.packagesSection}>
            <div className={styles.packagesGrid}>
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${
                    selectedPackage === pkg.id ? styles.selected : ""
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
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
              ))}
              
              {/* Custom Amount Card */}
              <div
                className={`${styles.packageCard} ${styles.customCard} ${
                  selectedPackage === "custom" ? styles.selected : ""
                }`}
                onClick={() => handlePackageSelect("custom")}
              >
                <div className={styles.packageHeader}>
                  <h3>{t.payment.packages.custom}</h3>
                </div>
                <div className={styles.customInput}>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder={t.payment.enterAmount}
                    min={MIN_AMOUNT}
                    className={styles.amountInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className={styles.coinIcon}>🪙</span>
                </div>
                <div className={styles.price}>
                  <span className={styles.minAmount}>{t.payment.minAmount}</span>
                  <div className={styles.pricePerCoin}>
                    <span className={styles.currency}>{t.payment.pricePerCoin}:</span>
                    <span>{PRICE_PER_COIN} {t.payment.currency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
              onClick={handlePayment}
              disabled={!selectedPackage || isLoading}
            >
              {isLoading ? t.payment.processing : t.payment.payButton}
            </button>

            <div className={styles.info}>
              <p>{t.payment.info}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
