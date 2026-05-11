import { StatCategory } from "../../../entities/statistics/model/types";
import styles from "./StatisticsSidebar.module.scss";

interface Props {
  categories: StatCategory[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const StatisticsSidebar = ({ categories, selectedCategory, onSelectCategory }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.categoryNav}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${
              selectedCategory === category.id ? styles.active : ""
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            <span className={styles.categoryName}>{category.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
