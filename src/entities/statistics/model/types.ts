export interface StatCategory {
  id: string;
  name: string;
  icon: string;
}

export interface PlayerStats {
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
  rarity?: string;
}

export interface CategoryData {
  headers: string[];
  data: PlayerStats[];
}
