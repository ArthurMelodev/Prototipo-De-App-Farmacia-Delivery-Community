import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Moon, Sun, Bell, Globe, Lock, Palette } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Configuracoes = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useApp();
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('pt-BR');

  const themes = [
    { id: 'light', name: 'Claro', icon: Sun, color: 'bg-white border-gray-300' },
    { id: 'dark', name: 'Escuro', icon: Moon, color: 'bg-gray-900 border-gray-700' },
  ];

  return (
    <div className={`h-full flex flex-col ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <div className={`${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-teal-600 to-teal-700'} text-white p-6 pt-12 rounded-b-3xl`}>
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Configurações</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Theme Selection */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-5 mb-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-gray-700' : 'bg-teal-100'} rounded-xl flex items-center justify-center`}>
              <Palette className={theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} size={20} />
            </div>
            <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Tema do Aplicativo</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              return (
                <button
                  key={themeOption.id}
                  onClick={() => setTheme(themeOption.id as 'light' | 'dark')}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    theme === themeOption.id
                      ? theme === 'dark' 
                        ? 'border-teal-400 bg-gray-700'
                        : 'border-teal-600 bg-teal-50'
                      : theme === 'dark'
                        ? 'border-gray-700 bg-gray-800'
                        : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center ${themeOption.color}`}>
                    <Icon size={24} className={themeOption.id === 'dark' ? 'text-white' : 'text-gray-800'} />
                  </div>
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>{themeOption.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-5 mb-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-gray-700' : 'bg-teal-100'} rounded-xl flex items-center justify-center`}>
                <Bell className={theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} size={20} />
              </div>
              <div>
                <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Notificações</h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Receber alertas de lembretes</p>
              </div>
            </div>

            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-14 h-8 rounded-full transition-all relative ${
                notifications 
                  ? theme === 'dark' ? 'bg-teal-500' : 'bg-teal-600'
                  : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                  notifications ? 'right-1' : 'left-1'
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Language */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-5 mb-6`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-gray-700' : 'bg-teal-100'} rounded-xl flex items-center justify-center`}>
              <Globe className={theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} size={20} />
            </div>
            <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Idioma</h3>
          </div>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`w-full px-4 py-3 rounded-xl ${
              theme === 'dark' 
                ? 'bg-gray-700 text-white border-gray-600'
                : 'bg-white border-gray-200'
            } border-2 focus:outline-none focus:ring-2 focus:ring-teal-500`}
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
        </div>

        {/* Privacy */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-5 mb-6`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-gray-700' : 'bg-teal-100'} rounded-xl flex items-center justify-center`}>
              <Lock className={theme === 'dark' ? 'text-teal-400' : 'text-teal-600'} size={20} />
            </div>
            <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Privacidade</h3>
          </div>

          <div className="space-y-3">
            <button className={`w-full text-left px-4 py-3 rounded-xl ${
              theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
            } font-medium hover:opacity-80 transition-opacity`}>
              Política de Privacidade
            </button>
            <button className={`w-full text-left px-4 py-3 rounded-xl ${
              theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-700'
            } font-medium hover:opacity-80 transition-opacity`}>
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Info */}
        <div className={`${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
        } rounded-2xl p-4 border-2`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-blue-800'}`}>
            <span className="font-bold">Versão:</span> 1.0.0
          </p>
          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-blue-600'} mt-1`}>
            © 2026 Farmácia App - Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
};
