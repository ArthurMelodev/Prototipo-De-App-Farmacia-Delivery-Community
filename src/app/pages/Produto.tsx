import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, ShoppingCart, Minus, Plus, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products, pharmacies } from '../data/products';

export const Produto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useApp();
  const [activeTab, setActiveTab] = useState<'ofertas' | 'sobre' | 'bula'>('ofertas');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const originalPrice = product.price * 1.35; // Simulando desconto de 35%

  // Simula preços variados por farmácia para comparação
  const productPricesByPharmacy = pharmacies.map(pharmacy => {
    // Varia o preço entre -10% e +15% do preço base
    const variation = Math.random() * 0.25 - 0.10;
    const priceVariation = product.price * (1 + variation);
    return {
      ...pharmacy,
      price: parseFloat(priceVariation.toFixed(2))
    };
  }).sort((a, b) => a.price - b.price); // Ordena por preço crescente

  const cheapestPharmacy = productPricesByPharmacy[0];

  const handleAddToCart = () => {
    // Adiciona o produto com o preço da farmácia mais barata
    const productWithBestPrice = {
      ...product,
      price: cheapestPharmacy.price,
      pharmacy: cheapestPharmacy.name
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(productWithBestPrice);
    }
    navigate('/carrinho');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 pt-12 flex items-center justify-between bg-white border-b">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={() => navigate('/carrinho')}>
          <ShoppingCart size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Product Title */}
        <div className="px-6 pt-4 pb-2">
          <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
        </div>

        {/* Product Image */}
        <div className="px-6 py-6">
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square">
            <img
              src={product.boxImage || product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 mb-6">
          <div className="flex gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('ofertas')}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'ofertas'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Ofertas
            </button>
            <button
              onClick={() => setActiveTab('sobre')}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'sobre'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => setActiveTab('bula')}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'bula'
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Bula
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-6">
          {activeTab === 'ofertas' && (
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-bold text-green-900">Melhor Preço Encontrado!</h3>
                </div>
                <p className="text-sm text-green-800">
                  Automaticamente selecionamos a farmácia mais barata para você
                </p>
              </div>

              {/* Comparação de Preços por Farmácia */}
              <div className="space-y-3">
                <h3 className="font-bold text-gray-800 mb-3">Compare preços:</h3>
                {productPricesByPharmacy.map((pharmacyData, index) => (
                  <div 
                    key={pharmacyData.id} 
                    className={`p-4 rounded-xl border-2 ${
                      index === 0 
                        ? 'bg-green-50 border-green-400' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-100">
                        <img 
                          src={pharmacyData.logo} 
                          alt={pharmacyData.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-gray-800">{pharmacyData.name}</h4>
                          {index === 0 && (
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                              MAIS BARATO
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{pharmacyData.distance}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            ⭐ {pharmacyData.rating}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-teal-600">
                          R$ {pharmacyData.price.toFixed(2)}
                        </div>
                        {index > 0 && (
                          <div className="text-xs text-red-600">
                            +R$ {(pharmacyData.price - cheapestPharmacy.price).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Vendido e entregue por:</span> {cheapestPharmacy.name}
                </p>
                <div className="mt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-500 line-through">
                      R$ {(cheapestPharmacy.price * 1.35).toFixed(2)}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                      ⬇ 35%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sobre' && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold mb-2">Descrição</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Farmácia:</span>
                  <span className="font-medium">{product.pharmacy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-medium">Medicamento</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bula' && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-bold mb-2">Informações da Bula</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="space-y-2 text-sm">
                <p className="font-medium">⚠️ Contraindicações:</p>
                <p className="text-gray-600">Consulte um médico antes de usar.</p>
                <p className="font-medium mt-3">📋 Modo de usar:</p>
                <p className="text-gray-600">Conforme orientação médica.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section - Quantity and Buy */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">Quantidade</span>
          <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors text-lg"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};