import { Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';

const facts = [
  {
    icon: Lightbulb,
    title: '¿Sabías que...?',
    fact: 'Los bugs de software le cuestan a la economía global más de $2.08 trillones al año',
    detail: 'Eso es más que el PIB de la mayoría de los países del mundo'
  },
  {
    icon: TrendingUp,
    title: 'Dato Sorprendente',
    fact: 'El 70% del presupuesto de software se gasta en mantenimiento',
    detail: 'Solo el 30% va al desarrollo inicial. La calidad desde el inicio ahorra millones'
  },
  {
    icon: Users,
    title: 'Estadística Impactante',
    fact: 'El 94% de las organizaciones consideran la calidad crítica para el éxito',
    detail: 'Pero solo el 34% tienen procesos de calidad maduros'
  },
  {
    icon: Zap,
    title: 'Hecho Curioso',
    fact: 'Arreglar un bug en producción cuesta 100x más que en desarrollo',
    detail: 'La inversión en calidad temprana tiene un ROI de 500%+'
  }
];

export function CuriosityFacts() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-700 font-semibold">Datos Curiosos</span>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Sabías Esto Sobre Calidad de Software?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Datos sorprendentes que demuestran por qué la calidad importa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl
                         transition-all duration-300 hover:-translate-y-2
                         border-t-4 border-blue-500"
              >
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-xl
                              flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-3">
                  {fact.title}
                </h4>
                <p className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {fact.fact}
                </p>
                <p className="text-sm text-gray-600">
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h4 className="text-2xl font-bold mb-4">
            La Calidad No es un Gasto, es una Inversión
          </h4>
          <p className="text-lg mb-6">
            Por cada dólar invertido en calidad temprana, ahorras entre $5 y $10 en costos futuros
          </p>
          <div className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold text-xl">
            ROI Promedio: 500%+
          </div>
        </div>
      </div>
    </div>
  );
}
