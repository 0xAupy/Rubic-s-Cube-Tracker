import React from 'react';
import { LeaderboardEntry } from '../../types';
import { formatTime } from '../../utils/formatTime';
import { Trophy } from 'lucide-react';

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  currentUserId: string;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries, currentUserId }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Global Leaderboard</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Best Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Average Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {entries.map((entry, index) => (
              <tr 
                key={entry.userId} 
                className={`${
                  entry.userId === currentUserId 
                    ? 'bg-primary-50 dark:bg-primary-900/20' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {index < 3 ? (
                      <Trophy className={`h-5 w-5 mr-1.5 ${
                        index === 0 
                          ? 'text-yellow-500' 
                          : index === 1 
                            ? 'text-gray-400' 
                            : 'text-amber-700'
                      }`} />
                    ) : (
                      <span className="text-sm font-medium text-gray-900 dark:text-white w-5 mr-1.5 text-center">
                        {index + 1}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img 
                      src={entry.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                      alt={entry.username} 
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {entry.username}
                      </p>
                      {entry.userId === currentUserId && (
                        <span className="text-xs text-primary-600 dark:text-primary-400">
                          You
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {formatTime(entry.bestTime)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatTime(entry.averageTime)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;