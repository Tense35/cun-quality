import { useState } from 'react';
import { Modelo } from '../types';
import { CheckCircle, X } from 'lucide-react';

interface ModelComparatorProps {
  modelos: Modelo[];
}

export function ModelComparator({ modelos }: ModelComparatorProps) {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const toggleModel = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  const selectedModelosData = modelos.filter(m => selectedModels.includes(m.id));

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h4 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Comparador de Modelos
      </h4>
      <p className="text-gray-600 text-center mb-8">
        Selecciona hasta 3 modelos para comparar lado a lado
      </p>

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {modelos.map((modelo) => {
          const Icon = modelo.icon;
          const isSelected = selectedModels.includes(modelo.id);
          const isDisabled = !isSelected && selectedModels.length >= 3;

          return (
            <button
              key={modelo.id}
              onClick={() => toggleModel(modelo.id)}
              disabled={isDisabled}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold
                        transition-all duration-300 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg'
                  : isDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{modelo.nombre}</span>
              {isSelected && <X className="w-4 h-4" />}
            </button>
          );
        })}
      </div>

      {selectedModelosData.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          Selecciona al menos un modelo para comenzar la comparación
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                <th className="p-4 text-left font-bold text-gray-900">Característica</th>
                {selectedModelosData.map(modelo => (
                  <th key={modelo.id} className="p-4 text-center font-bold text-gray-900">
                    {modelo.nombre}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold text-gray-700">Descripción</td>
                {selectedModelosData.map(modelo => (
                  <td key={modelo.id} className="p-4 text-sm text-gray-600">
                    {modelo.descripcion}
                  </td>
                ))}
              </tr>

              {selectedModelosData[0]?.mejorPara && (
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Mejor Para</td>
                  {selectedModelosData.map(modelo => (
                    <td key={modelo.id} className="p-4 text-sm text-gray-600">
                      {modelo.mejorPara || '-'}
                    </td>
                  ))}
                </tr>
              )}

              {selectedModelosData[0]?.nivelMadurez && (
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-gray-700">Estructura</td>
                  {selectedModelosData.map(modelo => (
                    <td key={modelo.id} className="p-4 text-sm text-gray-600">
                      {modelo.nivelMadurez || '-'}
                    </td>
                  ))}
                </tr>
              )}

              {selectedModelosData[0]?.analogia && (
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold text-gray-700">Analogía</td>
                  {selectedModelosData.map(modelo => (
                    <td key={modelo.id} className="p-4 text-sm text-gray-600 italic">
                      {modelo.analogia || '-'}
                    </td>
                  ))}
                </tr>
              )}

              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold text-gray-700">Beneficios Clave</td>
                {selectedModelosData.map(modelo => (
                  <td key={modelo.id} className="p-4">
                    <ul className="space-y-2">
                      {modelo.beneficios.slice(0, 3).map((beneficio, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{beneficio}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {selectedModelosData[0]?.casoReal && (
                <tr className="bg-blue-50">
                  <td className="p-4 font-semibold text-gray-700">Caso Real</td>
                  {selectedModelosData.map(modelo => (
                    <td key={modelo.id} className="p-4 text-sm text-gray-600">
                      {modelo.casoReal || '-'}
                    </td>
                  ))}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
