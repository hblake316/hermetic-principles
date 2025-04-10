import Link from 'next/link';

export default function SiteMap() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-4">
          Site Map
        </h1>
        <p className="text-lg font-[family-name:var(--font-source-serif)] text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Navigate directly to any section of the Hermetic Principles website
        </p>

        {/* Main Pages Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">Home</h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Begin your journey into the Hermetic Principles
                </p>
              </div>
            </Link>
            <Link href="/introduction" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Introduction
                </h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Learn about the origins and significance of the Kybalion
                </p>
              </div>
            </Link>
            <Link href="/principles" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  The Seven Principles
                </h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Explore the fundamental principles of Hermetic philosophy
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Interactive Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/card-game" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Hermetic Oracle
                </h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Draw cards and receive guidance based on the Hermetic Principles
                </p>
              </div>
            </Link>
            <Link href="/practicum" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Hermetic Practicum
                </h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Engage with practical applications and exercises
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Teacher Resources Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Teacher Resources
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <Link href="/teacher-key" className="block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Teacher&apos;s Key
                </h3>
                <p className="font-[family-name:var(--font-source-serif)] text-gray-600">
                  Access teaching guides and suggested answers for classroom activities
                </p>
              </div>
            </Link>
          </div>
        </section>

        <div className="flex justify-center mt-16">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
