import { Playfair_Display, Lora, Cormorant_Garamond, Libre_Baskerville, Merriweather, Source_Serif_4 } from "next/font/google";

const playfair = Playfair_Display({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});
const lora = Lora({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});
const cormorant = Cormorant_Garamond({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"] 
});
const baskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});
const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"] 
});
const sourceSerif = Source_Serif_4({ 
  weight: ['400', '600'],
  subsets: ["latin"] 
});

export default function FontTest() {
  return (
    <div className="min-h-screen p-8 space-y-16">
      {/* Option 1: Classic Serif */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Option 1: Classic Serif</h2>
        <div className={`${playfair.className} space-y-4`}>
          <h1 className="text-4xl">Hermetic Principles</h1>
          <p className={`${lora.className} text-lg leading-relaxed max-w-2xl`}>
            The Kybalion is a metaphysical text published in 1908 by the anonymous &ldquo;Three Initiates.&rdquo; 
            It presents the Seven Hermetic Principles, timeless spiritual laws attributed to Hermes Trismegistus.
          </p>
        </div>
      </section>

      {/* Option 2: Modern Literary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Option 2: Modern Literary</h2>
        <div className={`${cormorant.className} space-y-4`}>
          <h1 className="text-4xl">Hermetic Principles</h1>
          <p className={`${baskerville.className} text-lg leading-relaxed max-w-2xl`}>
            The Kybalion is a metaphysical text published in 1908 by the anonymous &ldquo;Three Initiates.&rdquo; 
            It presents the Seven Hermetic Principles, timeless spiritual laws attributed to Hermes Trismegistus.
          </p>
        </div>
      </section>

      {/* Option 3: Contemporary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Option 3: Contemporary</h2>
        <div className={`${merriweather.className} space-y-4`}>
          <h1 className="text-4xl font-light">Hermetic Principles</h1>
          <p className={`${sourceSerif.className} text-lg leading-relaxed max-w-2xl`}>
            The Kybalion is a metaphysical text published in 1908 by the anonymous &ldquo;Three Initiates.&rdquo; 
            It presents the Seven Hermetic Principles, timeless spiritual laws attributed to Hermes Trismegistus.
          </p>
        </div>
      </section>
    </div>
  );
} 