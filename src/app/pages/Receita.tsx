import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Camera, Upload, X, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { productsRequiringPrescription } from '../data/products';

export const Receita = () => {
  const navigate = useNavigate();
  const { cart, setPrescriptionUploaded } = useApp();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [prescriptionCode, setPrescriptionCode] = useState('');

  // Filtra produtos no carrinho que precisam de receita
  const productsNeedingPrescription = cart.filter(item => 
    productsRequiringPrescription.includes(item.id)
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setPrescriptionCode(''); // Limpa o código se upload foi feito
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  const handleSubmit = () => {
    if (uploadedImage || prescriptionCode.trim()) {
      setPrescriptionUploaded(true);
      alert('Receita enviada com sucesso! ✅\nSua receita será validada pela farmácia.');
      navigate('/endereco');
    } else {
      alert('Por favor, anexe uma receita médica ou insira o código da receita.');
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
          <h1 className="text-2xl font-bold">Enviar Receita Médica</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        <div className="bg-red-50 rounded-2xl p-4 mb-6 border-2 border-red-200">
          <h3 className="font-bold text-red-900 mb-2">⚠️ Atenção Legal</h3>
          <p className="text-sm text-red-800 mb-2">
            Os seguintes medicamentos no seu carrinho requerem receita médica por serem venda sob prescrição:
          </p>
          <ul className="text-sm text-red-800 ml-4">
            {productsNeedingPrescription.map(product => (
              <li key={product.id} className="mb-1">• {product.name}</li>
            ))}
          </ul>
          <p className="text-xs text-red-700 mt-2">
            É crime comprar medicamentos controlados sem receita médica (Lei 5.991/73 e Lei 13.021/14).
          </p>
        </div>

        {/* Prescription Code Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-800">Código da Receita Digital</label>
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={prescriptionCode}
              onChange={(e) => {
                setPrescriptionCode(e.target.value);
                if (e.target.value.trim()) {
                  setUploadedImage(null); // Limpa imagem se código foi inserido
                }
              }}
              placeholder="Ex: RXD-2024-123456"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-teal-500"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Se você possui uma receita digital, insira o código aqui
          </p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OU</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Upload Area */}
        {!uploadedImage ? (
          <div className="space-y-4">
            {/* Camera Button */}
            <label className="block">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="cursor-pointer bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Camera size={32} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">Tirar Foto</h3>
                    <p className="text-sm text-white/80">Use a câmera do celular</p>
                  </div>
                </div>
              </div>
            </label>

            {/* Upload Button */}
            <label className="block">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="cursor-pointer bg-gray-100 border-2 border-gray-300 border-dashed rounded-2xl p-6 hover:bg-gray-200 transition-all">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Upload size={32} className="text-gray-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-gray-800">Anexar Arquivo</h3>
                    <p className="text-sm text-gray-600">Escolha da galeria</p>
                  </div>
                </div>
              </div>
            </label>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preview */}
            <div className="relative bg-gray-100 rounded-2xl p-4">
              <button
                onClick={handleRemoveImage}
                className="absolute top-6 right-6 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
              >
                <X size={20} />
              </button>
              <img
                src={uploadedImage}
                alt="Receita"
                className="w-full rounded-xl object-contain max-h-96"
              />
            </div>

            {/* Info */}
            <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
              <p className="text-sm text-green-800 flex items-center gap-2">
                <span className="text-xl">✅</span>
                Receita anexada com sucesso!
              </p>
            </div>
          </div>
        )}

        {/* Submit Button - Always visible */}
        {(uploadedImage || prescriptionCode.trim()) && (
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition-colors mt-6"
          >
            Confirmar e Continuar
          </button>
        )}

        {/* Instructions */}
        <div className="mt-6 bg-gray-50 rounded-2xl p-4">
          <h4 className="font-bold mb-3 text-gray-800">📸 Dicas para uma boa foto:</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Certifique-se de que a receita está bem iluminada</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Evite sombras ou reflexos</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Todas as informações devem estar legíveis</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Mantenha a câmera paralela ao documento</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};