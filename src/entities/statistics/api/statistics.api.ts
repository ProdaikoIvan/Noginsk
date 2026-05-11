import { StatCategory, CategoryData } from '../model/types';

// Mock API service - in real app this would make HTTP requests to backend
export class StatisticsApiService {
  private static instance: StatisticsApiService;

  public static getInstance(): StatisticsApiService {
    if (!StatisticsApiService.instance) {
      StatisticsApiService.instance = new StatisticsApiService();
    }
    return StatisticsApiService.instance;
  }

  // Get all categories
  public async getCategories(): Promise<StatCategory[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
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
  }

  // Get statistics data for specific category
  public async getCategoryData(categoryId: string): Promise<CategoryData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    switch (categoryId) {
      case "pvp":
        return {
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
        };

      case "clans":
        return {
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
        };

      case "classes":
        return {
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
        };

      case "economy":
        return {
          headers: ["#", "Гравець", "Клан", "Золото", "Рівень", "Клас", "Торги", "Рейтинг"],
          data: [
            {
              name: "MerchantKing",
              gold: 2450000,
              level: 82,
              class: "Merchant",
              clan: "Trade Guild",
              points: 1250
            },
            {
              name: "GoldHunter",
              gold: 1890000,
              level: 79,
              class: "Warrior",
              clan: "Elite",
              points: 980
            },
            {
              name: "RichMage",
              gold: 1650000,
              level: 85,
              class: "Mage",
              clan: "Mystic Order",
              points: 1120
            },
            {
              name: "TreasureSeeker",
              gold: 1420000,
              level: 77,
              class: "Rogue",
              clan: "Dark Brotherhood",
              points: 890
            },
            {
              name: "WealthyLord",
              gold: 1280000,
              level: 80,
              class: "Paladin",
              clan: "Light Guard",
              points: 760
            }
          ]
        };

      case "achievements":
        return {
          headers: ["#", "Гравець", "Клан", "Досягнення", "Очки", "Рівень", "Клас", "Рідкість"],
          data: [
            {
              name: "DragonSlayer",
              achievement: "Dragon Master",
              points: 8500,
              level: 85,
              class: "Warrior",
              clan: "Elite",
              rarity: "Legendary"
            },
            {
              name: "IceMage",
              achievement: "Frost Lord",
              points: 7200,
              level: 82,
              class: "Mage",
              clan: "Mystic Order",
              rarity: "Epic"
            },
            {
              name: "HolyKnight",
              achievement: "Divine Protector",
              points: 6800,
              level: 76,
              class: "Paladin",
              clan: "Light Guard",
              rarity: "Epic"
            },
            {
              name: "ShadowAssassin",
              achievement: "Shadow Walker",
              points: 5900,
              level: 78,
              class: "Rogue",
              clan: "Dark Brotherhood",
              rarity: "Rare"
            },
            {
              name: "MerchantKing",
              achievement: "Trade Emperor",
              points: 5400,
              level: 82,
              class: "Merchant",
              clan: "Trade Guild",
              rarity: "Rare"
            }
          ]
        };

      default:
        throw new Error(`Unknown category: ${categoryId}`);
    }
  }

  // Refresh data for specific category
  public async refreshCategoryData(categoryId: string): Promise<CategoryData> {
    // Simulate refresh with slightly different data
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const data = await this.getCategoryData(categoryId);
    
    // Add some variation to simulate real-time data
    data.data = data.data.map(item => ({
      ...item,
      points: item.points ? Math.floor(Number(item.points) * (0.95 + Math.random() * 0.1)) : item.points,
      kills: item.kills ? Math.floor(item.kills * (0.95 + Math.random() * 0.1)) : item.kills,
      deaths: item.deaths ? Math.floor(item.deaths * (0.95 + Math.random() * 0.1)) : item.deaths,
    }));

    return data;
  }
}
