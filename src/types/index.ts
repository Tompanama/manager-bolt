export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;  
  plan: 'free' | 'pro' | 'enterprise';
  connectedAccounts: ConnectedAccount[];
}

export interface ConnectedAccount {
  id: string;
  platform: Platform;
  username: string;
  avatar?: string;
  isActive: boolean;
  lastSync?: string;
}

export type Platform = 'facebook' | 'instagram' | 'tiktok' | 'twitter' | 'linkedin' | 'youtube';

export interface Post {
  id: string;
  content: string;
  media?: Media[];
  platforms: Platform[];
  scheduledDate?: string;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  engagement?: PostEngagement;
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  type: 'image' | 'video' | 'carousel';
  url: string;
  thumbnail?: string;
  alt?: string;
}

export interface PostEngagement {
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  impressions: number;
}

export interface AIConversation {
  id: string;
  messages: AIMessage[];
  createdAt: string;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Analytics {
  totalReach: number;
  totalEngagement: number;
  totalPosts: number;
  growthRate: number;
  topPerformingPosts: Post[];
  platformStats: PlatformStats[];
}

export interface PlatformStats {
  platform: Platform;
  followers: number;
  engagement: number;
  growth: number;
}