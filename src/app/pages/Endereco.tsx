import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Endereco = () => {
  const navigate = useNavigate();
  const { user, setUser } = useApp();
  const [address, setAddress] = useState({
    cep: user?.address.includes(',') ? '' : user?.address || '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${address.street}, ${address.number}${address.complement ? ' - ' + address.complement : ''}, ${address.neighborhood}, ${address.city} - ${address.state}, CEP: ${address.cep}`;
    
    if (user) {
      setUser({
        ...user,
        address: fullAddress
      });
    }
    
    navigate('/pagamento');
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Endereço de Entrega</h1>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center gap-3 bg-teal-50 rounded-lg p-4 mb-6 border border-teal-200">
          <MapPin className="text-teal-600" size={24} />
          <p className="text-sm text-teal-800">
            Informe o endereço completo para entrega do seu pedido
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">CEP</label>
            <input
              type="text"
              value={address.cep}
              onChange={(e) => setAddress({...address, cep: e.target.value})}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="00000-000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Rua/Avenida</label>
            <input
              type="text"
              value={address.street}
              onChange={(e) => setAddress({...address, street: e.target.value})}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Nome da rua"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Número</label>
              <input
                type="text"
                value={address.number}
                onChange={(e) => setAddress({...address, number: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="123"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Complemento</label>
              <input
                type="text"
                value={address.complement}
                onChange={(e) => setAddress({...address, complement: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Apto 101"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Bairro</label>
            <input
              type="text"
              value={address.neighborhood}
              onChange={(e) => setAddress({...address, neighborhood: e.target.value})}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Nome do bairro"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Cidade</label>
              <input
                type="text"
                value={address.city}
                onChange={(e) => setAddress({...address, city: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Cidade"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Estado</label>
              <input
                type="text"
                value={address.state}
                onChange={(e) => setAddress({...address, state: e.target.value})}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="UF"
                maxLength={2}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors mt-6"
          >
            Continuar para pagamento
          </button>
        </form>
      </div>
    </div>
  );
};
