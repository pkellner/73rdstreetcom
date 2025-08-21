import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - 73rd Street Associates",
  description: "Code of Conduct for 73rd Street Associates community and services, promoting a respectful and inclusive environment.",
};

export default function CodeOfConductPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Code of Conduct
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Pledge
            </h2>
            <p className="text-gray-600">
              We at 73rd Street Associates pledge to make participation in our community 
              and services a harassment-free experience for everyone, regardless of age, 
              body size, disability, ethnicity, gender identity and expression, level of 
              experience, nationality, personal appearance, race, religion, or sexual 
              identity and orientation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Standards
            </h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Examples of Positive Behavior
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Demonstrating empathy and kindness toward others
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Being respectful of differing opinions, viewpoints, and experiences
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Giving and gracefully accepting constructive feedback
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accepting responsibility and apologizing for mistakes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Focusing on what is best for the community
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Examples of Unacceptable Behavior
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Use of sexualized language or imagery
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Trolling, insulting or derogatory comments, and personal attacks
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Public or private harassment
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Publishing others' private information without permission
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Other conduct which could reasonably be considered inappropriate
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Content Guidelines
            </h2>
            <p className="text-gray-600 mb-4">
              When using our services to publish content, ensure that:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Content is appropriate for all audiences
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                You have proper rights and licenses for all content
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Content respects individual privacy and consent
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Information shared is truthful and not misleading
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3">•</span>
                Content does not discriminate or promote hatred
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Enforcement
            </h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">
                  1. Correction
                </h3>
                <p className="text-gray-700">
                  <strong>Community Impact:</strong> Minor violation or inappropriate behavior.<br />
                  <strong>Consequence:</strong> Private written warning with clarity on the violation.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">
                  2. Warning
                </h3>
                <p className="text-gray-700">
                  <strong>Community Impact:</strong> A violation through a single incident or series of actions.<br />
                  <strong>Consequence:</strong> Warning with consequences for continued behavior, including restricted interaction.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">
                  3. Temporary Ban
                </h3>
                <p className="text-gray-700">
                  <strong>Community Impact:</strong> Serious violation of community standards.<br />
                  <strong>Consequence:</strong> Temporary ban from interaction with the community.
                </p>
              </div>

              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">
                  4. Permanent Ban
                </h3>
                <p className="text-gray-700">
                  <strong>Community Impact:</strong> Pattern of violations or severe breach of standards.<br />
                  <strong>Consequence:</strong> Permanent ban from all community interaction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Reporting
            </h2>
            <p className="text-gray-600 mb-4">
              Instances of abusive, harassing, or otherwise unacceptable behavior may be 
              reported to our team at:
            </p>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:peter@peterkellner.net" className="text-primary-600 hover:text-primary-700">
                  peter@peterkellner.net
                </a>
              </p>
            </div>
            <p className="text-gray-600 mt-4">
              All complaints will be reviewed and investigated promptly and fairly. We are 
              committed to respecting the privacy and security of the reporter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Scope
            </h2>
            <p className="text-gray-600">
              This Code of Conduct applies to all 73rd Street Associates spaces, including 
              our services, applications, and communications. It also applies when an 
              individual is officially representing 73rd Street Associates in public spaces.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Attribution
            </h2>
            <p className="text-gray-600">
              This Code of Conduct is adapted from the{" "}
              <a 
                href="https://www.contributor-covenant.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                Contributor Covenant
              </a>
              , version 2.1.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}