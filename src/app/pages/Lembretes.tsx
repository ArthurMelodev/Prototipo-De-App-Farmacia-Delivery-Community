import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Bell, Clock, Plus, X } from 'lucide-react';

interface Reminder {
  id: string;
  medication: string;
  dosage: string;
  nextTime: string;
  enabled: boolean;
}

interface ScheduleTime {
  id: string;
  label: string;
  time: string;
  enabled: boolean;
}

export const Lembretes = () => {
  const navigate = useNavigate();
  const [activeReminder, setActiveReminder] = useState<Reminder | null>({
    id: '1',
    medication: 'Paracetamol',
    dosage: '500mg',
    nextTime: '14:00',
    enabled: true
  });
  const [showSnoozeModal, setShowSnoozeModal] = useState(false);

  const [schedules, setSchedules] = useState<ScheduleTime[]>([
    { id: '1', label: 'Manhã', time: '08:00', enabled: true },
    { id: '2', label: 'Tarde', time: '14:00', enabled: true },
    { id: '3', label: 'Noite', time: '20:00', enabled: false }
  ]);

  const toggleSchedule = (id: string) => {
    setSchedules(schedules.map(schedule =>
      schedule.id === id ? { ...schedule, enabled: !schedule.enabled } : schedule
    ));
  };

  const handleTakeNow = () => {
    // Remove o lembrete ativo
    setActiveReminder(null);
    alert('Medicamento marcado como tomado! ✅');
  };

  const handleSnooze = () => {
    setShowSnoozeModal(true);
  };

  const handleSnoozeTime = (minutes: number) => {
    setShowSnoozeModal(false);
    if (activeReminder) {
      const [hours, mins] = activeReminder.nextTime.split(':').map(Number);
      const newTime = new Date();
      newTime.setHours(hours, mins + minutes);
      const newTimeStr = `${String(newTime.getHours()).padStart(2, '0')}:${String(newTime.getMinutes()).padStart(2, '0')}`;
      setActiveReminder({
        ...activeReminder,
        nextTime: newTimeStr
      });
      alert(`Lembrete adiado para ${newTimeStr} ⏰`);
    }
  };

  const handleAlreadyTook = () => {
    // Remove o lembrete ativo
    setActiveReminder(null);
    alert('Registrado! Você já tomou este medicamento ✓');
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 pt-12 rounded-b-3xl shadow-lg">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Lembretes de Medicação</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Active Reminder Card */}
        {activeReminder ? (
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-6 border-2 border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Bell className="text-white" size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Próximo lembrete</p>
                <h2 className="text-2xl font-bold text-gray-800">{activeReminder.medication}</h2>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-600">Dosagem</p>
                  <p className="text-lg font-bold text-blue-600">{activeReminder.dosage}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Horário</p>
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-blue-600" />
                    <p className="text-lg font-bold text-blue-600">{activeReminder.nextTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleTakeNow}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span className="text-xl">💊</span>
                Tomar agora
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleSnooze}
                  className="py-3 bg-gray-100 text-gray-700 rounded-2xl font-medium hover:bg-gray-200 transition-colors"
                >
                  ⏰ Adiar
                </button>
                <button
                  onClick={handleAlreadyTook}
                  className="py-3 bg-green-50 text-green-700 rounded-2xl font-medium hover:bg-green-100 transition-colors border border-green-200"
                >
                  ✓ Já tomei
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 border-2 border-green-100 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Tudo em dia!</h3>
            <p className="text-gray-600">Você já tomou todos os medicamentos de hoje.</p>
          </div>
        )}

        {/* Schedule Times */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Horários do dia</h3>
            <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
              <Plus size={16} />
              Adicionar
            </button>
          </div>

          <div className="space-y-3">
            {schedules.map((schedule) => (
              <div
                key={schedule.id}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                  schedule.enabled
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200'
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    schedule.enabled ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className={`font-bold ${schedule.enabled ? 'text-gray-800' : 'text-gray-500'}`}>
                      {schedule.label}
                    </p>
                    <p className={`text-sm ${schedule.enabled ? 'text-blue-600' : 'text-gray-400'}`}>
                      {schedule.time}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleSchedule(schedule.id)}
                  className={`w-14 h-8 rounded-full transition-all relative ${
                    schedule.enabled ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                      schedule.enabled ? 'right-1' : 'left-1'
                    }`}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-bold text-green-800 mb-1">Dica</h4>
              <p className="text-sm text-green-700">
                Tome seus medicamentos sempre nos mesmos horários para melhor eficácia do tratamento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Snooze Modal */}
      {showSnoozeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
          <div className="bg-white rounded-t-3xl p-6 w-full max-w-md animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Adiar lembrete</h3>
              <button onClick={() => setShowSnoozeModal(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => handleSnoozeTime(15)}
                className="w-full py-4 bg-blue-50 text-blue-700 rounded-2xl font-medium hover:bg-blue-100 transition-colors"
              >
                + 15 minutos
              </button>
              <button
                onClick={() => handleSnoozeTime(30)}
                className="w-full py-4 bg-blue-50 text-blue-700 rounded-2xl font-medium hover:bg-blue-100 transition-colors"
              >
                + 30 minutos
              </button>
              <button
                onClick={() => handleSnoozeTime(60)}
                className="w-full py-4 bg-blue-50 text-blue-700 rounded-2xl font-medium hover:bg-blue-100 transition-colors"
              >
                + 1 hora
              </button>
              <button
                onClick={() => handleSnoozeTime(120)}
                className="w-full py-4 bg-blue-50 text-blue-700 rounded-2xl font-medium hover:bg-blue-100 transition-colors"
              >
                + 2 horas
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};