import styles from "./ServerPage.module.scss";

type Item = { id: string; title: string };

type Props = {
  title: string;
  items: Item[];
  activeId: string;
  onSelect: (id: string) => void;
};

export const ServerPageToc = ({ title, items, activeId, onSelect }: Props) => (
  <nav className={styles.toc} aria-label={title}>
    <p className={styles.tocTitle}>{title}</p>
    <ul className={styles.tocList}>
      {items.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            className={
              item.id === activeId ? styles.tocButtonActive : styles.tocButton
            }
            onClick={() => onSelect(item.id)}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);
