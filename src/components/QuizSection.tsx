import { CheckCircle } from 'lucide-react';

interface QuizSectionProps {
  showFeedback: boolean;
  quizAnswer: boolean | null;
  handleQuizAnswer: (answer: boolean) => void;
  resetQuiz: () => void;
}

export function QuizSection({ showFeedback, quizAnswer, handleQuizAnswer, resetQuiz }: QuizSectionProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border-2 border-blue-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 p-4 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 mb-4">
            Verifica tu Comprensión
          </h4>
          <p className="text-lg text-gray-600">
            Responde esta pregunta para reforzar lo aprendido
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="mb-8">
            <p className="text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
              ¿La calidad de software se refiere únicamente a la ausencia de errores en el código?
            </p>
          </div>

          {!showFeedback ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleQuizAnswer(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-8 rounded-xl
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                         text-xl"
              >
                No
              </button>
              <button
                onClick={() => handleQuizAnswer(true)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-6 px-8 rounded-xl
                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                         text-xl"
              >
                Sí
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              {quizAnswer === false ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-2 mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-green-900 mb-3">
                        ¡Correcto! Excelente comprensión
                      </h5>
                      <p className="text-lg text-green-800 mb-4 leading-relaxed">
                        La calidad de software va <strong>mucho más allá</strong> de simplemente evitar errores.
                        Incluye aspectos como:
                      </p>
                      <ul className="space-y-2 text-green-800 ml-4">
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span><strong>Usabilidad:</strong> Facilidad de uso para el usuario final</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span><strong>Rendimiento:</strong> Velocidad y eficiencia del sistema</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span><strong>Mantenibilidad:</strong> Facilidad para modificar y mejorar el código</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span><strong>Seguridad:</strong> Protección contra vulnerabilidades</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span><strong>Satisfacción:</strong> Valor y experiencia positiva para el usuario</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-red-500 rounded-full p-2 mr-4">
                      <span className="text-white text-2xl font-bold">✗</span>
                    </div>
                    <div>
                      <h5 className="text-2xl font-bold text-red-900 mb-3">
                        No exactamente. Revisemos el concepto
                      </h5>
                      <p className="text-lg text-red-800 mb-4 leading-relaxed">
                        Aunque evitar errores es importante, la calidad de software es un concepto
                        <strong> mucho más amplio</strong> que incluye:
                      </p>
                      <ul className="space-y-2 text-red-800 ml-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Experiencia del usuario y facilidad de uso</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Rendimiento y eficiencia del sistema</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Capacidad de adaptación a cambios futuros</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Seguridad y protección de datos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Valor entregado al cliente final</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={resetQuiz}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold
                         py-3 px-6 rounded-xl transition-colors"
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Recuerda: La calidad es un proceso continuo que involucra a todo el equipo
          </p>
        </div>
      </div>
    </div>
  );
}
