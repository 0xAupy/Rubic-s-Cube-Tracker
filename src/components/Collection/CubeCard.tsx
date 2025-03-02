import React from 'react';
import { Cube } from '../../types';
import { Heart, Edit, Trash2 } from 'lucide-react';

interface CubeCardProps {
  cube: Cube;
  onToggleFavorite: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CubeCard: React.FC<CubeCardProps> = ({ cube, onToggleFavorite, onEdit, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img 
          src={cube.image || 'https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
          alt={cube.name} 
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(cube.id)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white dark:bg-gray-700 shadow-md"
        >
          <Heart 
            className={`h-5 w-5 ${
              cube.isFavorite 
                ? 'text-red-500 fill-red-500' 
                : 'text-gray-400 dark:text-gray-300'
            }`} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cube.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {cube.brand} {cube.model}
            </p>
          </div>
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            {cube.type}
          </span>
        </div>
        
        {cube.notes && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {cube.notes}
          </p>
        )}
        
        {cube.purchaseDate && (
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Purchased: {cube.purchaseDate.toLocaleDateString()}
          </p>
        )}
        
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => onEdit(cube.id)}
            className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(cube.id)}
            className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CubeCard;