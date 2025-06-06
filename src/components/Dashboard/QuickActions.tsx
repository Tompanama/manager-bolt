import React from 'react';
import { PenTool, Calendar, Zap, MessageCircle, BarChart3, Image } from 'lucide-react';

interface QuickActionsProps {
  onSectionChange: (section: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onSectionChange }) => {
  const actions = [
    {
      id: 'create',
      title: 'Créer un post',
      description: 'Nouveau contenu avec IA',
      icon: PenTool,
      color: 'blue',
      action: () => onSectionChange('create')
    },
    {
      id: 'schedule',
      title: 'Planifier',
      description: 'Programmer vos posts',
      icon: Calendar,
      color: 'green',
      action: () => onSectionChange('calendar')
    },
    {
      id: 'automate',
      title: 'Automatiser',
      description: 'Réponses automatiques',
      icon: Zap,
      color: 'purple',
      action: () => onSectionChange('automation')
    },
    {
      id: 'analyze',
      title: 'Analyser',
      description: 'Voir les performances',
      icon: BarChart3,
      color: 'orange',
      action: () => onSectionChange('analytics')
    },
    {
      id: 'generate',
      title: 'Générer image',
      description: 'Créer visuels IA',
      icon: Image,
      color: 'pink',
      action: () => onSectionChange('create')
    },
    {
      id: 'engage',
      title: 'Engager',
      description: 'Gérer interactions',
      icon: MessageCircle,
      color: 'teal',
      action: () => onSectionChange('engagement')
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      teal: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Actions rapides</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={action.action}
              className={`p-4 rounded-xl bg-gradient-to-r ${getColorClasses(action.color)} text-white hover:scale-105 transition-all duration-200 text-left group`}
            >
              <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
              <p className="text-xs opacity-90">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;