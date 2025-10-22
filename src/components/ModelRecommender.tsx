import { useState } from 'react';
import { CheckCircle, ArrowRight, Award } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    models: string[];
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: '¿Cuál es el tamaño de tu organización?',
    options: [
      { text: 'Pequeña (1-20 personas)', models: ['mccall', 'boehm'] },
      { text: 'Mediana (21-100 personas)', models: ['spice', 'iso25010'] },
      { text: 'Grande (100+ personas)', models: ['cmmi', 'iso25010'] },
      { text: 'Startup ágil', models: ['devops', 'iso25010'] }
    ]
  },
  {
    id: 2,
    question: '¿Cuál es tu prioridad principal?',
    options: [
      { text: 'Mejorar procesos internos', models: ['cmmi', 'spice'] },
      { text: 'Entregar valor rápido al usuario', models: ['devops', 'mccall'] },
      { text: 'Cumplir estándares internacionales', models: ['iso25010', 'spice'] },
      { text: 'Métricas específicas y medibles', models: ['boehm', 'iso25010'] }
    ]
  },
  {
    id: 3,
    question: '¿Qué nivel de madurez tiene tu organización?',
    options: [
      { text: 'Estamos empezando, procesos informales', models: ['mccall', 'devops'] },
      { text: 'Tenemos algunos procesos definidos', models: ['spice', 'boehm'] },
      { text: 'Procesos bien establecidos', models: ['cmmi', 'iso25010'] },
      { text: 'Buscamos optimización continua', models: ['cmmi', 'devops'] }
    ]
  }
];

const modelResults = {
  cmmi: {
    name: 'CMMI',
    description: 'Perfecto para organizaciones grandes que buscan madurez sistemática',
    match: 0
  },
  spice: {
    name: 'SPICE',
    description: 'Ideal para mejora flexible y adaptable a tu ritmo',
    match: 0
  },
  mccall: {
    name: 'McCall',
    description: 'Excelente para proyectos centrados en el usuario',
    match: 0
  },
  boehm: {
    name: 'Boehm',
    description: 'Perfecto para equipos que necesitan métricas claras',
    match: 0
  },
  iso25010: {
    name: 'ISO 25010',
    description: 'El estándar moderno más completo y reconocido',
    match: 0
  },
  devops: {
    name: 'DevOps',
    description: 'Ideal para entregas rápidas y continuas',
    match: 0
  }
};

interface ModelRecommenderProps {
  onComplete: (modelId: string) => void;
}

export function ModelRecommender({ onComplete }: ModelRecommenderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<string>('');

  const handleAnswer = (models: string[]) => {
    const newAnswers = [...answers, models];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRecommendation(newAnswers);
    }
  };

  const calculateRecommendation = (allAnswers: string[][]) => {
    const scores: { [key: string]: number } = {
      cmmi: 0,
      spice: 0,
      mccall: 0,
      boehm: 0,
      iso25010: 0,
      devops: 0
    };

    allAnswers.forEach(answer => {
      answer.forEach(model => {
        scores[model] = (scores[model] || 0) + 1;
      });
    });

    const topModel = Object.entries(scores).reduce((a, b) =>
      b[1] > a[1] ? b : a
    )[0];

    setRecommendation(topModel);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendation('');
  };

  if (showResult) {
    const result = modelResults[recommendation as keyof typeof modelResults];
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-block bg-green-100 p-4 rounded-full mb-4">
            <Award className="w-12 h-12 text-green-600" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 mb-4">
            Tu Modelo Recomendado
          </h4>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-6 mb-6">
            <h5 className="text-4xl font-bold mb-2">{result.name}</h5>
            <p className="text-xl">{result.description}</p>
          </div>
          <p className="text-gray-600 mb-8">
            Basado en tus respuestas, este modelo se adapta mejor a tus necesidades actuales.
            Explora los detalles completos para aprender más.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => onComplete(recommendation)}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold
                       hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1"
            >
              Ver Detalles del Modelo
            </button>
            <button
              onClick={resetQuiz}
              className="px-8 py-4 bg-gray-200 text-gray-800 rounded-lg font-semibold
                       hover:bg-gray-300 transition-colors"
            >
              Reiniciar Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-600">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-semibold text-blue-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <h4 className="text-2xl font-bold text-gray-900 mb-6">
        {question.question}
      </h4>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.models)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-transparent
                     rounded-xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-lg
                     transition-all duration-300 group"
          >
            <span className="text-lg font-medium text-gray-900 text-left">
              {option.text}
            </span>
            <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
          </button>
        ))}
      </div>

      {currentQuestion > 0 && (
        <button
          onClick={resetQuiz}
          className="mt-6 text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Reiniciar
        </button>
      )}
    </div>
  );
}
