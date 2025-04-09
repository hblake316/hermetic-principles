import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 max-w-4xl mx-auto">
      <div className="w-full aspect-[3/2] relative mb-8">
        <Image
          src="/images/hermes-trismegistus.png"
          alt="The Kybalion"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
        />
      </div>
      <p className="text-lg leading-relaxed text-center max-w-2xl font-[family-name:var(--font-source-serif)] mb-8">
        The Kybalion is a metaphysical text published in 1908 by the anonymous &ldquo;Three Initiates.&rdquo; 
        It presents the Seven Hermetic Principles, timeless spiritual laws attributed to Hermes Trismegistus, 
        a mythical figure said to be the origin of all wisdom traditions—combining Egyptian, Greek, and esoteric philosophy.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-[family-name:var(--font-source-serif)]"
        >
          ← Back to Home
        </Link>
        <Link 
          href="/principles" 
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
        >
          Explore the Principles →
        </Link>
      </div>
    </div>
  );
} 