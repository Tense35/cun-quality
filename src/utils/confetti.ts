import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#2563eb', '#3b82f6', '#60a5fa']
    });
  }, 200);

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#2563eb', '#3b82f6', '#60a5fa']
    });
  }, 400);
};
