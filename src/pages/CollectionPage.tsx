import React, { useState } from 'react';
import CubeCard from '../components/Collection/CubeCard';
import { Cube } from '../types';
import { cubes as initialCubes } from '../data/mockData';
import { Plus, Search, Filter } from 'lucide-react';

const CollectionPage: React.FC = () => {
  const [cubes, setCubes] = useState<Cube[]>(initialCubes);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  
  const handleToggleFavorite = (id: string) => {
    setCubes(prevCubes => 
      prevCubes.map(cube => 
        cube.id === id ? { ...cube, isFavorite: !cube.isFavorite } : cube
      )
    );
  };
  
  const handleEdit = (id: string) => {
    // In a real app, this would open an edit modal
    console.log('Edit cube:', id);
  };
  
  const handleDelete = (id: string) => {
    // In a real app, this would show a confirmation dialog
    setCubes(prevCubes => prevCubes.filter(cube => cube.id !== id));
  };
  
  const filteredCubes = cubes.filter(cube => {
    const matchesSearch = cube.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (cube.brand && cube.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (cube.model && cube.model.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filterType === 'all' || cube.type === filterType;
    const matchesFavorite = !showFavoritesOnly || cube.isFavorite;
    
    return matchesSearch && matchesType && matchesFavorite;
  });
  
  const cubeTypes = ['all', ...Array.from(new Set(cubes.map(cube => cube.type)))];
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">My Cube Collection</h1>
        
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          Add New Cube
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search cubes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="input pl-9 pr-8 py-2"
              >
                {cubeTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
            
            <label className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                checked={showFavoritesOnly}
                onChange={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className="rounded text-primary-600 focus:ring-primary-500"
              />
              <span>Favorites only</span>
            </label>
          </div>
        </div>
      </div>
      
      {filteredCubes.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No cubes found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCubes.map(cube => (
            <CubeCard
              key={cube.id}
              cube={cube}
              onToggleFavorite={handleToggleFavorite}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;