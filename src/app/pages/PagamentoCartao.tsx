import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, CreditCard } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PagamentoCartao = () => {
  const navigate = useNavigate();
  const { cart, clearCart, setOrderStatus } = useApp();
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19);
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderStatus('confirmed');
    clearCart();
    navigate('/rastreamento');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Pagamento com Cartão</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Card Preview */}
        <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-6 mb-6 text-white shadow-xl">
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-10 bg-yellow-400 rounded"></div>
            <CreditCard size={32} className="opacity-50" />
          </div>
          <div className="mb-4">
            <p className="text-lg tracking-wider font-mono">
              {cardData.number || '•••• •••• •••• ••••'}
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">Nome do Titular</p>
              <p className="text-sm uppercase">
                {cardData.name || 'SEU NOME AQUI'}
              </p>
            </div>
            <div>
              <p className="text-xs opacity-70 mb-1">Validade</p>
              <p className="text-sm">{cardData.expiry || 'MM/AA'}</p>
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="bg-teal-50 rounded-xl p-4 mb-6 border border-teal-200 text-center">
          <p className="text-gray-600 text-sm mb-1">Total a pagar</p>
          <p className="text-2xl font-bold text-teal-600">R$ {total.toFixed(2)}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Número do Cartão
            </label>
            <input
              type="text"
              value={cardData.number}
              onChange={(e) =>
                setCardData({ ...cardData, number: formatCardNumber(e.target.value) })
              }
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Nome do Titular
            </label>
            <input
              type="text"
              value={cardData.name}
              onChange={(e) =>
                setCardData({ ...cardData, name: e.target.value.toUpperCase() })
              }
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 uppercase"
              placeholder="NOME COMO NO CARTÃO"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Validade
              </label>
              <input
                type="text"
                value={cardData.expiry}
                onChange={(e) =>
                  setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })
                }
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
                placeholder="MM/AA"
                maxLength={5}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">CVV</label>
              <input
                type="text"
                value={cardData.cvv}
                onChange={(e) =>
                  setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })
                }
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-center"
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="save-card" className="w-4 h-4 text-teal-600" />
              <label htmlFor="save-card" className="text-sm text-gray-700">
                Salvar cartão para próximas compras
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Seus dados estão seguros e criptografados
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors mt-6"
          >
            Confirmar pagamento
          </button>
        </form>
      </div>
    </div>
  );
};
