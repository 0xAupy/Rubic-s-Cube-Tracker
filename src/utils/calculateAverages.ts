import { Solve } from '../types';

export const calculateAo5 = (solves: Solve[]): number => {
  if (solves.length < 5) return -1;
  
  const validSolves = solves.filter(solve => !solve.dnf);
  if (validSolves.length < 3) return -1; // Need at least 3 valid solves
  
  const times = validSolves.slice(0, 5).map(solve => solve.time + (solve.plusTwo ? 2000 : 0));
  
  // Remove best and worst times
  const sortedTimes = [...times].sort((a, b) => a - b);
  const trimmedTimes = sortedTimes.slice(1, -1);
  
  // Calculate average
  return Math.floor(trimmedTimes.reduce((sum, time) => sum + time, 0) / trimmedTimes.length);
};

export const calculateAo12 = (solves: Solve[]): number => {
  if (solves.length < 12) return -1;
  
  const validSolves = solves.filter(solve => !solve.dnf);
  if (validSolves.length < 10) return -1; // Need at least 10 valid solves
  
  const times = validSolves.slice(0, 12).map(solve => solve.time + (solve.plusTwo ? 2000 : 0));
  
  // Remove best and worst times
  const sortedTimes = [...times].sort((a, b) => a - b);
  const trimmedTimes = sortedTimes.slice(1, -1);
  
  // Calculate average
  return Math.floor(trimmedTimes.reduce((sum, time) => sum + time, 0) / trimmedTimes.length);
};

export const calculateAo100 = (solves: Solve[]): number => {
  if (solves.length < 100) return -1;
  
  const validSolves = solves.filter(solve => !solve.dnf);
  if (validSolves.length < 95) return -1; // Need at least 95 valid solves
  
  const times = validSolves.slice(0, 100).map(solve => solve.time + (solve.plusTwo ? 2000 : 0));
  
  // Remove best and worst 5% times
  const sortedTimes = [...times].sort((a, b) => a - b);
  const trimCount = Math.floor(times.length * 0.05);
  const trimmedTimes = sortedTimes.slice(trimCount, -trimCount);
  
  // Calculate average
  return Math.floor(trimmedTimes.reduce((sum, time) => sum + time, 0) / trimmedTimes.length);
};