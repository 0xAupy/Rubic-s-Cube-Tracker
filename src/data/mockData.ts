import {
  User,
  Solve,
  Cube,
  LeaderboardEntry,
  ForumPost,
  Challenge,
  UserStats,
  TimeDistribution,
  DailyProgress,
} from "../types";

// Current user
export const currentUser: User = {
  id: "1",
  username: "SpeedCuber42",
  email: "speedcuber42@example.com",
  profilePicture:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  bio: "Speedcubing enthusiast since 2015. Personal best: 10.42s",
  createdAt: new Date("2020-01-15"),
};

// Mock solves data
export const solves: Solve[] = [
  {
    id: "solve-1",
    userId: "1",
    time: 12430, // 12.43 seconds
    date: new Date("2023-04-15T14:23:45"),
    scramble: "R U R' U' R' F R2 U' R' U' R U R' F'",
    dnf: false,
    plusTwo: false,
  },
  {
    id: "solve-2",
    userId: "1",
    time: 15670, // 15.67 seconds
    date: new Date("2023-04-15T14:25:12"),
    scramble: "F R U R' U' F' U' R U2 R' U' R U' R'",
    dnf: false,
    plusTwo: false,
  },
  {
    id: "solve-3",
    userId: "1",
    time: 13890, // 13.89 seconds
    date: new Date("2023-04-15T14:28:30"),
    scramble: "U' L' U R U' L U R'",
    dnf: false,
    plusTwo: false,
  },
  {
    id: "solve-4",
    userId: "1",
    time: 14250, // 14.25 seconds
    date: new Date("2023-04-15T14:30:45"),
    scramble: "R U R' U R U2 R' F R U R' U' F'",
    dnf: false,
    plusTwo: true,
  },
  {
    id: "solve-5",
    userId: "1",
    time: 11980, // 11.98 seconds
    date: new Date("2023-04-15T14:33:20"),
    scramble: "R' U' F' U F R U R U R' U R U2 R'",
    dnf: true,
    plusTwo: false,
  },
  {
    id: "solve-6",
    userId: "1",
    time: 13450, // 13.45 seconds
    date: new Date("2023-04-15T14:36:10"),
    scramble: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    dnf: false,
    plusTwo: false,
  },
];

// Mock cubes collection
export const cubes: Cube[] = [
  {
    id: "cube-1",
    userId: "1",
    name: "My Main Speedcube",
    brand: "GAN",
    model: "11 M Pro",
    type: "3x3",
    image:
      "https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    notes: "Magnetic, stickerless. My favorite cube for competitions.",
    isFavorite: false,
    purchaseDate: new Date("2022-03-10"),
  },
  {
    id: "cube-2",
    userId: "1",
    name: "Pocket Cube",
    brand: "MoYu",
    model: "WeiPo WR M",
    type: "2x2",
    image:
      "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    notes: "Great for one-handed solving.",
    isFavorite: false,
    purchaseDate: new Date("2022-05-22"),
  },
  {
    id: "cube-3",
    userId: "1",
    name: "Big Cube",
    brand: "QiYi",
    model: "Valk 5 M",
    type: "5x5",
    image:
      "https://images.unsplash.com/photo-1496354265829-17b1c7b7c363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    notes: "Still getting used to this one.",
    isFavorite: false,
    purchaseDate: new Date("2022-08-15"),
  },
];

// Mock leaderboard data
export const leaderboard: LeaderboardEntry[] = [
  {
    userId: "2",
    username: "CubeWizard",
    profilePicture:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bestTime: 8750, // 8.75 seconds
    averageTime: 10230, // 10.23 seconds
  },
  {
    userId: "3",
    username: "SpeedSolver",
    profilePicture:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bestTime: 9120, // 9.12 seconds
    averageTime: 11450, // 11.45 seconds
  },
  {
    userId: "1", // Current user
    username: "SpeedCuber42",
    profilePicture:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bestTime: 10420, // 10.42 seconds
    averageTime: 12340, // 12.34 seconds
  },
  {
    userId: "4",
    username: "CubeMaster",
    profilePicture:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bestTime: 11230, // 11.23 seconds
    averageTime: 13560, // 13.56 seconds
  },
  {
    userId: "5",
    username: "RubiksFan",
    profilePicture:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bestTime: 12150, // 12.15 seconds
    averageTime: 14780, // 14.78 seconds
  },
];

