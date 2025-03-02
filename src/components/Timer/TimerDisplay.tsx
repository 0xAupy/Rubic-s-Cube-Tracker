import React from 'react';
import { formatTime } from '../../utils/formatTime';

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  isPreparing: boolean;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ time, isRunning, isPreparing }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={`text-7xl md:text-9xl font-mono font-bold transition-colors ${
          isPreparing 
            ? 'text-green-500 dark:text-green-400' 
            : isRunning 
              ? 'text-gray-900 dark:text-white' 
              : 'text-primary-600 dark:text-primary-400'
        }`}
      >
        {formatTime(time)}
      </div>
      <p className="mt-4 text-gray-500 dark:text-gray-400">
        {isPreparing 
          ? 'Release to start' 
          : isRunning 
            ? 'Press space to stop' 
            : 'Hold space to start'}
      </p>
    </div>
  );
};

export default TimerDisplay;