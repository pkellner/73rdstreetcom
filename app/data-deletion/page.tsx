import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion - 73rd Street Associates",
  description: "Instructions for requesting deletion of your data from 73rd Street Associates applications and services.",
};

export default function DataDeletionPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Data Deletion Instructions
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Right to Data Deletion
            </h2>
            <p className="text-gray-600 mb-4">
              Apps by 73rd Street Associates, Inc. may request limited access to your Facebook 
              or Instagram account. You have complete control over your data and can request 
              its deletion at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Delete Your Data
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Option 1: Remove App from Facebook/Instagram
                </h3>
                <p className="text-gray-700 mb-3">
                  This immediately stops our access to your account and initiates data deletion:
                </p>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Go to Facebook Settings</li>
                  <li>2. Navigate to "Apps and Websites"</li>
                  <li>3. Find our app in the list</li>
                  <li>4. Click "Remove" to revoke access</li>
                </ol>
                <p className="text-sm text-gray-600 mt-3">
                  This stops our access immediately and we will delete all associated data 
                  within 7 business days.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Option 2: Email Request
                </h3>
                <p className="text-gray-700 mb-3">
                  Send a data deletion request directly to us:
                </p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:peter@peterkellner.net?subject=Data%20Deletion%20Request" 
                      className="text-primary-600 hover:text-primary-700"
                    >
                      peter@peterkellner.net
                    </a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Subject Line:</strong> "Data Deletion Request"
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Include:</strong> Your name and the email associated with your account
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Happens After You Request Deletion
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  We immediately stop accessing your Facebook/Instagram data
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All your data is removed from our systems within 7 business days
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You receive confirmation when deletion is complete (if email provided)
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No data is retained after the deletion process is complete
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Data We Delete
            </h2>
            <p className="text-gray-600 mb-4">
              When you request data deletion, we remove:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                All access tokens and authentication credentials
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Your profile information obtained from Meta platforms
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Content you've published through our services
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Analytics and engagement data we've collected
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Any scheduled posts or automation settings
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                All associated metadata and logs
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              App-Specific Deletion Pages
            </h2>
            <p className="text-gray-600 mb-4">
              Each of our applications has its own specific data deletion page with detailed 
              instructions:
            </p>
            <div className="bg-yellow-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Example:</strong>{" "}
                <a 
                  href="https://photos.connectionroad.com/data-deletion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700"
                >
                  https://photos.connectionroad.com/data-deletion
                </a>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Visit the specific deletion page for your app for more detailed instructions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How long does data deletion take?
                </h3>
                <p className="text-gray-600">
                  We process all deletion requests within 7 business days of receipt.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I get my data back after deletion?
                </h3>
                <p className="text-gray-600">
                  No, once data is deleted it cannot be recovered. You would need to 
                  re-authorize our app and start fresh.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Will deletion affect my Facebook/Instagram account?
                </h3>
                <p className="text-gray-600">
                  No, deletion only removes data from our systems. Your Facebook/Instagram 
                  accounts remain unchanged.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you keep any data after deletion?
                </h3>
                <p className="text-gray-600">
                  No, we completely remove all data associated with your account. We may 
                  retain anonymized, aggregated statistics that cannot be linked to you.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-primary-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary-900 mb-3">
                Need Help?
              </h2>
              <p className="text-gray-700 mb-3">
                If you have questions about data deletion or need assistance, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:peter@peterkellner.net" className="text-primary-600 hover:text-primary-700">
                    peter@peterkellner.net
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+14082341385" className="text-primary-600 hover:text-primary-700">
                    +1-408-234-1385
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}