import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Calidad de Software
            <span className="text-blue-600"> Moderno</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre los modelos, prácticas y estándares que garantizan la excelencia
            en el desarrollo de software de alta calidad.
          </p>
          <button
            onClick={() => scrollToSection('introduccion')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl
                     transform hover:-translate-y-1"
          >
            Comenzar a Explorar
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
