import { Lightbulb, Users, Zap, CheckCircle } from 'lucide-react';
import { QuizSection } from './QuizSection';

interface IntroductionSectionProps {
  showFeedback: boolean;
  quizAnswer: boolean | null;
  handleQuizAnswer: (answer: boolean) => void;
  resetQuiz: () => void;
}

export function IntroductionSection({ showFeedback, quizAnswer, handleQuizAnswer, resetQuiz }: IntroductionSectionProps) {
  return (
    <section id="introduccion" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6">
            <span className="text-blue-700 font-semibold">Fundamentos de Calidad</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-900 mb-6">
            ¿Qué es la Calidad de Software?
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La calidad de software es el <span className="text-blue-600 font-semibold">conjunto de características</span> que
            garantizan que un producto digital cumpla con las necesidades del usuario, sea confiable,
            fácil de mantener y funcione correctamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100
                        hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Más que Ausencia de Errores</h4>
            <p className="text-gray-600 leading-relaxed">
              La calidad no es solo evitar bugs, sino crear <strong>valor</strong>,
              optimizar el <strong>rendimiento</strong> y garantizar la <strong>satisfacción del usuario</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100
                        hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Para Estudiantes</h4>
            <p className="text-gray-600 leading-relaxed">
              Dominar la calidad de software es <strong>fundamental</strong> para tu carrera.
              Te diferencia como desarrollador y te prepara para proyectos reales.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border-2 border-purple-100
                        hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Para Empresas</h4>
            <p className="text-gray-600 leading-relaxed">
              <strong>Reduce costos</strong> hasta un 40%, previene fallas críticas y
              aumenta la satisfacción del cliente significativamente.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 mb-16">
          <h4 className="text-3xl font-bold text-white text-center mb-12">
            El Impacto de la Calidad de Software
          </h4>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-3">80%</div>
              <div className="text-blue-100 text-lg">Reducción de bugs en producción</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-3">3x</div>
              <div className="text-blue-100 text-lg">Mayor velocidad de entrega</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-3">40%</div>
              <div className="text-blue-100 text-lg">Ahorro en costos de mantenimiento</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-3">95%</div>
              <div className="text-blue-100 text-lg">Satisfacción del cliente</div>
            </div>
          </div>
        </div>

        <QuizSection
          showFeedback={showFeedback}
          quizAnswer={quizAnswer}
          handleQuizAnswer={handleQuizAnswer}
          resetQuiz={resetQuiz}
        />

        <div className="mt-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-12 text-white">
          <h4 className="text-3xl font-bold mb-8 text-center">Principios Fundamentales de la Calidad</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Código limpio y mantenible</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Testing automatizado exhaustivo</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Integración y despliegue continuo</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Revisión de código entre pares</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Monitoreo y observabilidad</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
              <span className="text-lg">Seguridad desde el diseño</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
