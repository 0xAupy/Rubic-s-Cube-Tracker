import React, { useState } from 'react';
import PostCard from '../components/Forums/PostCard';
import { ForumPost } from '../types';
import { forumPosts as initialPosts } from '../data/mockData';
import { MessageSquare, Plus, Search } from 'lucide-react';

const ForumsPage: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const handleViewPost = (id: string) => {
    // In a real app, this would navigate to the post detail page
    console.log('View post:', id);
  };
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <MessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Forums</h1>
        </div>
        
        <button className="btn btn-primary flex items-center">
          <Plus className="h-5 w-5 mr-1" />
          New Post
        </button>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onViewPost={handleViewPost}
          />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No posts found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default ForumsPage;