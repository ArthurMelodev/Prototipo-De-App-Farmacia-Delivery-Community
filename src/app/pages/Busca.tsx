import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, SlidersHorizontal, Heart } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { products } from '../data/products';

export const Busca = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-4">Buscar</h1>
        
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar remédio ou sintoma"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full text-gray-800 focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm"
          >
            <SlidersHorizontal size={16} />
            Filtros
          </button>
          <button className="px-4 py-2 bg-white/20 rounded-full text-sm">
            Preço
          </button>
          <button className="px-4 py-2 bg-white/20 rounded-full text-sm">
            Distância
          </button>
          <button className="px-4 py-2 bg-white/20 rounded-full text-sm">
            Avaliação
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pb-20 p-6">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
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

      <BottomNav />
    </div>
  );
};