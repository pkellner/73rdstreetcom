import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - 73rd Street Associates",
  description: "Terms of Service for 73rd Street Associates technology services and Meta Platform integration solutions.",
};

export default function TermsPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Terms of Service
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using the services provided by 73rd Street Associates, Inc. ("we," "us," "our"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-600 mb-4">
              73rd Street Associates provides technology services including:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Content publishing and scheduling</li>
              <li>• Analytics and reporting</li>
              <li>• Custom software development</li>
              <li>• Technical consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              When using our services, you agree to:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Provide accurate and current information</li>
              <li>• Maintain the security of your account credentials</li>
              <li>• Comply with all applicable laws and regulations</li>
              <li>• Respect intellectual property rights</li>
              <li>• Not use our services for any unlawful purpose</li>
             </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Social Media Integration
            </h2>
            <p className="text-gray-600 mb-4">
              Our services integrate with social media platforms. By using these features:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• You authorize us to access your social media accounts as specified</li>
              <li>• You understand we follow platform policies and guidelines</li>
              <li>• You agree to the respective platform's Terms and Policies</li>
              <li>• You can revoke access at any time through platform settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Protection
            </h2>
            <p className="text-gray-600 mb-4">
              We commit to:
            </p>
            <ul className="space-y-2 text-gray-600 ml-6">
              <li>• Use your data only for providing requested services</li>
              <li>• Implement industry-standard security measures</li>
              <li>• Never sell or misuse your data</li>
              <li>• Process deletion requests within 7 business days</li>
              <li>• Comply with applicable data protection laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, features, and functionality of our services are owned by 
              73rd Street Associates or our licensors and are protected by copyright, 
              trademark, and other intellectual property laws. You retain all rights 
              to content you provide through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              To the fullest extent permitted by law, 73rd Street Associates shall not be 
              liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Indemnification
            </h2>
            <p className="text-gray-600">
              You agree to indemnify and hold harmless 73rd Street Associates from any claims, 
              damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Termination
            </h2>
            <p className="text-gray-600">
              Either party may terminate service at any time. Upon termination, we will 
              delete your data as outlined in our Privacy Policy and Data Deletion procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600">
              These Terms shall be governed by the laws of the State of California, USA, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users 
              of significant changes via email or through our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-3">73rd Street Associates, Inc.</p>
              <p className="text-gray-600">
                Email:{" "}
                <a href="mailto:info@73rdstreet.com" className="text-primary-600 hover:text-primary-700">
                  info@73rdstreet.com
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                #221<br />
                Borrego Springs, CA 92004, USA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}