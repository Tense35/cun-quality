import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ModelosSection } from './components/ModelosSection';
import { CuriosityFacts } from './components/CuriosityFacts';
import { NormasSection } from './components/NormasSection';
import { CasosEstudioSection } from './components/CasosEstudioSection';
import { EvaluacionEjemplo } from './components/EvaluacionEjemplo';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';
import { useScrollDetection } from './hooks/useScrollDetection';
import { useQuiz } from './hooks/useQuiz';
import { scrollToSection } from './utils/navigation';
import { modelos } from './data/modelos';
import { normas } from './data/normas';

function App() {
  const [activeTab, setActiveTab] = useState('cmmi');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const isScrolled = useScrollDetection(50);
  const { quizAnswer, showFeedback, handleQuizAnswer, resetQuiz } = useQuiz();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation isScrolled={isScrolled} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <IntroductionSection
        showFeedback={showFeedback}
        quizAnswer={quizAnswer}
        handleQuizAnswer={handleQuizAnswer}
        resetQuiz={resetQuiz}
      />

      <ModelosSection
        modelos={modelos}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CuriosityFacts />

      <NormasSection
        normas={normas}
        openAccordion={openAccordion}
        setOpenAccordion={setOpenAccordion}
      />

      <CasosEstudioSection />

      <EvaluacionEjemplo />

      <VideoSection />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
