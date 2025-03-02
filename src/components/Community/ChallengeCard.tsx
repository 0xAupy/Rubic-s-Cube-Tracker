import React from 'react';
import { Challenge } from '../../types';
import { Calendar, Users, Clock } from 'lucide-react';

interface ChallengeCardProps {
  challenge: Challenge;
  onJoin: (id: string) => void;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, onJoin }) => {
  const isActive = new Date() >= challenge.startDate && new Date() <= challenge.endDate;
  const hasEnded = new Date() > challenge.endDate;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className={`p-1 text-center text-xs font-medium text-white ${
        hasEnded 
          ? 'bg-gray-500 dark:bg-gray-600' 
          : isActive 
            ? 'bg-green-500 dark:bg-green-600' 
            : 'bg-blue-500 dark:bg-blue-600'
      }`}>
        {hasEnded ? 'Ended' : isActive ? 'Active' : 'Upcoming'}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{challenge.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {challenge.description}
        </p>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              {challenge.startDate.toLocaleDateString()} - {challenge.endDate.toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4 mr-2" />
            <span>{challenge.participants} participants</span>
          </div>
          
          {challenge.targetTime && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              <span>Target: {(challenge.targetTime / 1000).toFixed(2)}s</span>
            </div>
          )}
        </div>
        
        <div className="mt-4">
          <button
            onClick={() => onJoin(challenge.id)}
            disabled={hasEnded}
            className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
              hasEnded 
                ? 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed' 
                : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800'
            }`}
          >
            {hasEnded ? 'Challenge Ended' : isActive ? 'Join Challenge' : 'Remind Me'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;