import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">73rd Street Associates</h3>
            <p className="text-gray-400 text-sm">
              Technology and software development services since 1991.
              Specializing in content publishing and management.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-gray-400 hover:text-white transition-colors">
                  Data Deletion
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-gray-400 hover:text-white transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p className="text-sm">Peter Kellner, Principal</p>
              <p className="text-sm">
                <a href="mailto:info@73rdstreet.com" className="hover:text-white transition-colors">
                  info@73rdstreet.com
                </a>
              </p>
              <p className="text-sm">
                #221<br />
                Borrego Springs, CA 92004<br />
                USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 73rd Street Associates, Inc. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              California Corporation established 1991
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}