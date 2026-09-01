import { useNavigate } from 'react-router';
import { ChevronLeft, Trash2 } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { useApp } from '../context/AppContext';
import { productsRequiringPrescription } from '../data/products';

export const Carrinho = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, setPrescriptionUploaded } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Verifica se há produtos que precisam de receita no carrinho
  const requiresPrescription = cart.some(item => 
    productsRequiringPrescription.includes(item.id)
  );

  const handleCheckout = () => {
    if (requiresPrescription) {
      // Se há produtos que precisam de receita, redireciona para página de receita
      setPrescriptionUploaded(false);
      navigate('/receita');
    } else {
      // Se não precisa de receita, vai direto para endereço
      navigate('/endereco');
    }
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Carrinho</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto pb-32 p-6">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
            <button
              onClick={() => navigate('/busca')}
              className="px-6 py-2 bg-teal-600 text-white rounded-full"
            >
              Buscar produtos
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.pharmacy}</p>
                  <p className="text-teal-600 font-bold">R$ {item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total and Checkout */}
      {cart.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-6 max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-bold text-teal-600">
              R$ {total.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            Finalizar compra
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};