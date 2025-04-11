import Link from 'next/link';

export default function TeacherKey() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 font-[family-name:var(--font-source-serif)]">
            <strong>Note:</strong> This page is intended for teachers and facilitators only. It
            contains suggested answers and guidance for the teaching resources.
          </p>
        </div>

        <h1 className="text-4xl font-light font-[family-name:var(--font-merriweather)] text-center mb-4">
          Teacher&apos;s Key
        </h1>
        <p className="text-lg font-[family-name:var(--font-source-serif)] text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Guidance and suggested answers for the teaching resources
        </p>

        {/* Technology & Innovation Key */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Technology & Innovation - Suggested Principles
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Principle of Correspondence in Artificial Intelligence
                </h3>
                <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                  <li>Neural networks mirroring human neural structures</li>
                  <li>
                    Pattern recognition reflecting the &quot;as above, so below&quot; principle
                  </li>
                  <li>Learning algorithms paralleling human learning processes</li>
                  <li>AI decision-making processes corresponding to human thought patterns</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Principle of Mentalism in Virtual Reality
                </h3>
                <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                  <li>VR as a manifestation of mental constructs</li>
                  <li>Consciousness shaping virtual experiences</li>
                  <li>Mental state affecting perception of virtual spaces</li>
                  <li>The role of &quot;all is mind&quot; in digital environments</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-2">
                  Principle of Gender in Hardware and Software
                </h3>
                <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                  <li>
                    Hardware (masculine/active) and software (feminine/receptive) complementarity
                  </li>
                  <li>Physical components providing foundation for digital instructions</li>
                  <li>Creative tension between tangible and intangible elements</li>
                  <li>Balance between active processing and receptive data storage</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-4">
                Teaching Guidance
              </h3>
              <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
                <li>
                  Encourage students to explore real-world examples of these principles in
                  technology
                </li>
                <li>Guide discussions about how ancient wisdom applies to modern innovations</li>
                <li>
                  Help students recognize the interconnectedness of different technological systems
                </li>
                <li>
                  Facilitate exploration of how these principles manifest in students&apos; daily
                  technology use
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Environmental Systems Key */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Environmental Systems - Suggested Principles
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-4">
              Forest Ecosystems
            </h3>
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Rhythm:</strong> Seasonal cycles, day/night patterns, growth cycles
              </li>
              <li>
                <strong>Gender:</strong> Plant reproduction, animal mating behaviors
              </li>
              <li>
                <strong>Polarity:</strong> Predator-prey relationships, light/shadow dynamics
              </li>
              <li>
                <strong>Correspondence:</strong> Similar structures at different scales (branches,
                roots, mycelium)
              </li>
              <li>
                <strong>Cause and Effect:</strong> Food webs, decomposition cycles
              </li>
              <li>
                <strong>Vibration:</strong> Sound communication between animals, wind through trees
              </li>
              <li>
                <strong>Mentalism:</strong> Animal behavior patterns, plant responses to environment
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-4">
              Ocean Ecosystems
            </h3>
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Rhythm:</strong> Tides, migration patterns, breeding cycles
              </li>
              <li>
                <strong>Gender:</strong> Fish reproduction, coral spawning
              </li>
              <li>
                <strong>Polarity:</strong> Deep/shallow zones, predator-prey relationships
              </li>
              <li>
                <strong>Correspondence:</strong> Similar body shapes across different species
              </li>
              <li>
                <strong>Cause and Effect:</strong> Ocean currents, food chains
              </li>
              <li>
                <strong>Vibration:</strong> Whale songs, fish communication
              </li>
              <li>
                <strong>Mentalism:</strong> Schooling behavior, migration instincts
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-4">
              Desert Ecosystems
            </h3>
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Rhythm:</strong> Day/night temperature cycles, rare rainfall events
              </li>
              <li>
                <strong>Gender:</strong> Plant reproduction adaptations, animal mating strategies
              </li>
              <li>
                <strong>Polarity:</strong> Extreme temperature variations, oasis/desert contrast
              </li>
              <li>
                <strong>Correspondence:</strong> Similar adaptations across different species
              </li>
              <li>
                <strong>Cause and Effect:</strong> Water availability determining life patterns
              </li>
              <li>
                <strong>Vibration:</strong> Wind patterns, sand dune formation
              </li>
              <li>
                <strong>Mentalism:</strong> Animal survival instincts, plant dormancy responses
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-[family-name:var(--font-merriweather)] mb-4">
              Teaching Guidance
            </h3>
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                Encourage students to discover principles themselves rather than providing answers
              </li>
              <li>
                Use these suggestions only if students are stuck or to validate their discoveries
              </li>
              <li>
                Consider having students focus on one ecosystem but explore all principles within it
              </li>
              <li>For advanced groups, challenge them to find principles not listed here</li>
              <li>
                Connect observations to broader applications of Hermetic Principles in daily life
              </li>
            </ul>
          </div>
        </section>

        {/* Media Analysis Guidance */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Media Analysis - Suggested Works
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Films:</strong> The Matrix (Mentalism), Inception (Correspondence),
                Interstellar (Rhythm)
              </li>
              <li>
                <strong>Books:</strong> The Alchemist (Correspondence), The Secret (Mentalism), The
                Celestine Prophecy (Vibration)
              </li>
              <li>
                <strong>Art:</strong> Sacred geometry (Correspondence), mandalas (Rhythm), yin-yang
                symbols (Polarity)
              </li>
              <li>
                <strong>Assessment Criteria:</strong> Depth of analysis, connection to principles,
                personal reflection
              </li>
            </ul>
          </div>
        </section>

        {/* Personal Transformation Journal Guidance */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Personal Transformation Journal - Assessment Guidance
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Depth of Reflection:</strong> Look for genuine self-examination rather than
                surface observations
              </li>
              <li>
                <strong>Application of Principles:</strong> Assess how well students connect
                principles to daily experiences
              </li>
              <li>
                <strong>Consistency:</strong> Evaluate regular journaling versus sporadic entries
              </li>
              <li>
                <strong>Growth:</strong> Look for evidence of personal development and new insights
              </li>
              <li>
                <strong>Integration:</strong> Assess how students connect principles to broader life
                contexts
              </li>
            </ul>
          </div>
        </section>

        {/* Hermetic Problem-Solving Guidance */}
        <section className="mb-16">
          <h2 className="text-2xl font-[family-name:var(--font-merriweather)] text-blue-900 mb-6">
            Hermetic Problem-Solving - Teaching Guidance
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
            <ul className="list-disc pl-5 font-[family-name:var(--font-source-serif)] space-y-2">
              <li>
                <strong>Mentalism:</strong> Guide students to recognize how their mindset and
                beliefs influence their approach to problems
              </li>
              <li>
                <strong>Correspondence:</strong> Help students identify patterns and similarities
                between different types of problems
              </li>
              <li>
                <strong>Vibration:</strong> Teach students to recognize the energy and momentum in
                problem-solving processes
              </li>
              <li>
                <strong>Polarity:</strong> Encourage students to consider opposing viewpoints and
                potential solutions
              </li>
              <li>
                <strong>Rhythm:</strong> Guide students to understand the natural cycles and timing
                in problem-solving
              </li>
              <li>
                <strong>Cause and Effect:</strong> Help students trace the root causes of problems
                and predict potential outcomes
              </li>
              <li>
                <strong>Gender:</strong> Teach students to balance active problem-solving with
                receptive observation
              </li>
            </ul>
          </div>
        </section>

        <div className="flex justify-center mt-16">
          <Link
            href="/site-map"
            className="px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-colors font-[family-name:var(--font-source-serif)]"
          >
            Site Map
          </Link>
        </div>
      </div>
    </div>
  );
}
