import React from 'react';
import LeaderboardTable from '../components/Community/LeaderboardTable';
import ChallengeCard from '../components/Community/ChallengeCard';
import { leaderboard, challenges } from '../data/mockData';
import { Trophy, Users, Activity } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const handleJoinChallenge = (id: string) => {
    // In a real app, this would join the user to the challenge
    console.log('Join challenge:', id);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Community</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Leaderboard</h2>
          </div>
          
          <LeaderboardTable entries={leaderboard} currentUserId="1" />
        </div>
        
        <div>
          <div className="flex items-center mb-4">
            <Activity className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Stats</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Global Rank</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">#3</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Best Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12.43s</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Avg Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">15.67s</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Progress to Top 10</span>
                  <span className="text-gray-700 dark:text-gray-300">100%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-500 dark:text-gray-400">Progress to Top 2</span>
                  <span className="text-gray-700 dark:text-gray-300">75%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Challenges</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(challenge => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              onJoin={handleJoinChallenge}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Find Cubers Near You</h2>
        
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Connect with speedcubers in your area for meetups and competitions.
          </p>
          
          <button className="btn btn-primary">
            Find Local Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;