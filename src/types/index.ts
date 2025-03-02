export interface User {
  id: string;
  username: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  createdAt: Date;
}

export interface Solve {
  id: string;
  userId: string;
  time: number; // in milliseconds
  date: Date;
  scramble: string;
  notes?: string;
  dnf: boolean;
  plusTwo: boolean;
}

export interface Cube {
  id: string;
  userId: string;
  name: string;
  brand?: string;
  model?: string;
  type: string; // 2x2, 3x3, 4x4, etc.
  image?: string;
  notes?: string;
  isFavorite: boolean;
  purchaseDate?: Date;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  profilePicture?: string;
  bestTime: number;
  averageTime: number;
}

export interface ForumPost {
  id: string;
  userId: string;
  username: string;
  profilePicture?: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  comments: number;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  username: string;
  profilePicture?: string;
  content: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  targetTime?: number;
  startDate: Date;
  endDate: Date;
  participants: number;
}

export interface UserStats {
  totalSolves: number;
  bestTime: number;
  worstTime: number;
  averageTime: number;
  ao5: number;
  ao12: number;
  ao100: number;
}

export interface TimeDistribution {
  range: string;
  count: number;
}

export interface DailyProgress {
  date: string;
  averageTime: number;
  solveCount: number;
}