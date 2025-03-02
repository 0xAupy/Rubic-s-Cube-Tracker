import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ScrambleDisplayProps {
  scramble: string;
  onNewScramble: () => void;
}

const ScrambleDisplay: React.FC<ScrambleDisplayProps> = ({ scramble, onNewScramble }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Scramble</h2>
        <button 
          onClick={onNewScramble}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Generate new scramble"
        >
          <RefreshCw className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded text-center">
        <p className="text-lg md:text-xl font-mono tracking-wide text-gray-800 dark:text-gray-200">
          {scramble}
        </p>
      </div>
    </div>
  );
};

export default ScrambleDisplay;