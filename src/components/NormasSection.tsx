import { ChevronDown } from 'lucide-react';
import { Norma } from '../types';

interface NormasSectionProps {
  normas: Norma[];
  openAccordion: string | null;
  setOpenAccordion: (norma: string | null) => void;
}

export function NormasSection({ normas, openAccordion, setOpenAccordion }: NormasSectionProps) {
  return (
    <section id="normas" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Estándares y Prácticas por Área
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada área del desarrollo de software tiene sus propios estándares de excelencia
          </p>
        </div>

        <div className="space-y-4">
          {normas.map((norma, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg
                       transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === norma.norma ? null : norma.norma)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white
                         hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-lg">
                    <span className="text-blue-600 font-bold">{norma.norma}</span>
                  </div>
                  <div className="text-left">
                    <h5 className="text-xl font-bold text-gray-900">
                      Área: {norma.industria}
                    </h5>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openAccordion === norma.norma ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openAccordion === norma.norma && (
                <div className="px-6 py-5 bg-gray-50 animate-fade-in">
                  <p className="text-gray-700 mb-4">{norma.descripcion}</p>
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">
                      Aplicaciones Principales:
                    </h6>
                    <ul className="space-y-2">
                      {norma.aplicaciones.map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
