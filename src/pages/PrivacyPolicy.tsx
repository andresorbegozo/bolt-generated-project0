import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none bg-white p-8 rounded-lg shadow-sm">
          <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Buy Canadian ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we protect your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">2. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience. You can control cookies through your browser settings. Our cookie notice provides detailed information about the types of cookies we use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">4. Third-Party Links</h2>
            <p>
              Our website contains links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">5. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
