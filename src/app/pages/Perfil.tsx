import { useNavigate } from 'react-router';
import { ChevronRight, User, MapPin, ShoppingBag, Settings, HelpCircle, LogOut, Bell } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useApp } from '../context/AppContext';

export const Perfil = () => {
  const navigate = useNavigate();
  const { user, setUser } = useApp();

  const menuItems = [
    { icon: Bell, label: 'Lembretes de Medicação', path: '/lembretes', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: ShoppingBag, label: 'Histórico de pedidos', path: '/rastreamento', color: 'text-teal-600', bg: 'bg-teal-50' },
    { icon: Settings, label: 'Configurações', path: '/configuracoes', color: 'text-gray-600', bg: 'bg-gray-50' },
    { icon: HelpCircle, label: 'Ajuda', path: '/perfil', color: 'text-gray-600', bg: 'bg-gray-50' }
  ];

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-6">Meu Perfil</h1>
        
        {/* User Info */}
        <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <User size={32} />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-lg">{user?.name || 'Nome Andrão'}</h2>
            <p className="text-sm text-white/80">{user?.email || 'V Armação, denseio'}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20 p-6">
        {/* User Details */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-4 mb-3">
            <div className="flex items-center gap-3">
              <User className="text-gray-400" size={20} />
              <div>
                <p className="text-xs text-gray-500">Nome</p>
                <p className="font-medium">{user?.name || 'Nome Andrão'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-400" size={20} />
              <div>
                <p className="text-xs text-gray-500">Endereço</p>
                <p className="font-medium">{user?.address || 'V Armação, denseio'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Opções</h3>
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Icon className="text-gray-600" size={24} />
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  <ChevronRight className="text-gray-400" size={20} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Extra Feature - Receita Médica */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/receita')}
            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                📋
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold">Enviar Receita Médica</h3>
                <p className="text-sm text-white/80">Para medicamentos controlados</p>
              </div>
              <ChevronRight size={20} />
            </div>
          </button>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};