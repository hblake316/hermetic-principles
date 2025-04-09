import Image from "next/image";

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
      <p className="text-lg leading-relaxed text-center max-w-2xl font-[family-name:var(--font-source-serif)]">
        The Kybalion is a metaphysical text published in 1908 by the anonymous &ldquo;Three Initiates.&rdquo; 
        It presents the Seven Hermetic Principles, timeless spiritual laws attributed to Hermes Trismegistus, 
        a mythical figure said to be the origin of all wisdom traditions—combining Egyptian, Greek, and esoteric philosophy.
      </p>
    </div>
  );
} 