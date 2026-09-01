import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Plus, ShoppingCart, X, ImageIcon, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { categories, products } from '../data/products';
import { Product } from '../context/AppContext';

const PHARMACIES = ['Farmácia Drogasil', 'Farmácia Pague Menos', 'Drogaria Popular', 'Farmácia Popular', 'Farmácia Bem Estar'];

export const Categoria = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, customProducts, addCustomProduct, removeCustomProduct } = useApp();

  const [showModal, setShowModal] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    price: '',
    pharmacy: PHARMACIES[0],
    description: '',
    image: '',
  });

  const category = categories.find((c) => c.id === id);

  const staticFiltered = products.filter((p) => p.categoryId === id);
  const customFiltered = customProducts.filter((p) => p.categoryId === id);
  const allProducts = [...staticFiltered, ...customFiltered];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.price || !form.description.trim()) return;
    const newProduct: Product = {
      id: `custom-${Date.now()}`,
      name: form.name.trim(),
      price: parseFloat(form.price),
      pharmacy: form.pharmacy,
      description: form.description.trim(),
      image: form.image.trim() || 'https://via.placeholder.com/200x200?text=Produto',
      categoryId: id,
    };
    addCustomProduct(newProduct);
    setForm({ name: '', price: '', pharmacy: PHARMACIES[0], description: '', image: '' });
    setShowModal(false);
  };

  if (!category) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <p className="text-gray-500">Categoria não encontrada.</p>
        <button onClick={() => navigate('/home')} className="mt-4 text-teal-600 underline">
          Voltar para Home
        </button>
      </div>
    );
  }

  const gradients: Record<string, string> = {
    '1': 'from-red-500 to-red-600',
    '2': 'from-blue-500 to-blue-600',
    '3': 'from-yellow-500 to-orange-500',
    '4': 'from-pink-500 to-pink-600',
    '5': 'from-green-500 to-teal-600',
  };
  const gradient = gradients[id!] || 'from-teal-500 to-teal-600';

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${gradient} text-white pt-12 pb-6 px-6 rounded-b-3xl`}>
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <p className="text-sm opacity-80">Categoria</p>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <span>{category.icon}</span>
              {category.name}
            </h1>
          </div>
        </div>
        <p className="text-sm opacity-80">
          {allProducts.length} {allProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </p>
      </div>

      {/* Product list */}
      <div className="flex-1 overflow-y-auto p-4 pb-6">
        {allProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">{category.icon}</div>
            <p className="text-gray-500 text-lg font-medium mb-1">Nenhum produto ainda</p>
            <p className="text-gray-400 text-sm mb-6">Adicione o primeiro produto desta categoria</p>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-full font-semibold"
            >
              <Plus size={18} />
              Adicionar Produto
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {allProducts.map((product) => {
              const isCustom = product.id.startsWith('custom-');
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col"
                >
                  {isCustom && (
                    <div className="flex justify-end mb-1">
                      <button
                        onClick={() => removeCustomProduct(product.id)}
                        className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-red-400 hover:bg-red-100"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => navigate(`/produto/${product.id}`)}
                    className="flex-1 text-left"
                  >
                    <div className="aspect-square bg-gray-50 rounded-xl mb-2 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x200?text=Produto';
                        }}
                      />
                    </div>
                    <h3 className="font-medium text-sm mb-1 line-clamp-2 text-gray-800">{product.name}</h3>
                    <p className="text-xs text-gray-400 mb-1 line-clamp-1">{product.pharmacy}</p>
                    <p className="text-teal-600 font-bold text-lg">R$ {product.price.toFixed(2)}</p>
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`mt-2 w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                      addedId === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-teal-600 text-white hover:bg-teal-700'
                    }`}
                  >
                    {addedId === product.id ? '✓ Adicionado' : 'Adicionar'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FAB */}
      {allProducts.length > 0 && (
        <button
          onClick={() => setShowModal(true)}
          className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br ${gradient} text-white rounded-full shadow-lg flex items-center justify-center`}
        >
          <Plus size={26} />
        </button>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Adicionar Produto</h2>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Image preview */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  URL da Foto do Produto
                </label>
                <div className="flex gap-3 items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center border border-gray-200">
                    {form.image ? (
                      <img
                        src={form.image}
                        alt="Preview"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <ImageIcon size={24} className="text-gray-300" />
                    )}
                  </div>
                  <input
                    type="url"
                    placeholder="Cole aqui a URL da imagem"
                    value={form.image}
                    onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Nome do Produto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dipirona 500mg"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Preço (R$) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0,00"
                  value={form.price}
                  onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Farmácia</label>
                <select
                  value={form.pharmacy}
                  onChange={(e) => setForm((f) => ({ ...f, pharmacy: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 bg-white"
                >
                  {PHARMACIES.map((ph) => (
                    <option key={ph} value={ph}>{ph}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Descrição <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Descreva o produto, indicação, dosagem..."
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name.trim() || !form.price || !form.description.trim()}
                className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold text-base disabled:opacity-40 disabled:cursor-not-allowed hover:bg-teal-700 transition-colors"
              >
                Salvar Produto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
