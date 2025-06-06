import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import StatsCards from './components/Dashboard/StatsCards';
import QuickActions from './components/Dashboard/QuickActions';
import AIAssistant from './components/AI/AIAssistant';
import RecentPosts from './components/Dashboard/RecentPosts';
import ConnectedAccounts from './components/Dashboard/ConnectedAccounts';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Tableau de bord
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Bienvenue dans votre espace de community management IA
              </p>
            </div>
            
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <QuickActions onSectionChange={setActiveSection} />
              <AIAssistant />
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <RecentPosts />
              </div>
              <div>
                <ConnectedAccounts />
              </div>
            </div>
          </div>
        );
      
      case 'calendar':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Planification
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gérez votre calendrier de publication
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Calendrier de planification
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Cette fonctionnalité sera disponible prochainement avec un calendrier drag & drop complet
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <p className="text-blue-800 dark:text-blue-200">
                  🗓️ Fonctionnalités à venir : Vue mensuelle/hebdomadaire, planification multi-plateformes, synchronisation automatique
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'create':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Création de contenu
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Créez du contenu avec l'aide de l'IA
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Studio de création IA
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Outils de création de contenu avancés avec IA générative
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                <p className="text-purple-800 dark:text-purple-200">
                  🎨 Fonctionnalités à venir : Génération d'images IA, création de vidéos, templates personnalisés, générateur de textes
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Analytics
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Analysez vos performances
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tableau d'analyse complet
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Rapports détaillés et insights IA sur vos performances
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <p className="text-green-800 dark:text-green-200">
                  📊 Fonctionnalités à venir : Rapports multi-plateformes, A/B testing, prédictions IA, export PDF
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'engagement':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Engagement
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Gérez vos interactions communautaires
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Centre d'engagement
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Boîte de réception unifiée pour tous vos messages et commentaires
              </p>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <p className="text-teal-800 dark:text-teal-200">
                  💬 Fonctionnalités à venir : Réponses automatiques IA, modération intelligente, gestion DM multi-comptes
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'accounts':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Gestion des comptes
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Connectez et gérez tous vos comptes sociaux
              </p>
            </div>
            <ConnectedAccounts />
          </div>
        );
      
      case 'automation':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Automatisation
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Configurez vos automatisations IA
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Hub d'automatisation
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Créez des workflows automatisés pour optimiser votre présence
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                <p className="text-orange-800 dark:text-orange-200">
                  ⚡ Fonctionnalités à venir : Scripts conversationnels, auto-posting, relances automatiques, veille concurrentielle
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Paramètres
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Configurez votre espace de travail
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Configuration avancée
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Personnalisez votre expérience CommunaIA
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-800 dark:text-gray-200">
                  ⚙️ Fonctionnalités à venir : Préférences IA, intégrations tierces, gestion d'équipe, facturation
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Section en développement
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Cette fonctionnalité sera bientôt disponible.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          isDarkMode={isDarkMode} 
          onToggleDarkMode={toggleDarkMode} 
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export default App;