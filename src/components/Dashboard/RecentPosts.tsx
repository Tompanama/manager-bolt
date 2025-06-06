import React from 'react';
import { Calendar, MoreHorizontal, Eye, Heart, MessageCircle, Share } from 'lucide-react';
import type { Post } from '../../types';

const RecentPosts: React.FC = () => {
  const posts: Post[] = [
    {
      id: '1',
      content: 'Nouvelle tendance marketing digital : comment l\'IA révolutionne notre façon de créer du contenu ! 🚀\n\n#MarketingDigital #IA #ContentCreator',
      platforms: ['instagram', 'linkedin'],
      status: 'published',
      scheduledDate: '2024-01-15T10:00:00Z',
      engagement: {
        likes: 245,
        comments: 18,
        shares: 12,
        reach: 3200,
        impressions: 5400
      },
      createdAt: '2024-01-15T09:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      content: 'Tips du jour : 5 astuces pour booster votre engagement sur les réseaux sociaux ✨\n\n1. Postez au bon moment\n2. Utilisez des hashtags pertinents\n3. Interagissez avec votre communauté\n4. Créez du contenu de qualité\n5. Soyez authentique\n\n#SocialMedia #Tips #CommunityManager',
      platforms: ['facebook', 'twitter'],
      status: 'scheduled',
      scheduledDate: '2024-01-16T14:30:00Z',
      createdAt: '2024-01-15T16:00:00Z',
      updatedAt: '2024-01-15T16:00:00Z'
    },
    {
      id: '3',
      content: 'Behind the scenes : Comment nous utilisons l\'IA pour créer du contenu authentique et engageant 🎬\n\n#BehindTheScenes #ContentCreation #Innovation',
      platforms: ['tiktok', 'instagram'],
      status: 'draft',
      createdAt: '2024-01-15T14:00:00Z',
      updatedAt: '2024-01-15T14:00:00Z'
    }
  ];

  const getPlatformColor = (platform: string) => {
    const colors = {
      facebook: 'bg-blue-500',
      instagram: 'bg-gradient-to-r from-pink-500 to-orange-500',
      twitter: 'bg-blue-400',
      linkedin: 'bg-blue-700',
      tiktok: 'bg-black',
      youtube: 'bg-red-600'
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-500';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      published: 'text-green-600 bg-green-100 dark:bg-green-900/20',
      scheduled: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20',
      draft: 'text-gray-600 bg-gray-100 dark:bg-gray-700',
      failed: 'text-red-600 bg-red-100 dark:bg-red-900/20'
    };
    return colors[status as keyof typeof colors] || colors.draft;
  };

  const getStatusLabel = (status: string) => {
    const labels = {
      published: 'Publié',
      scheduled: 'Programmé',
      draft: 'Brouillon',
      failed: 'Échec'
    };
    return labels[status as keyof typeof labels] || 'Inconnu';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Posts récents</h2>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {post.platforms.map((platform, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 ${getPlatformColor(platform)} rounded text-white flex items-center justify-center text-xs font-bold`}
                  >
                    {platform.charAt(0).toUpperCase()}
                  </div>
                ))}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                  {getStatusLabel(post.status)}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <p className="text-gray-900 dark:text-white text-sm mb-4 line-clamp-3">
              {post.content}
            </p>

            {/* Metrics & Date */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                {post.engagement && (
                  <>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.engagement.reach}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share className="w-4 h-4" />
                      <span>{post.engagement.shares}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {post.scheduledDate 
                    ? new Date(post.scheduledDate).toLocaleDateString('fr-FR')
                    : new Date(post.createdAt).toLocaleDateString('fr-FR')
                  }
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
        Voir tous les posts
      </button>
    </div>
  );
};

export default RecentPosts;