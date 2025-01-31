import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        
        <div className="prose prose-gray max-w-none bg-white p-8 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to these Terms of Use. If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by Buy Canadian and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>When using our website, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the website legally and appropriately</li>
              <li>Not interfere with the website's security</li>
              <li>Not attempt to gain unauthorized access</li>
              <li>Not use the website for commercial purposes without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Disclaimer</h2>
            <p>
              The website is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or usefulness of any information on the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              Buy Canadian shall not be liable for any damages arising from the use or inability to use the website or any content therein.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">6. Third-Party Links</h2>
            <p>
              Our website contains links to third-party websites. We are not responsible for their content or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our website immediately, without prior notice, for any breach of these Terms of Use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of Canada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
