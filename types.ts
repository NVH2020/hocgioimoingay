export type ViewState = 'home' | 'classes' | 'schedule' | 'documents' | 'chatbot' | 'contact';

export interface ClassInfo {
  id: string;
  grade: number;
  title: string;
  description: string;
  schedule: string;
  link?: string;
}

export interface ScheduleGrid {
  days: string[];
  classNames: string[];
  cells: Record<string, string>;
}

export interface DocumentItem {
  id: number;
  title: string;
  type: 'PDF' | 'DOC' | 'VIDEO';
  date: string;
  downloadUrl: string;
}

export interface HeroData {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
}

export interface ContactData {
  phone: string;
  email: string;
  address: string;
}

export interface PlayerInfo {
  name: string;
  className: string;
  school: string;
}

export type GamePhase = 'idle' | 'form' | 'playing' | 'result';

export interface RatingData {
  average: number;
  total: number;
  breakdown: Record<number, number>; // e.g., { 1: 5, 2: 10, ... }
}
