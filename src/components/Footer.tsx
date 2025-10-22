import { Award } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-8 h-8 text-blue-400" />
              <h5 className="text-xl font-bold">Modelos de Calidad</h5>
            </div>
            <p className="text-gray-400">
              Tu guía completa para desarrollar software de alta calidad
            </p>
          </div>
          <div>
            <h6 className="text-lg font-bold mb-4">Enlaces Rápidos</h6>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('introduccion')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Introducción
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('modelos')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Modelos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('normas')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Normas
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Creado por{' '}
            <a
              href="https://www.linkedin.com/in/daniel-salazar-giraldo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors underline"
            >
              Daniel Salazar
            </a>.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
