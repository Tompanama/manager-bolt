import React, { useEffect, useState } from 'react';
import { Plus, CheckCircle, AlertCircle } from 'lucide-react';
import type { ConnectedAccount } from '../../types';

const ConnectedAccounts: React.FC = () => {
  const [accounts, setAccounts] = useState<ConnectedAccount[] | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/accounts.json')
      .then((res) => res.json())
      .then((data: ConnectedAccount[]) => setAccounts(data))
      .catch(() => setError('Erreur de chargement'));
  }, []);

  const getPlatformInfo = (platform: string) => {
    const platforms = {
      instagram: { color: 'from-pink-500 to-orange-500', name: 'Instagram' },
      facebook: { color: 'from-blue-600 to-blue-700', name: 'Facebook' },
      twitter: { color: 'from-blue-400 to-blue-500', name: 'Twitter' },
      linkedin: { color: 'from-blue-700 to-blue-800', name: 'LinkedIn' },
      tiktok: { color: 'from-black to-gray-800', name: 'TikTok' },
      youtube: { color: 'from-red-600 to-red-700', name: 'YouTube' }
    };
    return platforms[platform as keyof typeof platforms] || { color: 'from-gray-500 to-gray-600', name: platform };
  };

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!accounts) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Comptes connectés</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
          <Plus className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </div>

      <div className="space-y-4">
        {accounts.map((account) => {
          const platformInfo = getPlatformInfo(account.platform);
          return (
            <div key={account.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  {account.avatar ? (
                    <img
                      src={account.avatar}
                      alt={account.username}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className={`w-12 h-12 bg-gradient-to-r ${platformInfo.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {platformInfo.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {account.isActive ? (
                    <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-green-500 bg-white dark:bg-gray-800 rounded-full" />
                  ) : (
                    <AlertCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-red-500 bg-white dark:bg-gray-800 rounded-full" />
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{account.username}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{platformInfo.name}</p>
                  {account.lastSync && (
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Sync: {new Date(account.lastSync).toLocaleDateString('fr-FR', { 
                        day: '2-digit', 
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  account.isActive 
                    ? 'text-green-700 bg-green-100 dark:bg-green-900/20 dark:text-green-400' 
                    : 'text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {account.isActive ? 'Actif' : 'Inactif'}
                </div>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                  <span className="sr-only">Options</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full mt-1"></div>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          💡 <strong>Astuce :</strong> Connectez tous vos comptes pour une gestion centralisée et des analytics complètes !
        </p>
      </div>
    </div>
  );
};

export default ConnectedAccounts;