import { BookOpen, Users, GraduationCap, Settings, TrendingUp } from 'lucide-react';

interface Recomendacion {
  icon: typeof BookOpen;
  titulo: string;
  descripcion: string;
  beneficio: string;
}

const recomendaciones: Recomendacion[] = [
  {
    icon: BookOpen,
    titulo: 'Normas Internacionales',
    descripcion: 'Adoptar desde el inicio normas internacionales de calidad (ISO/IEC 25010, CMMI, IEEE).',
    beneficio: 'Base sólida y reconocida globalmente'
  },
  {
    icon: Users,
    titulo: 'Capacitación Continua',
    descripcion: 'Promover la capacitación continua en metodologías ágiles y buenas prácticas de desarrollo.',
    beneficio: 'Equipos actualizados y competitivos'
  },
  {
    icon: GraduationCap,
    titulo: 'Educación Práctica',
    descripcion: 'Incluir en los currículos educativos talleres de pruebas, control de versiones y documentación técnica.',
    beneficio: 'Profesionales preparados desde el inicio'
  },
  {
    icon: Settings,
    titulo: 'Herramientas Automatizadas',
    descripcion: 'Integrar herramientas automatizadas de calidad (linting, testing, CI/CD).',
    beneficio: 'Detección temprana y eficiencia'
  },
  {
    icon: TrendingUp,
    titulo: 'Mejora Continua',
    descripcion: 'Fomentar la cultura de la mejora continua y la retroalimentación entre equipos.',
    beneficio: 'Crecimiento sostenible y aprendizaje'
  }
];

export function CasosEstudioSection() {
  return (
    <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">Recomendaciones Clave</span>
          </div>
          <h3 className="text-5xl font-bold text-white mb-4">
            Construye una Cultura de Calidad Excepcional
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cinco pilares fundamentales para transformar tu organización y alcanzar la excelencia en desarrollo de software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recomendaciones.slice(0, 3).map((recomendacion, index) => {
            const Icon = recomendacion.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:-translate-y-2
                         transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl
                              flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {recomendacion.titulo}
                </h5>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {recomendacion.descripcion}
                </p>
                <div className="border-t border-blue-200 pt-4">
                  <div className="text-sm text-gray-500 mb-1">Beneficio Clave</div>
                  <div className="text-base font-semibold text-blue-600">
                    {recomendacion.beneficio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recomendaciones.slice(3).map((recomendacion, index) => {
            const Icon = recomendacion.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:-translate-y-2
                         transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl
                              flex items-center justify-center mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">
                  {recomendacion.titulo}
                </h5>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {recomendacion.descripcion}
                </p>
                <div className="border-t border-blue-200 pt-4">
                  <div className="text-sm text-gray-500 mb-1">Beneficio Clave</div>
                  <div className="text-base font-semibold text-blue-600">
                    {recomendacion.beneficio}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-white mb-4">
              ¿Por Qué Estas Recomendaciones Son Fundamentales?
            </h4>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Implementar estas prácticas desde el inicio no solo reduce defectos y costos,
              sino que crea equipos más eficientes, productos más confiables y organizaciones
              verdaderamente competitivas en el mercado global.
            </p>
            <div className="inline-block bg-white px-8 py-4 rounded-xl">
              <p className="text-blue-600 font-bold text-lg">
                El futuro del software de calidad comienza hoy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
