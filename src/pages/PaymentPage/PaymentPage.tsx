import { useState } from "react";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./PaymentPage.module.scss";
import { PaymentPackageCard, PaymentPackage } from "./ui/PaymentPackageCard";
import { CustomPackageCard } from "./ui/CustomPackageCard";
import { PaymentSummary } from "./ui/PaymentSummary";

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
                <PaymentPackageCard
                  key={pkg.id}
                  pkg={pkg}
                  isSelected={selectedPackage === pkg.id}
                  onSelect={() => handlePackageSelect(pkg.id)}
                />
              ))}
              
              <CustomPackageCard
                customAmount={customAmount}
                isSelected={selectedPackage === "custom"}
                onSelect={() => handlePackageSelect("custom")}
                onAmountChange={handleCustomAmountChange}
                minAmount={MIN_AMOUNT}
                pricePerCoin={PRICE_PER_COIN}
              />
            </div>
          </div>

          <PaymentSummary
            selectedPackageData={selectedPackageData}
            isLoading={isLoading}
            onPayment={handlePayment}
          />
        </div>
      </div>
    </section>
  );
};
