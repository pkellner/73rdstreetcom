import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - 73rd Street Associates",
  description: "Learn about 73rd Street Associates, founded in 1991 by Peter Kellner, providing professional technology services and Meta Platform integration.",
};

export default function AboutPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About 73rd Street Associates
        </h1>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 1991, 73rd Street Associates, Inc. has been at the forefront of 
              technology innovation for over three decades. As a California Corporation, we've 
              built our reputation on delivering reliable, secure, and innovative software 
              solutions to businesses and individuals alike.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with custom software development and has evolved to 
              specialize in social media platform integration. We understand the complexities of modern 
              digital marketing and content management, and we're here to simplify 
              these processes for our clients.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Leadership
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">Peter Kellner</h3>
                <p className="text-gray-600 font-medium mb-2">Principal & Founder</p>
                <p className="text-gray-600 mb-4">
                  With over 30 years of experience in software development and technology 
                  services, Peter Kellner has led 73rd Street Associates from its inception. 
                  His expertise spans across multiple programming languages, platforms, and 
                  frameworks, with a particular focus on web technologies and API integrations.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@73rdstreet.com" className="text-primary-600 hover:text-primary-700">
                      info@73rdstreet.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>Website:</strong>{" "}
                    <a href="https://peterkellner.net" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      peterkellner.net
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              At 73rd Street Associates, our mission is to empower businesses and individuals 
              with cutting-edge technology solutions that streamline their digital presence 
              and content management workflows. We believe in:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">
                  <strong>Privacy First:</strong> We only use client data to perform requested 
                  services and never sell or repurpose it for other uses.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">
                  <strong>Security Excellence:</strong> All data traffic is encrypted with TLS, 
                  stored data is encrypted at rest, and access is limited to authorized staff using MFA.
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">
                  <strong>Client Success:</strong> We're committed to delivering solutions that 
                  meet and exceed our clients' expectations.
                </span>
              </li>
            </ul>
          </div>
        </section>


        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help with your technology needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}