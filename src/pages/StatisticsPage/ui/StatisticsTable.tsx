import { CategoryData, PlayerStats } from "../../../../entities/statistics/model/types";
import styles from "./StatisticsTable.module.scss";

interface Props {
  currentData: CategoryData | null;
  isLoading: boolean;
}

export const StatisticsTable = ({ currentData, isLoading }: Props) => {
  const renderTableCell = (player: PlayerStats, header: string, index: number) => {
    switch (header) {
      case "#":
        return (
          <td key={`${player.name}-rank`} className={styles.rankCell}>
            <span className={styles.rankNumber}>#{index + 1}</span>
            {index === 0 && <span className={styles.crown}>👑</span>}
            {index === 1 && <span className={styles.medal}>🥈</span>}
            {index === 2 && <span className={styles.medal}>🥉</span>}
          </td>
        );
      case "Гравець":
        return <td key={`${player.name}-name`} className={styles.playerNameCell}>{player.name}</td>;
      case "Клан":
        return (
          <td key={`${player.name}-clan`} className={styles.clanCell}>
            {player.clan ? `[${player.clan}]` : '-'}
          </td>
        );
      case "Клас":
        return <td key={`${player.name}-class`} className={styles.classCell}>{player.class || '-'}</td>;
      case "Рівень":
        return <td key={`${player.name}-level`} className={styles.levelCell}>{player.level || '-'}</td>;
      case "Кіли":
        return <td key={`${player.name}-kills`} className={styles.killsCell}>{player.kills || '-'}</td>;
      case "Смерті":
        return <td key={`${player.name}-deaths`} className={styles.deathsCell}>{player.deaths || '-'}</td>;
      case "K/D":
        return <td key={`${player.name}-kdr`} className={styles.kdrCell}>{player.kdr ? player.kdr.toFixed(2) : '-'}</td>;
      case "Учасники":
        return <td key={`${player.name}-members`} className={styles.levelCell}>{player.members || '-'}</td>;
      case "Перемоги":
        return <td key={`${player.name}-wins`} className={styles.killsCell}>{player.wins || '-'}</td>;
      case "Поразки":
        return <td key={`${player.name}-losses`} className={styles.deathsCell}>{player.losses || '-'}</td>;
      case "Win %":
        return (
          <td key={`${player.name}-winpct`} className={styles.kdrCell}>
            {player.wins && player.losses 
              ? ((player.wins / (player.wins + player.losses)) * 100).toFixed(1) + '%'
              : '-'
            }
          </td>
        );
      case "Очки":
        return <td key={`${player.name}-points`} className={styles.kdrCell}>{player.points || '-'}</td>;
      case "Лідер":
        return <td key={`${player.name}-leader`} className={styles.playerNameCell}>{player.clan || '-'}</td>;
      case "Сер. рівень":
        return <td key={`${player.name}-avglevel`} className={styles.levelCell}>{player.level || '-'}</td>;
      case "Популярність":
        return <td key={`${player.name}-pop`} className={styles.levelCell}>{player.class || '-'}</td>;
      case "Золото":
        return <td key={`${player.name}-gold`} className={styles.kdrCell}>{player.gold ? player.gold.toLocaleString() : '-'}</td>;
      case "Торги":
        return <td key={`${player.name}-trades`} className={styles.levelCell}>{player.points || '-'}</td>;
      case "Рейтинг":
        return <td key={`${player.name}-rating`} className={styles.kdrCell}>{player.points || '-'}</td>;
      case "Досягнення":
        return <td key={`${player.name}-achieve`} className={styles.playerNameCell}>{player.achievement || '-'}</td>;
      case "Рідкість":
        return <td key={`${player.name}-rarity`} className={styles.clanCell}>{player.rarity || '-'}</td>;
      default:
        return <td key={`${player.name}-default`}>-</td>;
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Завантаження...</div>;
  }

  if (!currentData) {
    return <div className={styles.error}>Немає даних</div>;
  }

  return (
    <table className={styles.statsTable}>
      <thead>
        <tr>
          {currentData.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentData.data.map((player) => (
          <tr key={player.name} className={styles.tableRow}>
            {currentData.headers.map((header, index) => renderTableCell(player, header, index))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
