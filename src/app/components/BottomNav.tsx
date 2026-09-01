import { Home, Search, ShoppingCart, User, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Busca', path: '/busca' },
    { icon: ShoppingCart, label: 'Carrinho', path: '/carrinho' },
    { icon: Bell, label: 'Lembrete', path: '/lembretes' },
    { icon: User, label: 'Perfil', path: '/perfil' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center flex-1 h-full ${
                  isActive ? 'text-teal-600' : 'text-gray-500'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};