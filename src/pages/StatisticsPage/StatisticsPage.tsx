import { useState } from "react";
import { useI18n } from "../../shared/i18n/I18nProvider";
import styles from "./StatisticsPage.module.scss";

interface StatCategory {
  id: string;
  name: string;
  icon: string;
}

interface PlayerStats {
  name: string;
  kills?: number;
  deaths?: number;
  kdr?: number;
  level?: number;
  class?: string;
  clan?: string;
  members?: number;
  wins?: number;
  losses?: number;
  gold?: number;
  points?: number;
  achievement?: string;
}

interface CategoryData {
  headers: string[];
  data: PlayerStats[];
}

export const StatisticsPage = () => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>("pvp");

  const categories: StatCategory[] = [
    {
      id: "pvp",
      name: "PvP Статистика",
      icon: "⚔️"
    },
    {
      id: "clans",
      name: "Клани",
      icon: "🏰"
    },
    {
      id: "classes",
      name: "Класи",
      icon: "🎭"
    },
    {
      id: "economy",
      name: "Економіка",
      icon: "💰"
    },
    {
      id: "achievements",
      name: "Досягнення",
      icon: "🏆"
    }
  ];

  const categoryData: Record<string, CategoryData> = {
  pvp: {
    headers: ["#", "Гравець", "Клан", "Клас", "Рівень", "Кіли", "Смерті", "K/D"],
    data: [
      {
        name: "DragonSlayer",
        kills: 1250,
        deaths: 320,
        kdr: 3.91,
        level: 85,
        class: "Warrior",
        clan: "Elite"
      },
      {
        name: "ShadowAssassin",
        kills: 980,
        deaths: 410,
        kdr: 2.39,
        level: 78,
        class: "Rogue",
        clan: "Dark Brotherhood"
      },
      {
        name: "IceMage",
        kills: 750,
        deaths: 280,
        kdr: 2.68,
        level: 82,
        class: "Mage",
        clan: "Mystic Order"
      },
      {
        name: "HolyKnight",
        kills: 620,
        deaths: 195,
        kdr: 3.18,
        level: 76,
        class: "Paladin",
        clan: "Light Guard"
      },
      {
        name: "DeathBringer",
        kills: 890,
        deaths: 520,
        kdr: 1.71,
        level: 80,
        class: "Necromancer",
        clan: "Undead Legion"
      }
    ]
  },
  clans: {
    headers: ["#", "Клан", "Учасники", "Перемоги", "Поразки", "Win %", "Очки", "Лідер"],
    data: [
      {
        name: "Elite",
        members: 45,
        wins: 156,
        losses: 42,
        points: 8920,
        clan: "DragonSlayer"
      },
      {
        name: "Dark Brotherhood",
        members: 38,
        wins: 134,
        losses: 58,
        points: 7650,
        clan: "ShadowAssassin"
      },
      {
        name: "Mystic Order",
        members: 52,
        wins: 178,
        losses: 35,
        points: 9450,
        clan: "IceMage"
      },
      {
        name: "Light Guard",
        members: 41,
        wins: 145,
        losses: 48,
        points: 8120,
        clan: "HolyKnight"
      },
      {
        name: "Undead Legion",
        members: 36,
        wins: 128,
        losses: 62,
        points: 7340,
        clan: "DeathBringer"
      }
    ]
  },
  classes: {
    headers: ["#", "Клас", "Гравці", "Сер. рівень", "Кіли", "Смерті", "K/D", "Популярність"],
    data: [
      {
        name: "Warrior",
        level: 78,
        kills: 3420,
        deaths: 1850,
        kdr: 1.85,
        class: "245"
      },
      {
        name: "Mage",
        level: 76,
        kills: 2890,
        deaths: 1420,
        kdr: 2.03,
        class: "198"
      },
      {
        name: "Rogue",
        level: 74,
        kills: 2650,
        deaths: 1680,
        kdr: 1.58,
        class: "167"
      },
      {
        name: "Paladin",
        level: 77,
        kills: 2180,
        deaths: 980,
        kdr: 2.23,
        class: "134"
      },
      {
        name: "Necromancer",
        level: 75,
        kills: 1920,
        deaths: 1340,
        kdr: 1.43,
        class: "156"
      }
    ]
  },
  economy: {
    headers: ["#", "Гравець", "Клан", "Золото", "Рівень", "Клас", "Торги", "Рейтинг"],
    data: [
      {
        name: "MerchantKing",
        gold: 2450000,
        level: 82,
        class: "Merchant",
        clan: "Trade Guild",
        points: "1250"
      },
      {
        name: "GoldHunter",
        gold: 1890000,
        level: 79,
        class: "Warrior",
        clan: "Elite",
        points: "980"
      },
      {
        name: "RichMage",
        gold: 1650000,
        level: 85,
        class: "Mage",
        clan: "Mystic Order",
        points: "1120"
      },
      {
        name: "TreasureSeeker",
        gold: 1420000,
        level: 77,
        class: "Rogue",
        clan: "Dark Brotherhood",
        points: "890"
      },
      {
        name: "WealthyLord",
        gold: 1280000,
        level: 80,
        class: "Paladin",
        clan: "Light Guard",
        points: "760"
      }
    ]
  },
  achievements: {
    headers: ["#", "Гравець", "Клан", "Досягнення", "Очки", "Рівень", "Клас", "Рідкість"],
    data: [
      {
        name: "DragonSlayer",
        achievement: "Dragon Master",
        points: 8500,
        level: 85,
        class: "Warrior",
        clan: "Elite",
        wins: "Legendary"
      },
      {
        name: "IceMage",
        achievement: "Frost Lord",
        points: 7200,
        level: 82,
        class: "Mage",
        clan: "Mystic Order",
        wins: "Epic"
      },
      {
        name: "HolyKnight",
        achievement: "Divine Protector",
        points: 6800,
        level: 76,
        class: "Paladin",
        clan: "Light Guard",
        wins: "Epic"
      },
      {
        name: "ShadowAssassin",
        achievement: "Shadow Walker",
        points: 5900,
        level: 78,
        class: "Rogue",
        clan: "Dark Brotherhood",
        wins: "Rare"
      },
      {
        name: "MerchantKing",
        achievement: "Trade Emperor",
        points: 5400,
        level: 82,
        class: "Merchant",
        clan: "Trade Guild",
        wins: "Rare"
      }
    ]
  }
};

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const currentData = categoryData[selectedCategory];

  const renderTableCell = (player: PlayerStats, header: string, index: number) => {
    switch (header) {
      case "#":
        return (
          <td className={styles.rankCell}>
            <span className={styles.rankNumber}>#{index + 1}</span>
            {index === 0 && <span className={styles.crown}>�</span>}
            {index === 1 && <span className={styles.medal}>🥈</span>}
            {index === 2 && <span className={styles.medal}>🥉</span>}
          </td>
        );
      case "Гравець":
        return <td className={styles.playerNameCell}>{player.name}</td>;
      case "Клан":
        return (
          <td className={styles.clanCell}>
            {player.clan ? `[${player.clan}]` : '-'}
          </td>
        );
      case "Клас":
        return <td className={styles.classCell}>{player.class || '-'}</td>;
      case "Рівень":
        return <td className={styles.levelCell}>{player.level || '-'}</td>;
      case "Кіли":
        return <td className={styles.killsCell}>{player.kills || '-'}</td>;
      case "Смерті":
        return <td className={styles.deathsCell}>{player.deaths || '-'}</td>;
      case "K/D":
        return <td className={styles.kdrCell}>{player.kdr ? player.kdr.toFixed(2) : '-'}</td>;
      case "Учасники":
        return <td className={styles.levelCell}>{player.members || '-'}</td>;
      case "Перемоги":
        return <td className={styles.killsCell}>{player.wins || '-'}</td>;
      case "Поразки":
        return <td className={styles.deathsCell}>{player.losses || '-'}</td>;
      case "Win %":
        return (
          <td className={styles.kdrCell}>
            {player.wins && player.losses 
              ? ((player.wins / (player.wins + player.losses)) * 100).toFixed(1) + '%'
              : '-'
            }
          </td>
        );
      case "Очки":
        return <td className={styles.kdrCell}>{player.points || '-'}</td>;
      case "Лідер":
        return <td className={styles.playerNameCell}>{player.clan || '-'}</td>;
      case "Сер. рівень":
        return <td className={styles.levelCell}>{player.level || '-'}</td>;
      case "Популярність":
        return <td className={styles.levelCell}>{player.class || '-'}</td>;
      case "Золото":
        return <td className={styles.kdrCell}>{player.gold ? player.gold.toLocaleString() : '-'}</td>;
      case "Торги":
        return <td className={styles.levelCell}>{player.points || '-'}</td>;
      case "Рейтинг":
        return <td className={styles.kdrCell}>{player.points || '-'}</td>;
      case "Досягнення":
        return <td className={styles.playerNameCell}>{player.achievement || '-'}</td>;
      case "Рідкість":
        return <td className={styles.clanCell}>{player.wins || '-'}</td>;
      default:
        return <td>-</td>;
    }
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>� Статистика сервера</h1>
        
        <div className={styles.content}>
          {/* Left Menu */}
          <aside className={styles.sidebar}>
            <nav className={styles.categoryNav}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Content */}
          <main className={styles.statsContent}>
            <div className={styles.statsHeader}>
              <h2 className={styles.statsTitle}>
                {selectedCategoryData?.name || "PvP Статистика"}
              </h2>
            </div>

            <table className={styles.statsTable}>
              <thead>
                <tr>
                  {currentData.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.data.map((player, index) => (
                  <tr key={player.name} className={styles.tableRow}>
                    {currentData.headers.map((header) => renderTableCell(player, header, index))}
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </section>
  );
};
