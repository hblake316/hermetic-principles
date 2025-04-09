'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the principles data
const principles = [
  {
    id: 1,
    name: "The Principle of Mentalism",
    description: "The All is Mind; the Universe is Mental. This principle embodies the truth that 'All is Mind.' It explains that the Universe is a mental creation of the All, and that all phenomena of life, matter, and energy are but varying modes of vibration of the Universal Mind."
  },
  {
    id: 2,
    name: "The Principle of Correspondence",
    description: "As above, so below; as below, so above. This principle embodies the truth that there is always a correspondence between the laws and phenomena of the various planes of being and life. The old Hermetic axiom ran: 'As above, so below; as below, so above.'"
  },
  {
    id: 3,
    name: "The Principle of Vibration",
    description: "Nothing rests; everything moves; everything vibrates. This principle embodies the truth that motion is manifest in everything in the Universe—that nothing is at rest, and that all things move, vibrate, and circle."
  },
  {
    id: 4,
    name: "The Principle of Polarity",
    description: "Everything is dual; everything has poles; everything has its pair of opposites. This principle embodies the truth that all manifested things have 'two sides,' 'two aspects,' 'two poles,' with varying degrees between the two extremes."
  },
  {
    id: 5,
    name: "The Principle of Rhythm",
    description: "Everything flows, out and in; everything has its tides; all things rise and fall. This principle embodies the truth that in everything there is manifested a measured motion, a to-and-fro movement, a flow inward and outward, a swing backward and forward."
  },
  {
    id: 6,
    name: "The Principle of Cause and Effect",
    description: "Every cause has its effect; every effect has its cause. This principle embodies the truth that there is a cause for every effect, and an effect for every cause, and that nothing happens by chance."
  },
  {
    id: 7,
    name: "The Principle of Gender",
    description: "Gender is in everything; everything has its Masculine and Feminine principles. This principle embodies the truth that there is gender manifested in everything—the Masculine and Feminine principles are ever at work."
  }
];

export default function Principles() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-12">
          The Seven Hermetic Principles
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <div 
              key={principle.id}
              className={`relative h-64 cursor-pointer perspective-1000`}
              onClick={() => toggleCard(principle.id)}
            >
              <div 
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  flippedCards.includes(principle.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center justify-center">
                  <h2 className="text-xl font-[family-name:var(--font-merriweather)] text-center">
                    {principle.name}
                  </h2>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-lg shadow-lg p-6 rotate-y-180 overflow-y-auto">
                  <p className="text-sm font-[family-name:var(--font-source-serif)]">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/introduction" 
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            Back to Introduction
          </Link>
        </div>
      </div>
    </div>
  );
} 