import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface CriterioEvaluacion {
  nombre: string;
  puntuacion: number;
  justificacion: string;
}

const criterios: CriterioEvaluacion[] = [
  {
    nombre: 'Diseño Visual y Estética',
    puntuacion: 4.2,
    justificacion: 'Interfaz moderna con paleta de colores coherente. Tipografía legible y jerarquía visual clara. Elementos gráficos bien integrados.'
  },
  {
    nombre: 'Navegación e Intuitividad',
    puntuacion: 3.6,
    justificacion: 'Menú principal accesible, aunque algunas funciones secundarias requieren más clics de los necesarios. Breadcrumbs implementados correctamente.'
  },
  {
    nombre: 'Responsividad y Adaptabilidad',
    puntuacion: 4.5,
    justificacion: 'Excelente adaptación a diferentes dispositivos. Transiciones suaves entre breakpoints. Funcionalidad completa en móviles.'
  },
  {
    nombre: 'Consistencia de Elementos',
    puntuacion: 4.4,
    justificacion: 'Botones, formularios y componentes mantienen estilo uniforme. Iconografía coherente en toda la plataforma.'
  },
  {
    nombre: 'Velocidad de Carga de UI',
    puntuacion: 3.4,
    justificacion: 'Tiempo de carga inicial aceptable, pero algunos elementos gráficos pesados afectan la percepción de velocidad.'
  },
  {
    nombre: 'Accesibilidad',
    puntuacion: 3.7,
    justificacion: 'Contraste adecuado en la mayoría de elementos. Falta implementación completa de navegación por teclado en algunos módulos.'
  },
  {
    nombre: 'Feedback Visual',
    puntuacion: 4.1,
    justificacion: 'Estados de hover, loading y error bien definidos. Animaciones sutiles que mejoran la experiencia sin distraer.'
  }
];

function getColorByScore(score: number): string {
  if (score >= 4.5) return 'text-green-600 bg-green-100';
  if (score >= 3.5) return 'text-blue-600 bg-blue-100';
  if (score >= 2) return 'text-yellow-600 bg-yellow-100';
  return 'text-red-600 bg-red-100';
}

function getBarColorByScore(score: number): string {
  if (score >= 4.5) return 'bg-green-500';
  if (score >= 3.5) return 'bg-blue-500';
  if (score >= 2) return 'bg-yellow-500';
  return 'bg-red-500';
}

function getIconByScore(score: number) {
  if (score >= 3.5) return CheckCircle;
  return AlertCircle;
}

export function EvaluacionEjemplo() {
  const promedioGeneral = (criterios.reduce((acc, c) => acc + c.puntuacion, 0) / criterios.length).toFixed(1);

  return (
    <section id="evaluacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-700 font-semibold">Caso Práctico</span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Muestra de Evaluación a una Plataforma
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A continuación, presentamos un ejemplo práctico de cómo aplicamos nuestra metodología
            de evaluación de calidad de software, utilizando como caso de estudio la plataforma ficticia
            <span className="font-bold text-blue-600"> "Scrampi"</span>.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Metodología de Evaluación de Calidad de Software
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Nuestra evaluación se centra en aspectos críticos de la experiencia de usuario y
                calidad técnica del software, priorizando la interfaz de usuario (UI) y su impacto
                en la usabilidad general. Utilizamos un sistema de puntuación de <span className="font-bold">0 a 5 puntos</span> para
                cada criterio, donde <span className="font-bold text-green-600">5 representa la excelencia</span> y <span className="font-bold text-red-600">0 indica deficiencias
                significativas</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">0-1</div>
              <div className="text-sm text-gray-600">Deficiente</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">2-3</div>
              <div className="text-sm text-gray-600">Regular</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">3.5-4</div>
              <div className="text-sm text-gray-600">Bueno</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">4.5-5</div>
              <div className="text-sm text-gray-600">Excelente</div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h4 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Criterios de Evaluación UI - Plataforma Scrampi
          </h4>

          <div className="space-y-6">
            {criterios.map((criterio, index) => {
              const Icon = getIconByScore(criterio.puntuacion);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3 flex-1">
                        <Icon className={`w-6 h-6 mt-1 flex-shrink-0 ${
                          criterio.puntuacion >= 3.5 ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-gray-900 mb-2">
                            {criterio.nombre}
                          </h5>
                          <p className="text-gray-600 leading-relaxed">
                            {criterio.justificacion}
                          </p>
                        </div>
                      </div>
                      <div className={`ml-4 px-4 py-2 rounded-full font-bold text-lg flex-shrink-0 ${
                        getColorByScore(criterio.puntuacion)
                      }`}>
                        {criterio.puntuacion.toFixed(1)}/5
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          getBarColorByScore(criterio.puntuacion)
                        }`}
                        style={{ width: `${criterio.puntuacion * 20}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-10 text-white text-center shadow-2xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">Resultado Final</span>
          </div>
          <h4 className="text-4xl font-bold mb-4">
            Puntuación General
          </h4>
          <div className="text-7xl font-bold mb-6">
            {promedioGeneral}/5
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h5 className="text-2xl font-bold mb-3">Conclusión</h5>
              <p className="text-lg text-blue-100 leading-relaxed">
                Scrampi presenta una interfaz sólida con fortalezas notables en responsividad y
                consistencia visual. Las áreas de mejora se centran en optimización de rendimiento
                y accesibilidad completa.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h6 className="font-bold mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Fortalezas Principales
                </h6>
                <ul className="text-sm text-blue-100 space-y-1 ml-7">
                  <li>Excelente responsividad</li>
                  <li>Consistencia visual notable</li>
                  <li>Diseño moderno y atractivo</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <h6 className="font-bold mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Áreas de Mejora
                </h6>
                <ul className="text-sm text-blue-100 space-y-1 ml-7">
                  <li>Optimización de velocidad</li>
                  <li>Accesibilidad completa</li>
                  <li>Simplificación de navegación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
