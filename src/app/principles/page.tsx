'use client';

import { useState } from 'react';
import Link from 'next/link';
import { principles } from '../utils/principles';

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
                {/* Back of card */}
                <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center justify-center backface-hidden">
                  <h2 className="text-xl font-[family-name:var(--font-merriweather)] text-center text-blue-900">
                    {principle.name}
                  </h2>
                </div>

                {/* Front of card */}
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
              href="/oracle"
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
