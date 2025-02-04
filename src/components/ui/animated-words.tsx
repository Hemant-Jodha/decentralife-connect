import { useEffect, useState } from "react";

const words = [
  "Innovation",
  "Intelligence",
  "Discovery",
  "Knowledge",
  "Creativity",
  "Evolution",
  "Progress",
];

export function AnimatedWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[200px] bg-gray-900 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      <div 
        key={currentIndex}
        className="text-4xl md:text-6xl font-bold text-white animate-scale-in"
        style={{
          textShadow: "0 0 10px rgba(79, 70, 229, 0.5)",
        }}
      >
        {words[currentIndex]}
      </div>
    </div>
  </div>
  );
}