import React from 'react';
import { formatTime } from '../utils/formatTime';
import ProgressChart from '../components/Statistics/ProgressChart';
import TimeDistributionChart from '../components/Statistics/TimeDistributionChart';
import { userStats, timeDistribution, dailyProgress } from '../data/mockData';

const StatisticsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Total Solves</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{userStats.totalSolves}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Best Time</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.bestTime)}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Average Time</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.averageTime)}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Worst Time</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.worstTime)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Average of 5</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.ao5)}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Average of 12</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.ao12)}</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Average of 100</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(userStats.ao100)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Progress Over Time</h2>
          <ProgressChart data={dailyProgress} />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Time Distribution</h2>
          <TimeDistributionChart data={timeDistribution} />
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Solve History</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ao5</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ao12</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Solves</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {dailyProgress.map((day) => (
                <tr key={day.date} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{day.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{formatTime(day.averageTime)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">--</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">--</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{day.solveCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;