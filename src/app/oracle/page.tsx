'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { principles } from '../utils/principles';

export default function CardGame() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomPrinciple, setRandomPrinciple] = useState(principles[0]);

  const flipCard = () => {
    if (!isFlipped) {
      // Generate a random principle when flipping to the front
      const randomIndex = Math.floor(Math.random() * principles.length);
      setRandomPrinciple(principles[randomIndex]);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-4">
          Hermetic Oracle
        </h1>
        <p className="text-lg font-[family-name:var(--font-source-serif)] text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Draw a card to reveal a Hermetic Principle. Reflect on how this principle manifests in
          your life and experiences.
        </p>

        <div className="flex flex-col items-center">
          <div
            className={`relative w-64 h-96 cursor-pointer perspective-1000 mb-8`}
            onClick={flipCard}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card (card back image) */}
              <div className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/card-back.png"
                  alt="Card Back"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Back of card (principle) */}
              <div className="absolute w-full h-full backface-hidden bg-white border border-gray-200 rounded-lg shadow-lg p-6 rotate-y-180 overflow-y-auto">
                <div className="flex flex-col h-full">
                  <h2 className="text-xl font-[family-name:var(--font-merriweather)] text-center text-blue-900 mb-4">
                    {randomPrinciple.name}
                  </h2>
                  <p className="text-base font-[family-name:var(--font-source-serif)] text-blue-900 text-center font-medium mb-4">
                    &ldquo;{randomPrinciple.description.split('.')[0]}.&rdquo;
                  </p>
                  <p className="text-sm font-[family-name:var(--font-source-serif)] text-blue-900">
                    {randomPrinciple.description.split('.').slice(1).join('.').trim()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <button
              onClick={flipCard}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
            >
              {isFlipped ? 'Flip Back' : 'Flip Card'}
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-16">
          <Link
            href="/principles"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            ← Back to Principles
          </Link>
          <div className="flex gap-4">
            <Link
              href="/practicum"
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
            >
              Hermetic Practicum →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