// Mock forum posts
export const forumPosts: ForumPost[] = [
  {
    id: "post-1",
    userId: "2",
    username: "CubeWizard",
    profilePicture:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Best lubricant for GAN cubes?",
    content:
      "I recently got a GAN 11 M Pro and I'm wondering what lubricant would work best with it. I've been using Weight 5 silicone lube, but I feel like it's slowing down the cube too much. Any recommendations?",
    createdAt: new Date("2023-04-10T09:23:15"),
    likes: 12,
    comments: 8,
  },
  {
    id: "post-2",
    userId: "3",
    username: "SpeedSolver",
    profilePicture:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Advanced F2L techniques",
    content:
      "I've been working on improving my F2L and I've hit a plateau at around 15 seconds average. I know all the basic algorithms, but I'm looking for more advanced techniques to reduce my move count and improve lookahead. Any tips from sub-10 solvers?",
    createdAt: new Date("2023-04-08T14:45:30"),
    likes: 24,
    comments: 15,
  },
  {
    id: "post-3",
    userId: "5",
    username: "RubiksFan",
    profilePicture:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Upcoming competition in Chicago",
    content:
      "Just wanted to let everyone know that there's a WCA competition coming up in Chicago on June 3-4. Registration opens next week. Who's planning to attend? It would be great to meet some of you in person!",
    createdAt: new Date("2023-04-05T11:12:45"),
    likes: 18,
    comments: 22,
  },
  {
    id: "post-4",
    userId: "1",
    username: "SpeedCuber42",
    profilePicture:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "New PB! Sub-11 finally",
    content:
      "After months of practice, I finally got a sub-11 solve! 10.42 seconds with a PLL skip. The scramble was pretty lucky, but I'll take it. So happy right now!",
    createdAt: new Date("2023-04-02T18:34:20"),
    likes: 35,
    comments: 14,
  },
  {
    id: "post-5",
    userId: "4",
    username: "CubeMaster",
    profilePicture:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Review: New MoYu WeiLong WR M 2021",
    content:
      "I just got the new MoYu WeiLong WR M 2021 and I've been testing it for about a week now. Here are my thoughts: The turning is incredibly smooth and the magnets provide just the right amount of tactile feedback. Corner cutting is excellent, even at 45+ degrees. The cube is slightly heavier than my GAN X, but I actually prefer the added stability. Overall, I'd give it a 9/10. Highly recommended!",
    createdAt: new Date("2023-03-28T10:15:00"),
    likes: 42,
    comments: 28,
  },
  {
    id: "post-6",
    userId: "3",
    username: "SpeedSolver",
    profilePicture:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Help with OLL parity on 4x4",
    content:
      "I'm having trouble with OLL parity on my 4x4. The algorithm I'm using is Rw U2 x Rw U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw', but I keep messing up the execution. Any tips or alternative algorithms that might be easier to remember?",
    createdAt: new Date("2023-03-25T16:48:30"),
    likes: 8,
    comments: 12,
  },
];

// Mock challenges
export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "Sub-20 Sprint",
    description: "Complete 50 solves with an average time under 20 seconds.",
    targetTime: 20000, // 20 seconds
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-04-30"),
    participants: 128,
  },
  {
    id: "challenge-2",
    title: "One-Handed Marathon",
    description:
      "Complete 25 one-handed solves with an average time under 40 seconds.",
    targetTime: 40000, // 40 seconds
    startDate: new Date("2023-04-15"),
    endDate: new Date("2023-05-15"),
    participants: 64,
  },
  {
    id: "challenge-3",
    title: "Blind Solving Basics",
    description: "Successfully complete 5 blindfolded solves of any time.",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-05-31"),
    participants: 32,
  },
];

// Mock user statistics
export const userStats: UserStats = {
  totalSolves: 342,
  bestTime: 10420, // 10.42 seconds
  worstTime: 35670, // 35.67 seconds
  averageTime: 15670, // 15.67 seconds
  ao5: 14230, // 14.23 seconds
  ao12: 15450, // 15.45 seconds
  ao100: 16780, // 16.78 seconds
};

// Mock time distribution
export const timeDistribution: TimeDistribution[] = [
  { range: "10-12s", count: 15 },
  { range: "12-14s", count: 42 },
  { range: "14-16s", count: 78 },
  { range: "16-18s", count: 95 },
  { range: "18-20s", count: 65 },
  { range: "20-25s", count: 32 },
  { range: "25-30s", count: 12 },
  { range: "30s+", count: 3 },
];

// Mock daily progress
export const dailyProgress: DailyProgress[] = [
  { date: "2023-04-01", averageTime: 18450, solveCount: 25 },
  { date: "2023-04-02", averageTime: 18120, solveCount: 32 },
  { date: "2023-04-03", averageTime: 17890, solveCount: 28 },
  { date: "2023-04-04", averageTime: 17650, solveCount: 35 },
  { date: "2023-04-05", averageTime: 17320, solveCount: 30 },
  { date: "2023-04-06", averageTime: 16980, solveCount: 27 },
  { date: "2023-04-07", averageTime: 16750, solveCount: 33 },
  { date: "2023-04-08", averageTime: 16540, solveCount: 29 },
  { date: "2023-04-09", averageTime: 16320, solveCount: 31 },
  { date: "2023-04-10", averageTime: 16150, solveCount: 26 },
  { date: "2023-04-11", averageTime: 15980, solveCount: 34 },
  { date: "2023-04-12", averageTime: 15820, solveCount: 28 },
  { date: "2023-04-13", averageTime: 15670, solveCount: 30 },
  { date: "2023-04-14", averageTime: 15450, solveCount: 32 },
];

// Generate a random scramble for the cube
export const generateScramble = (): string => {
  const moves = ["R", "L", "U", "D", "F", "B"];
  const modifiers = ["", "'", "2"];
  let scramble = "";

  // Generate a 20-move scramble
  for (let i = 0; i < 20; i++) {
    // Avoid same face moves in sequence
    let move;
    do {
      move = moves[Math.floor(Math.random() * moves.length)];
    } while (i > 0 && scramble.charAt(scramble.length - 2) === move);

    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    scramble += move + modifier + " ";
  }

  return scramble.trim();
};
