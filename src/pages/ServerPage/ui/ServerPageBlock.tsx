import styles from "../ServerPage.module.scss";

type Block = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type Props = {
  block: Block;
};

export const ServerPageBlock = ({ block }: Props) => (
  <article
    className={styles.detail}
    role="region"
    aria-labelledby={`server-section-${block.id}`}
  >
    <h2 className={styles.detailTitle} id={`server-section-${block.id}`}>
      {block.title}
    </h2>
    {block.paragraphs?.map((p, i) => (
      <p key={`${block.id}-p-${i}`} className={styles.detailText}>
        {p}
      </p>
    ))}
    {block.bullets && block.bullets.length > 0 && (
      <ul className={styles.detailList}>
        {block.bullets.map((item, i) => (
          <li key={`${block.id}-b-${i}`}>{item}</li>
        ))}
      </ul>
    )}
  </article>
);
