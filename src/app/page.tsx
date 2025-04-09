import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-light font-[family-name:var(--font-merriweather)] mb-8 text-center">Hermetic Principles</h1>
      <div className="flex flex-col items-center gap-4">
        <Link 
          href="/introduction" 
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
        >
          Begin Reading →
        </Link>
        <Link 
          href="/site-map" 
          className="px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-colors font-[family-name:var(--font-source-serif)]"
        >
          Site Map
        </Link>
      </div>
    </div>
  );
}
