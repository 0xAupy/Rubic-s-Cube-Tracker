import React from 'react';
import { formatTime } from '../../utils/formatTime';

interface StatsCardProps {
  ao5: number;
  ao12: number;
  bestTime: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ ao5, ao12, bestTime }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Current Ao5</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {ao5 > 0 ? formatTime(ao5) : '--'}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Current Ao12</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {ao12 > 0 ? formatTime(ao12) : '--'}
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Best Time</h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {bestTime > 0 ? formatTime(bestTime) : '--'}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;