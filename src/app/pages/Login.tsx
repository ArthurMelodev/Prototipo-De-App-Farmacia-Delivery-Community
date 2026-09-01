import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Pill } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: 'usuário',
      email: email || 'usuario@email.com',
      address: 'Rua Exemplo, 123'
    });
    navigate('/home');
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-teal-600 to-teal-700">
      {/* Header */}
      <div className="p-8 pt-16 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Pill size={32} />
          <div>
            <div className="font-bold text-xl">Farmácia</div>
            <div className="text-sm">Delivery</div>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 bg-white rounded-t-3xl p-8 mt-8">
        <h1 className="text-2xl font-bold mb-2">Entrar</h1>
        
        <form onSubmit={handleLogin} className="space-y-4 mt-8">
          <div>
            <label className="block text-sm mb-2 text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors mt-6"
          >
            Entrar
          </button>

          <button
            type="button"
            onClick={() => navigate('/cadastro')}
            className="w-full py-3 border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors"
          >
            Criar conta
          </button>

          <button
            type="button"
            className="w-full py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Entrar com Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Compre medicamentos de forma rápida e segura
        </p>
      </div>
    </div>
  );
};
