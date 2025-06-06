import React, { useState } from 'react';
import { Bot, Send, Sparkles, PenTool, Image, Calendar } from 'lucide-react';
import type { AIMessage } from '../../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Bonjour ! Je suis votre assistant IA pour le community management. Comment puis-je vous aider aujourd\'hui ? Je peux vous aider à créer du contenu, planifier vos posts, ou répondre à vos questions marketing.',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    {
      text: 'Créer un post pour la fête des mères',
      icon: PenTool
    },
    {
      text: 'Générer une image pour Instagram',
      icon: Image
    },
    {
      text: 'Planifier la semaine prochaine',
      icon: Calendar
    },
    {
      text: 'Idées de hashtags trending',
      icon: Sparkles
    }
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: AIMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(message),
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const responses = {
      'fête des mères': '🌸 Parfait ! Voici une idée de post pour la fête des mères :\n\n"À toutes les mamans extraordinaires qui jonglent entre mille choses avec le sourire... Vous êtes nos héroïnes du quotidien ! 💝\n\n#FêteDesMères #Maman #Amour #Famille #SuperMaman"\n\nVoulez-vous que je génère aussi une image pour accompagner ce post ?',
      'hashtags': '🔥 Voici les hashtags trending actuels :\n\n• #ContentCreator #DigitalMarketing\n• #SocialMediaTips #InfluencerLife\n• #BrandStrategy #CommunityManager\n• #CreativeContent #MarketingDigital\n• #Engagement #SocialMediaMarketing\n\nCes hashtags ont une forte portée cette semaine !',
      'image': '🎨 Je peux vous aider à créer une image ! Décrivez-moi :\n\n• Le style souhaité (moderne, vintage, minimaliste...)\n• Les couleurs préférées\n• Le message à transmettre\n• La plateforme de destination\n\nEt je génèrerai une image parfaite pour votre post !',
      'default': '✨ Excellente question ! Pour vous donner la meilleure réponse, pouvez-vous me donner plus de détails ? Je peux vous aider avec :\n\n• Création de contenu\n• Stratégie sociale\n• Planification de posts\n• Génération d\'images\n• Idées de campagnes\n\nQue souhaitez-vous développer en priorité ?'
    };

    const message = userMessage.toLowerCase();
    if (message.includes('mère') || message.includes('maman')) return responses['fête des mères'];
    if (message.includes('hashtag')) return responses['hashtags'];
    if (message.includes('image') || message.includes('photo') || message.includes('visuel')) return responses['image'];
    return responses['default'];
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col h-96">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Le Community</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Assistant IA</p>
        </div>
        <div className="ml-auto">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickPrompts.map((prompt, index) => {
            const Icon = prompt.icon;
            return (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt.text)}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-xs text-gray-700 dark:text-gray-300 transition-colors"
              >
                <Icon className="w-3 h-3" />
                <span>{prompt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="Demandez-moi n'importe quoi..."
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;