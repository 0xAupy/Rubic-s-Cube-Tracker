import React from 'react';
import { ForumPost } from '../../types';
import { MessageSquare, Heart } from 'lucide-react';

interface PostCardProps {
  post: ForumPost;
  onViewPost: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onViewPost }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onViewPost(post.id)}
    >
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={post.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
            alt={post.username} 
            className="h-8 w-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {post.username}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {post.createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {post.content}
        </p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center mr-4">
            <Heart className="h-4 w-4 mr-1" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;