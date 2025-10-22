import { Award } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
}

export function Navigation({ isScrolled, scrollToSection }: NavigationProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-8 h-8 text-blue-600" />
            <h1 className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-blue-900'
            }`}>
              Modelos de Calidad
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('introduccion')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Introducción
            </button>
            <button
              onClick={() => scrollToSection('modelos')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Modelos
            </button>
            <button
              onClick={() => scrollToSection('normas')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Normas
            </button>
            <button
              onClick={() => scrollToSection('casos')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Recomendaciones
            </button>
            <button
              onClick={() => scrollToSection('evaluacion')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Evaluación
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
