import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Timer, BarChart3, Users, MessageSquare, Trophy, Settings, LogOut, Menu, X, Sun, Moon, Cuboid as Cube } from 'lucide-react';
import { currentUser } from '../data/mockData';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const navigation = [
    { name: 'Timer', href: '/', icon: Timer },
    { name: 'Statistics', href: '/statistics', icon: BarChart3 },
    { name: 'Collection', href: '/collection', icon: Cube },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Forums', href: '/forums', icon: MessageSquare },
    { name: 'Competitions', href: '/competitions', icon: Trophy },
  ];
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen overflow-hidden">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <Link to="/" className="flex items-center space-x-2">
              <Cube className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">CubeTracker</span>
            </Link>
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
            <nav className="px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${
                      isActive ? 'text-primary-500' : 'text-gray-500 dark:text-gray-400'
                    }`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="px-2 py-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-4 py-2">
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.username}
                  className="h-8 w-8 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{currentUser.username}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">View Profile</p>
                </div>
              </div>
              
              <button
                onClick={toggleDarkMode}
                className="flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
              >
                {darkMode ? (
                  <Sun className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <Moon className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
              >
                <Settings className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                Settings
              </Link>
              
              <button
                className="flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                Log Out
              </button>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
          <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <button
                    className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
          </header>
          
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;