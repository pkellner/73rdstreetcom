import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - 73rd Street Associates",
  description: "Privacy policy for 73rd Street Associates, detailing our data collection, usage, security measures, and your rights regarding personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              73rd Street Associates, Inc. ("we", "our", "us") provides applications and services 
              that may connect to Facebook, Instagram, and other platforms. This privacy policy 
              explains how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <span>
                  <strong>Information provided directly:</strong> Data you provide when using our 
                  services, including account information, content you wish to publish, and 
                  communication preferences.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <span>
                  <strong>Platform Data from Meta APIs:</strong> Limited to permissions like 
                  publish_video and related scopes, accessed only with your explicit authorization.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <span>
                  <strong>Usage Information:</strong> Basic analytics about how you interact with 
                  our services to improve functionality.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How We Use Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use collected information exclusively for:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Enabling clients and users to publish photos and videos with captions to their 
                accounts, including personal Pages
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Providing analytics and reporting back to account owners
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Facilitating engagement features such as reading or replying to comments
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Improving our services and developing new features
              </li>
            </ul>
            <div className="bg-red-50 p-4 rounded-lg mt-4">
              <p className="text-red-700 font-semibold">
                Important: We do not resell or use data outside of these specified uses.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement comprehensive security measures to protect your data:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                TLS encryption for all data in transit
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Encryption at rest for stored data
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Restricted access with multi-factor authentication (MFA)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Regular security audits and updates
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Retention
            </h2>
            <p className="text-gray-600 mb-4">
              Our data retention practices ensure minimal data storage:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Data is kept only for as long as required to provide the service
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Automatic deletion when the service ends or authorization is revoked
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Immediate deletion available upon request
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                All deletion requests processed within 7 business days
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Data Deletion
            </h2>
            <p className="text-gray-600 mb-4">
              You have complete control over your data. To delete your data:
            </p>
            <ol className="space-y-3 text-gray-600">
              <li>
                <strong>1.</strong> Remove our app from your Facebook/Instagram settings 
                (Settings → Apps and Websites)
              </li>
              <li>
                <strong>2.</strong> Or email us at{" "}
                <a href="mailto:peter@peterkellner.net" className="text-primary-600 hover:text-primary-700">
                  peter@peterkellner.net
                </a>{" "}
                with the subject line "Data Deletion Request"
              </li>
            </ol>
            <p className="text-gray-600 mt-4">
              Each app includes specific data deletion instructions. Example:{" "}
              <a 
                href="https://photos.connectionroad.com/data-deletion" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                https://photos.connectionroad.com/data-deletion
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <strong>Access:</strong> Request a copy of the data we hold about you
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <strong>Correction:</strong> Request corrections to inaccurate data
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <strong>Deletion:</strong> Request deletion of your data at any time
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <strong>Portability:</strong> Receive your data in a portable format
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                <strong>Withdraw Consent:</strong> Revoke permissions at any time through platform settings
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600">
              Our services are not directed to individuals under the age of 13. We do not 
              knowingly collect personal information from children under 13. If we become 
              aware that we have collected personal information from a child under 13, we 
              will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new privacy policy on this page and updating the "Last 
              updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-3">73rd Street Associates, Inc.</p>
              <p className="text-gray-600">#221</p>
              <p className="text-gray-600">Borrego Springs, CA 92004, USA</p>
              <p className="text-gray-600 mt-3">
                Email:{" "}
                <a href="mailto:info@73rdstreet.com" className="text-primary-600 hover:text-primary-700">
                  info@73rdstreet.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}