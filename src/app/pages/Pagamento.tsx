import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Pagamento = () => {
  const navigate = useNavigate();
  const { cart, clearCart, setOrderStatus } = useApp();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const paymentMethods = [
    { id: 'pix', name: 'Pix', icon: Smartphone, description: 'Pagamento instantâneo' },
    { id: 'card', name: 'Cartão', icon: CreditCard, description: 'Crédito ou débito' },
    { id: 'money', name: 'Dinheiro', icon: Banknote, description: 'Pagar na entrega' }
  ];

  const handleContinue = () => {
    if (!selectedMethod) {
      alert('Selecione um método de pagamento');
      return;
    }
    
    if (selectedMethod === 'pix') {
      navigate('/pagamento-pix');
    } else if (selectedMethod === 'card') {
      navigate('/pagamento-cartao');
    } else {
      // For money, go directly to tracking
      setOrderStatus('confirmed');
      clearCart();
      navigate('/rastreamento');
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
          <h1 className="text-2xl font-bold">Pagamento</h1>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex-1 overflow-y-auto p-6">
        <h2 className="font-bold mb-4">Selecione o método de pagamento</h2>
        
        <div className="space-y-3 mb-8">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                  selectedMethod === method.id
                    ? 'border-teal-600 bg-teal-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  selectedMethod === method.id ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1 text-left">
                  <span className="font-medium block">{method.name}</span>
                  <span className="text-sm text-gray-500">{method.description}</span>
                </div>
                <div className="ml-auto">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === method.id ? 'border-teal-600' : 'border-gray-300'
                  }`}>
                    {selectedMethod === method.id && (
                      <div className="w-3 h-3 rounded-full bg-teal-600"></div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-bold mb-3">Resumo do pedido</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span className="text-gray-600">{item.name} (x{item.quantity})</span>
              <span className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between">
            <span className="font-bold">Total</span>
            <span className="text-xl font-bold text-teal-600">R$ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="p-6 border-t bg-white">
        <button
          onClick={handleContinue}
          disabled={!selectedMethod}
          className={`w-full py-4 rounded-full font-medium transition-colors ${
            selectedMethod
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};