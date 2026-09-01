import { useNavigate } from 'react-router';
import { ChevronLeft, CheckCircle2, Clock, Truck, MapPin } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';

export const Rastreamento = () => {
  const navigate = useNavigate();

  const orderSteps = [
    { id: 1, label: 'Pedido confirmado', icon: CheckCircle2, status: 'completed' },
    { id: 2, label: 'Em preparo', icon: Clock, status: 'active' },
    { id: 3, label: 'Saiu para entrega', icon: Truck, status: 'pending' },
    { id: 4, label: 'Entregue', icon: MapPin, status: 'pending' }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 pt-12 rounded-b-3xl">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate('/home')} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Acompanhar pedido</h1>
        </div>
      </div>

      {/* Order Tracking */}
      <div className="flex-1 overflow-y-auto pb-20 p-6">
        {/* Delivery Illustration */}
        <div className="text-center mb-8 py-8">
          <div className="inline-flex items-center gap-4 text-6xl mb-4">
            <span>📦</span>
            <span>🚚</span>
            <span>📍</span>
          </div>
        </div>

        {/* Order Steps */}
        <div className="space-y-6 mb-8">
          {orderSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex items-start gap-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    step.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : step.status === 'active'
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon size={24} />
                  </div>
                  {index < orderSteps.length - 1 && (
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 ${
                      step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`} style={{ top: '48px' }}></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className={`font-medium mb-1 ${
                    step.status === 'active' ? 'text-teal-600' : ''
                  }`}>
                    {step.label}
                  </h3>
                  {step.status === 'active' && (
                    <p className="text-sm text-gray-500">
                      Seu pedido está sendo preparado pela farmácia
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Estimated Time */}
        <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
          <div className="flex items-center gap-3">
            <Clock className="text-teal-600" size={24} />
            <div>
              <p className="text-sm text-gray-600">Tempo estimado</p>
              <p className="font-bold text-teal-600">30 minutos</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/home')}
          className="w-full mt-6 py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors"
        >
          Voltar para home
        </button>
      </div>

      <BottomNav />
    </div>
  );
};
