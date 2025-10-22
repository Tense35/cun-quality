import { useState } from 'react';
import { CheckCircle, Lightbulb, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Modelo } from '../types';
import { ModelRecommender } from './ModelRecommender';
import { ModelComparator } from './ModelComparator';

interface ModelosSectionProps {
  modelos: Modelo[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export function ModelosSection({ modelos, activeTab, setActiveTab }: ModelosSectionProps) {
  const [viewMode, setViewMode] = useState<'explore' | 'recommend' | 'compare'>('explore');

  const handleRecommendationComplete = (modelId: string) => {
    setViewMode('explore');
    setActiveTab(modelId);
  };

  return (
    <section id="modelos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-700 font-semibold">Modelos de Calidad</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-900 mb-6">
            Marcos Conceptuales Que Transforman el Software
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Los modelos de calidad son como mapas que guían tu camino hacia la excelencia.
            ¿Estás listo para descubrir cuál se adapta mejor a tu equipo?
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setViewMode('explore')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold
                      transition-all duration-300 ${
              viewMode === 'explore'
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span>Explorar Modelos</span>
          </button>
          <button
            onClick={() => setViewMode('recommend')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold
                      transition-all duration-300 ${
              viewMode === 'recommend'
                ? 'bg-green-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            <Lightbulb className="w-5 h-5" />
            <span>Recomendador Inteligente</span>
          </button>
          <button
            onClick={() => setViewMode('compare')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold
                      transition-all duration-300 ${
              viewMode === 'compare'
                ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span>Comparador</span>
          </button>
        </div>

        {viewMode === 'recommend' && (
          <ModelRecommender onComplete={handleRecommendationComplete} />
        )}

        {viewMode === 'compare' && (
          <ModelComparator modelos={modelos} />
        )}

        {viewMode === 'explore' && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {modelos.map((modelo) => {
                const Icon = modelo.icon;
                return (
                  <button
                    key={modelo.id}
                    onClick={() => setActiveTab(modelo.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold
                              transition-all duration-300 ${
                      activeTab === modelo.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-white text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{modelo.nombre}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">
              {modelos.map((modelo) => {
                const Icon = modelo.icon;
                return (
                  activeTab === modelo.id && (
                    <div key={modelo.id} className="animate-fade-in">
                      <div className="flex items-start mb-6">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-xl mr-6">
                          <Icon className="w-12 h-12 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-gray-900 mb-2">
                            {modelo.nombre}
                          </h4>
                          <p className="text-lg text-blue-600 font-medium mb-3">
                            {modelo.descripcion}
                          </p>
                          {modelo.mejorPara && (
                            <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
                              <span className="text-green-700 text-sm font-semibold">
                                <Users className="w-4 h-4 inline mr-1" />
                                {modelo.mejorPara}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-800 text-lg leading-relaxed">
                          {modelo.detalles}
                        </p>
                      </div>

                      {modelo.analogia && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
                          <div className="flex items-start">
                            <Lightbulb className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-yellow-900 mb-2">Piénsalo Así:</h5>
                              <p className="text-yellow-800">{modelo.analogia}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {modelo.nivelMadurez && (
                        <div className="bg-blue-50 rounded-xl p-6 mb-6">
                          <h5 className="font-bold text-blue-900 mb-3">Estructura del Modelo:</h5>
                          <p className="text-blue-800">{modelo.nivelMadurez}</p>
                        </div>
                      )}

                      <div className="mb-6">
                        <h5 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                          Beneficios Clave
                        </h5>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {modelo.beneficios.map((beneficio, index) => (
                            <div
                              key={index}
                              className="flex items-start p-5 bg-gradient-to-r from-green-50 to-transparent
                                       rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-green-500"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">{beneficio}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {modelo.casoReal && (
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-6">
                          <h5 className="font-bold text-xl mb-3">Caso de Éxito Real:</h5>
                          <p className="text-lg">{modelo.casoReal}</p>
                        </div>
                      )}

                      {modelo.datoCurioso && (
                        <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6 border-2 border-orange-300">
                          <h5 className="font-bold text-orange-900 mb-3 text-xl flex items-center">
                            <Sparkles className="w-5 h-5 mr-2" />
                            ¿Sabías Que...?
                          </h5>
                          <p className="text-orange-900 text-lg">{modelo.datoCurioso}</p>
                        </div>
                      )}
                    </div>
                  )
                );
              })}
            </div>
          </>
        )}

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h4 className="text-3xl font-bold mb-4">
            ¿Confundido Sobre Cuál Elegir?
          </h4>
          <p className="text-xl mb-6">
            Usa nuestro recomendador inteligente para descubrir el modelo perfecto para tu organización
          </p>
          <button
            onClick={() => setViewMode('recommend')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg
                     hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl
                     transform hover:-translate-y-1"
          >
            Descubrir Mi Modelo Ideal
          </button>
        </div>
      </div>
    </section>
  );
}
