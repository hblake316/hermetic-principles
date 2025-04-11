'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define the principles data
const principles = [
  {
    id: 1,
    name: 'The Principle of Mentalism',
    description:
      'The ALL is Mind; the Universe is Mental. All phenomena of life, matter, and energy are but varying modes of vibration of the Universal Mind. By understanding this, we know that we can use our mental faculties to draw creations into the physical world.',
    keywords: ['INFINITE', 'ETERNAL', 'IMMUTABLE'],
  },
  {
    id: 2,
    name: 'The Principle of Correspondence',
    description:
      'As above, so below; as below, so above. There is always a correspondence between the laws and phenomena of the various planes. By observing the world around us and within us, we are able to understand much that would be unknowable to us and we can reason intelligently from the Known to the Unknown.',
    keywords: [],
  },
  {
    id: 3,
    name: 'The Principle of Vibration',
    description:
      'Nothing rests; everything moves; everything vibrates. Motion is manifest in everything in the Universe—that nothing is at rest, and that all things move, vibrate, and circle. To change your mood or mental state - change your vibration.',
    keywords: ['WILL + ATTENTION = VIBRATION'],
  },
  {
    id: 4,
    name: 'The Principle of Polarity',
    description:
      "Everything is dual; everything has poles; everything has its pair of opposites. All manifested things have 'two sides,' 'two aspects,' 'two poles,' with varying degrees between the two extremes. To destroy an undesirable mental state, concentrate upon the opposite pole to that which you wish to suppress.",
    keywords: [],
  },
  {
    id: 5,
    name: 'The Principle of Rhythm',
    description:
      'Everything flows, out and in; everything has its tides; all things rise and fall. The pendulum-swing manifests in everything; the measure of the swing to the right, is the measure of the swing to the left; rhythm compensates.',
    keywords: ['LAW OF NEUTRALIZATION'],
  },
  {
    id: 6,
    name: 'The Principle of Cause and Effect',
    description:
      'Every cause has its effect; every effect has its cause. This principle embodies the truth that there is a cause for every effect, and an effect for every cause, and that nothing happens by chance.',
    keywords: ['PLAY THE GAME OF LIFE'],
  },
  {
    id: 7,
    name: 'The Principle of Gender',
    description:
      'Gender is in everything; everything has its Masculine and Feminine Principles; Gender manifests on all planes. There is gender manifested in everything — the Masculine and Feminine principles are ever at work.',
    keywords: ['NEGATIVE + POSITIVE'],
  },
];

export default function Principles() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-16">
          The Seven Hermetic Principles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map(principle => (
            <div
              key={principle.id}
              className="relative cursor-pointer perspective-1000 h-[500px] md:h-auto md:min-h-[300px]"
              onClick={() => toggleCard(principle.id)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                  flippedCards.includes(principle.id) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center justify-center backface-hidden">
                  <h2 className="text-xl font-[family-name:var(--font-merriweather)] text-center text-blue-900">
                    {principle.name}
                  </h2>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg p-6 rotate-y-180 backface-hidden overflow-y-auto">
                  <div className="flex flex-col h-full">
                    <div className="space-y-4">
                      <p className="text-base font-[family-name:var(--font-source-serif)] text-blue-900 text-center font-medium">
                        &ldquo;{principle.description.split('.')[0]}.&rdquo;
                      </p>
                      <p className="text-sm font-[family-name:var(--font-source-serif)] text-blue-900">
                        {principle.description.split('.').slice(1).join('.').trim()}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {principle.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-16">
          <Link
            href="/introduction"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            ← Back to Introduction
          </Link>
          <div className="flex gap-4">
            <Link
              href="/card-game"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
            >
              Try the Oracle →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
