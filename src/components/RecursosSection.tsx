import { BookOpen, Target, TrendingUp, ExternalLink } from 'lucide-react';

interface RecursosSectionProps {
  scrollToSection: (id: string) => void;
}

export function RecursosSection({ scrollToSection }: RecursosSectionProps) {
  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Recursos Adicionales
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Amplía tus conocimientos con estos recursos especializados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100
                        hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              ISO/IEC 25010
            </h5>
            <p className="text-gray-600 mb-4">
              Estándar internacional para calidad de productos de software
            </p>
            <a
              href="https://www.iso.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Ver estándar
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100
                        hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              Clean Code
            </h5>
            <p className="text-gray-600 mb-4">
              Recursos y libros sobre código limpio y mejores prácticas de desarrollo
            </p>
            <a
              href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Ver recursos
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100
                        hover:shadow-lg transition-shadow">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h5 className="text-xl font-bold text-gray-900 mb-2">
              OWASP Foundation
            </h5>
            <p className="text-gray-600 mb-4">
              Recursos sobre seguridad en aplicaciones web y mejores prácticas
            </p>
            <a
              href="https://owasp.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visitar OWASP
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-2xl font-bold mb-2">
                ¿Listo para mejorar la calidad de tu software?
              </h4>
              <p className="text-blue-100">
                Comienza a aplicar estas prácticas en tus proyectos hoy mismo
              </p>
            </div>
            <button
              onClick={() => scrollToSection('modelos')}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold
                       hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explorar Modelos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
