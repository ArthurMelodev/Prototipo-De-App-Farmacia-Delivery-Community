import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Copy, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PagamentoPix = () => {
  const navigate = useNavigate();
  const { cart, clearCart, setOrderStatus } = useApp();
  const [copied, setCopied] = useState(false);
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const pixKey = '00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef1234567890520400005303986540525.005802BR5913FARMACIA SAUDE6009SAO PAULO62070503***63041D3A';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
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
          <h1 className="text-2xl font-bold">Pagamento via PIX</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Amount */}
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-2">Valor a pagar</p>
          <p className="text-4xl font-bold text-teal-600">R$ {total.toFixed(2)}</p>
        </div>

        {/* QR Code */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg"
              alt="QR Code PIX"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
          <p className="text-center text-sm text-gray-600">
            Escaneie o QR Code com o app do seu banco
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="text-gray-500 text-sm">ou</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* PIX Key */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Chave PIX Copia e Cola
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={pixKey}
              readOnly
              className="flex-1 px-4 py-3 bg-gray-100 rounded-lg text-sm font-mono"
            />
            <button
              onClick={handleCopyKey}
              className="px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle size={20} />
                  Copiado
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Cole esta chave no app do seu banco para fazer o pagamento
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
          <h4 className="font-bold mb-2 text-blue-900">📱 Como pagar com PIX</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Abra o app do seu banco</li>
            <li>Escolha pagar com PIX</li>
            <li>Escaneie o QR Code ou cole a chave</li>
            <li>Confirme o pagamento</li>
            <li>Pronto! Seu pedido será confirmado automaticamente</li>
          </ol>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="p-6 border-t bg-white">
        <p className="text-center text-sm text-gray-500 mb-4">
          Após realizar o pagamento, clique em confirmar
        </p>
        <button
          onClick={handleConfirmPayment}
          className="w-full py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
        >
          Já fiz o pagamento
        </button>
      </div>
    </div>
  );
};
