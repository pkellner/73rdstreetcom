import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - 73rd Street Associates",
  description: "Professional technology services including Twitter Platform integration, content publishing automation, custom application development, and more.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We provide comprehensive technology solutions tailored to your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Social Media Integration</h3>
            <p className="text-gray-600 mb-4">
              Complete integration.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Photo and video publishing with captions
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Content scheduling and automation
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Analytics and insights tracking
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Comment and engagement management
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Custom Application Development</h3>
            <p className="text-gray-600 mb-4">
              Tailored software solutions built to meet your specific business requirements.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Web application development
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                API design and implementation
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Database design and optimization
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Cloud deployment and scaling
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Content Publishing Automation</h3>
            <p className="text-gray-600 mb-4">
              Streamline your content workflow with automated publishing solutions.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Bulk content uploading
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Cross-platform publishing
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Scheduled posting campaigns
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Content performance tracking
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-primary-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Analytics & Reporting</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics to understand your social media performance.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Engagement metrics tracking
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Custom dashboard creation
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Performance trend analysis
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Automated reporting
              </li>
            </ul>
          </div>
        </div>

        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8">Example Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Content Distribution</h4>
              <p className="text-gray-600">
                Automatically distribute content across multiple platforms,
                perfect for businesses and content creators.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Digital Asset Management</h4>
              <p className="text-gray-600">
                Organize and manage your digital assets with metadata, version control, 
                and automated workflows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Email Campaign Automation</h4>
              <p className="text-gray-600">
                Schedule and automate email marketing campaigns with personalized content, 
                ensuring consistent communication with your audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Analytics Dashboard</h4>
              <p className="text-gray-600">
                Monitor performance metrics and KPIs from a centralized dashboard, 
                enabling data-driven decision making.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Future Offerings</h2>
          <p className="text-gray-600 text-center mb-6">
            We're developing consumer applications for the App Store and Google Play that will 
            bring these powerful features directly to individual users, allowing them to manage 
            their personal social media accounts with professional-grade tools.
          </p>
          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Learn More About Our Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}