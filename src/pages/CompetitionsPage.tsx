import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';

const CompetitionsPage: React.FC = () => {
  const upcomingCompetitions = [
    {
      id: 'comp-1',
      name: 'Spring Speed Open 2023',
      date: 'May 15-16, 2023',
      location: 'New York, NY',
      participants: 128,
      registrationOpen: true
    },
    {
      id: 'comp-2',
      name: 'Midwest Cubing Championship',
      date: 'June 3-4, 2023',
      location: 'Chicago, IL',
      participants: 96,
      registrationOpen: true
    },
    {
      id: 'comp-3',
      name: 'West Coast Cube Battle',
      date: 'June 24-25, 2023',
      location: 'Los Angeles, CA',
      participants: 64,
      registrationOpen: false
    }
  ];
  
  const pastCompetitions = [
    {
      id: 'comp-4',
      name: 'Winter Cube Fest 2023',
      date: 'January 21-22, 2023',
      location: 'Boston, MA',
      participants: 112,
      results: 'View Results'
    },
    {
      id: 'comp-5',
      name: 'National Speed Solving Championship',
      date: 'February 11-12, 2023',
      location: 'Dallas, TX',
      participants: 156,
      results: 'View Results'
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-6">
        <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Competitions</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Upcoming Competitions</h2>
        
        <div className="space-y-4">
          {upcomingCompetitions.map(competition => (
            <div 
              key={competition.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{competition.name}</h3>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{competition.date}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{competition.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{competition.participants} participants</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      competition.registrationOpen
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!competition.registrationOpen}
                  >
                    {competition.registrationOpen ? 'Register Now' : 'Registration Closed'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Past Competitions</h2>
        
        <div className="space-y-4">
          {pastCompetitions.map(competition => (
            <div 
              key={competition.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{competition.name}</h3>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{competition.date}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{competition.location}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{competition.participants} participants</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <button className="px-4 py-2 rounded-md text-sm font-medium bg-secondary-600 text-white hover:bg-secondary-700">
                    {competition.results}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Host a Competition</h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Want to organize your own speedcubing competition? We can help you get started with venue selection, registration, and more.
        </p>
        
        <button className="btn btn-primary">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CompetitionsPage;