import { useState } from "react";
import { useI18n } from "../../shared/i18n/I18nProvider";
import { ServerPageBlock } from "./ServerPageBlock";
import { ServerPageToc } from "./ServerPageToc";
import styles from "./ServerPage.module.scss";

export const ServerPage = () => {
  const { t } = useI18n();
  const { pageTitle, lead, tocTitle, blocks } = t.server;

  const [activeId, setActiveId] = useState(() => blocks[0]?.id ?? "");

  const tocItems = blocks.map((b) => ({ id: b.id, title: b.title }));

  const activeBlock = blocks.find((b) => b.id === activeId) ?? blocks[0];

  return (
    <div className={styles.wrapper}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{pageTitle}</h1>
        <p className={styles.lead}>{lead}</p>
      </header>

      <div className={styles.layout}>
        <ServerPageToc
          title={tocTitle}
          items={tocItems}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <div className={styles.content}>
          {activeBlock ? (
            <ServerPageBlock block={activeBlock} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
