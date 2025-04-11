import Link from 'next/link';

export default function Practicum() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-4">
          Hermetic Practicum
        </h1>
        <p className="text-lg font-[family-name:var(--font-source-serif)] text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore this practicum to deepen your understanding and application of the Hermetic
          Principles
        </p>

        {/* Class Supplies Section */}
        <section className="mb-16 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-4">
            Class Supplies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                For Individual Activities
              </h3>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-1">
                <li>Notebook or journal</li>
                <li>Pens and pencils</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                For Group Activities
              </h3>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-1">
                <li>Paper or poster board</li>
                <li>Markers, crayons, or colored pencils</li>
                <li>Scissors and glue</li>
                <li>Environmental Systems: Natural objects (leaves, rocks, etc.)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-World Applications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Real-World Applications
          </h2>

          {/* Technology & Innovation */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)]">
                Technology & Innovation
              </h3>
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Group Activity
              </span>
            </div>
            <p className="font-[family-name:var(--font-source-serif)] mb-4">
              Explore how the Hermetic Principles manifest in technological advancement and
              innovation.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-[family-name:var(--font-merriweather)] font-medium mb-2">
                Group Activity:
              </h4>
              <p className="font-[family-name:var(--font-source-serif)] mb-4">
                Research and present examples of how each principle appears in technological
                development. For example:
              </p>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                <li>How does the Principle of Correspondence apply to artificial intelligence?</li>
                <li>
                  How does the Principle of Mentalism influence our perception of virtual reality?
                </li>
                <li>
                  How does the Principle of Gender manifest in the relationship between hardware and
                  software?
                </li>
              </ul>
            </div>
          </div>

          {/* Environmental Systems */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)]">
                Environmental Systems
              </h3>
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Group Activity
              </span>
            </div>
            <p className="font-[family-name:var(--font-source-serif)] mb-4">
              Examine how the Hermetic Principles operate within natural and environmental systems.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-[family-name:var(--font-merriweather)] font-medium mb-2">
                Group Activity:
              </h4>
              <p className="font-[family-name:var(--font-source-serif)] mb-4">
                Create a visual representation showing how Hermetic Principles manifest in natural
                systems:
              </p>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                <li>Predator-prey relationships</li>
                <li>Seasonal cycles and patterns</li>
                <li>Plant reproduction and growth</li>
                <li>Animal communication and behavior</li>
                <li>Food chains and webs</li>
                <li>Water cycles and weather patterns</li>
                <li>Symbiotic relationships</li>
              </ul>
              <p className="font-[family-name:var(--font-source-serif)] mt-4">
                For each natural system, identify which Hermetic Principles are most evident and how
                they interact with each other.
              </p>
            </div>
          </div>

          {/* Media Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)]">
                Media Analysis
              </h3>
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Individual Activity
              </span>
            </div>
            <p className="font-[family-name:var(--font-source-serif)] mb-4">
              Analyze how Hermetic Principles are represented in film, literature, or art.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-[family-name:var(--font-merriweather)] font-medium mb-2">
                Project Guidelines:
              </h4>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                <li>Select a film, book, or artwork that resonates with you</li>
                <li>Identify at least three Hermetic Principles present in the work</li>
                <li>Analyze how these principles are represented and developed</li>
                <li>Create a presentation or essay explaining your findings</li>
                <li>Include specific examples and quotes from the source material</li>
              </ul>
            </div>
          </div>

          {/* Personal Transformation Journal */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)]">
                Personal Transformation Journal
              </h3>
              <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Individual Activity
              </span>
            </div>
            <p className="font-[family-name:var(--font-source-serif)] mb-4">
              Document your personal journey of applying Hermetic Principles to your life.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-[family-name:var(--font-merriweather)] font-medium mb-2">
                Project Guidelines:
              </h4>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                <li>Select one principle to focus on for a 2-week period</li>
                <li>Document daily observations of how this principle operates in your life</li>
                <li>Experiment with applying the principle to a specific challenge</li>
                <li>Record your insights, challenges, and transformations</li>
                <li>Create a final reflection on your experience and growth</li>
              </ul>
            </div>
          </div>

          {/* Hermetic Problem-Solving */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)]">
                Hermetic Problem-Solving
              </h3>
              <span className="ml-3 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Individual or Group Activity
              </span>
            </div>
            <p className="font-[family-name:var(--font-source-serif)] mb-4">
              Use the Hermetic Principles as a framework for analyzing and addressing challenges.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-[family-name:var(--font-merriweather)] font-medium mb-2">
                Framework Steps:
              </h4>
              <ol className="list-decimal pl-5 font-[family-name:var(--font-source-serif)] space-y-4">
                <li>
                  <strong>Mentalism:</strong> Examine your mental approach to the problem. How do
                  your thoughts and beliefs shape your experience of the challenge?
                </li>
                <li>
                  <strong>Correspondence:</strong> Look for patterns and parallels between this
                  situation and others you&apos;ve encountered. What insights can you apply?
                </li>
                <li>
                  <strong>Vibration:</strong> Identify the energy and frequency of the situation.
                  What needs to shift or change?
                </li>
                <li>
                  <strong>Polarity:</strong> Recognize the extremes and find the middle path. What
                  balance needs to be struck?
                </li>
                <li>
                  <strong>Rhythm:</strong> Acknowledge the natural cycles and timing. When is the
                  right moment for action?
                </li>
                <li>
                  <strong>Cause and Effect:</strong> Trace the origins of the problem and anticipate
                  potential outcomes of different approaches.
                </li>
                <li>
                  <strong>Gender:</strong> Consider both the active and receptive aspects of your
                  solution. What needs to be initiated and what needs to be allowed?
                </li>
              </ol>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-16">
          <Link
            href="/oracle"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            ← Back to Oracle
          </Link>
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
