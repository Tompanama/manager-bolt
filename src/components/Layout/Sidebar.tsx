import React from 'react';
import { 
  Home, 
  Calendar, 
  PenTool, 
  BarChart3, 
  MessageCircle, 
  Settings, 
  Users,
  Zap,
  Bot
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'calendar', label: 'Planification', icon: Calendar },
    { id: 'create', label: 'Création', icon: PenTool },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'engagement', label: 'Engagement', icon: MessageCircle },
    { id: 'accounts', label: 'Comptes', icon: Users },
    { id: 'automation', label: 'Automatisation', icon: Zap },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">CommunaIA</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Community Manager IA</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade Banner */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
          <h3 className="font-semibold text-sm">Passer au Pro</h3>
          <p className="text-xs opacity-90 mt-1">Débloquez toutes les fonctionnalités IA</p>
          <button className="mt-3 w-full bg-white/20 hover:bg-white/30 rounded-md py-2 px-3 text-xs font-medium transition-colors">
            Mettre à niveau
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;