import React from 'react';
import { Solve } from '../../types';
import { formatTime } from '../../utils/formatTime';
import { Trash2, Plus, AlertTriangle } from 'lucide-react';

interface SolvesListProps {
  solves: Solve[];
  onDeleteSolve: (id: string) => void;
  onToggleDNF: (id: string) => void;
  onTogglePlusTwo: (id: string) => void;
}

const SolvesList: React.FC<SolvesListProps> = ({ 
  solves, 
  onDeleteSolve, 
  onToggleDNF, 
  onTogglePlusTwo 
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Recent Solves</h2>
      </div>
      
      {solves.length === 0 ? (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
          No solves recorded yet. Start the timer to begin tracking your times.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {solves.slice(0, 10).map((solve, index) => (
                <tr key={solve.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        solve.dnf 
                          ? 'text-red-500 dark:text-red-400 line-through' 
                          : solve.plusTwo 
                            ? 'text-yellow-600 dark:text-yellow-400' 
                            : 'text-gray-900 dark:text-white'
                      }`}>
                        {solve.dnf 
                          ? 'DNF' 
                          : formatTime(solve.time + (solve.plusTwo ? 2000 : 0))
                        }
                      </span>
                      
                      {solve.plusTwo && !solve.dnf && (
                        <span className="ml-2 px-1.5 py-0.5 text-xs rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          +2
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {solve.date.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => onTogglePlusTwo(solve.id)}
                        className={`p-1 rounded-full ${
                          solve.plusTwo 
                            ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300' 
                            : 'hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400'
                        }`}
                        aria-label="Toggle +2 penalty"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => onToggleDNF(solve.id)}
                        className={`p-1 rounded-full ${
                          solve.dnf 
                            ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300' 
                            : 'hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400'
                        }`}
                        aria-label="Toggle DNF"
                      >
                        <AlertTriangle className="h-4 w-4" />
                      </button>
                      
                      <button
                        onClick={() => onDeleteSolve(solve.id)}
                        className="p-1 rounded-full hover:bg-gray-100 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400"
                        aria-label="Delete solve"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      {solves.length > 10 && (
        <div className="p-3 bg-gray-50 dark:bg-gray-700 text-center">
          <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            View all solves
          </button>
        </div>
      )}
    </div>
  );
};

export default SolvesList;