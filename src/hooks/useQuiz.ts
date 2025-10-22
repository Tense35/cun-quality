import { useState } from 'react';
import { triggerConfetti } from '../utils/confetti';

export function useQuiz() {
  const [quizAnswer, setQuizAnswer] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleQuizAnswer = (answer: boolean) => {
    setQuizAnswer(answer);
    setShowFeedback(true);

    if (answer === false) {
      triggerConfetti();
    }
  };

  const resetQuiz = () => {
    setQuizAnswer(null);
    setShowFeedback(false);
  };

  return {
    quizAnswer,
    showFeedback,
    handleQuizAnswer,
    resetQuiz
  };
}
