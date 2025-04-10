import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 py-2">
      <div className="max-w-6xl mx-auto px-4 flex justify-end gap-4">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 font-[family-name:var(--font-source-serif)]"
        >
          Home
        </Link>
        <Link
          href="/site-map"
          className="text-sm text-gray-600 hover:text-gray-900 font-[family-name:var(--font-source-serif)]"
        >
          Site Map
        </Link>
      </div>
    </nav>
  );
}
