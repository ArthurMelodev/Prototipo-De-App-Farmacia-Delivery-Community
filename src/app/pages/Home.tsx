import { useNavigate } from 'react-router';
import { Search } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { categories, pharmacies, products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();
  const { user, cart } = useApp();

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl mb-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm opacity-90">Olá, {user?.name || 'Usuário'}! 👋</p>
            <h1 className="text-2xl font-bold">O que você procura?</h1>
          </div>
          <button
            onClick={() => navigate('/carrinho')}
            className="relative w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar remédio ou sintoma"
            className="w-full pl-10 pr-4 py-3 rounded-full text-gray-800 focus:outline-none"
            onClick={() => navigate('/busca')}
            readOnly
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Categories */}
        <div className="px-6 pt-2 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-gray-800">Categorias</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex flex-col items-center gap-2 relative overflow-hidden rounded-2xl shadow-sm"
                onClick={() => navigate(`/categoria/${category.id}`)}
              >
                <div className={`w-full aspect-square ${category.color} rounded-2xl flex flex-col items-center justify-center gap-1 border border-gray-100`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <span className="text-xs text-center text-gray-700 font-medium pb-1 leading-tight px-1">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pharmacies */}
        <div className="px-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Farmácias próximas</h2>
            <button className="text-teal-600 text-sm">Ver todas</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {pharmacies.map((pharmacy) => (
              <div key={pharmacy.id} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-100">
                  <img 
                    src={pharmacy.logo} 
                    alt={pharmacy.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{pharmacy.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      📍 {pharmacy.distance}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm font-medium text-gray-700">{pharmacy.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100">
                  →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div className="px-6 pb-6">
          <h2 className="font-bold text-lg mb-4">Promoções do dia 🔥</h2>
          <div className="grid grid-cols-2 gap-3">
            {products.slice(0, 8).map((product) => (
              <button
                key={product.id}
                onClick={() => navigate(`/produto/${product.id}`)}
                className="bg-white border border-gray-200 rounded-2xl p-3 text-left hover:shadow-lg transition-all"
              >
                <div className="aspect-square bg-gray-50 rounded-xl mb-2 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-teal-600 font-bold text-lg">R$ {product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};