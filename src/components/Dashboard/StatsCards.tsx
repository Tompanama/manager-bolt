import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, MessageCircle, Eye } from 'lucide-react';
import type { Icon } from 'lucide-react';

interface Stat {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: keyof typeof iconMap;
  color: string;
}

const iconMap = {
  Eye,
  MessageCircle,
  Users,
  TrendingUp
};

const StatsCards: React.FC = () => {
  const [stats, setStats] = useState<Stat[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/stats.json')
      .then((res) => res.json())
      .then((data: Stat[]) => setStats(data))
      .catch(() => setError('Erreur de chargement'));
  }, []);

  const getColorClasses = (color: string, isIcon = false) => {
    const colors = {
      blue: isIcon ? 'text-blue-600 bg-blue-100 dark:bg-blue-900/20' : 'text-blue-600',
      green: isIcon ? 'text-green-600 bg-green-100 dark:bg-green-900/20' : 'text-green-600',
      purple: isIcon ? 'text-purple-600 bg-purple-100 dark:bg-purple-900/20' : 'text-purple-600',
      orange: isIcon ? 'text-orange-600 bg-orange-100 dark:bg-orange-900/20' : 'text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!stats) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon: Icon = iconMap[stat.icon];
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${getColorClasses(stat.color, true)}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;