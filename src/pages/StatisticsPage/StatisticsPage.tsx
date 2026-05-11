import { useState, useEffect } from "react";

import styles from "./StatisticsPage.module.scss";
import { StatCategory, CategoryData } from "../../entities/statistics/model/types";
import { StatisticsApiService } from "../../entities/statistics/api/statistics.api";
import { StatisticsSidebar } from "./ui/StatisticsSidebar";
import { StatisticsTable } from "./ui/StatisticsTable";

export const StatisticsPage = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("pvp");
  const [categories, setCategories] = useState<StatCategory[]>([]);
  const [currentData, setCurrentData] = useState<CategoryData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const api = StatisticsApiService.getInstance();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await api.getCategories();
        setCategories(cats);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);
      try {
        const data = await api.getCategoryData(selectedCategory);
        setCurrentData(data);
      } catch (error) {
        console.error("Failed to fetch category data", error);
        setCurrentData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryData();
  }, [selectedCategory]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>📊 Статистика сервера</h1>
        
        <div className={styles.content}>
          {/* Left Menu */}
          <StatisticsSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Right Content */}
          <main className={styles.statsContent}>
            <div className={styles.statsHeader}>
              <h2 className={styles.statsTitle}>
                {selectedCategoryData?.name || "PvP Статистика"}
              </h2>
            </div>

            <StatisticsTable
              currentData={currentData}
              isLoading={isLoading}
            />
          </main>
        </div>
      </div>
    </section>
  );
};
