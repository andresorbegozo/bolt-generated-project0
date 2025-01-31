import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-gray max-w-none bg-white p-8 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Our Commitment</h2>
            <p>
              Buy Canadian is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Conformance Status</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. These guidelines explain how to make web content more accessible for people with disabilities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Semantic HTML structure</li>
              <li>ARIA landmarks and labels</li>
              <li>Keyboard navigation support</li>
              <li>Focus indicators</li>
              <li>Alt text for images</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text</li>
              <li>Screen reader compatibility</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Known Limitations</h2>
            <p>
              While we strive for accessibility, some content may have limitations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>PDF documents may not be fully accessible</li>
              <li>Some third-party content may not meet accessibility standards</li>
              <li>Legacy content may need updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Feedback</h2>
            <p>
              We welcome feedback on the accessibility of our website. Please let us know if you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encounter accessibility barriers</li>
              <li>Need information in an alternative format</li>
              <li>Have suggestions for improvement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Enforcement</h2>
            <p>
              We regularly assess our website against accessibility guidelines and resolve issues promptly. We also provide accessibility training to our staff.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Updates</h2>
            <p>
              This statement was last updated on {new Date().toLocaleDateString()}. We regularly review and update this statement as our website evolves.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
