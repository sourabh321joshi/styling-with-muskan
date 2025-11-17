import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Product Care
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Stores
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Art of Gifting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Download our Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  La Maison
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Latest News
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black hover:text-gray-600 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-sm text-black mb-3">Follow Us</p>
          </div>
        </div>

        {/* Legal Section */}
        <div className="border-t border-gray-200 pt-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-600">
            <div>
              <p className="mb-2">India</p>
              <p className="mb-4">Full Name and Address of the Manufacturer:</p>
              <p>Styling Beauty Services Pvt. Ltd.</p>
              <p>123 Beauty Street, Mumbai, Maharashtra - 400001, INDIA</p>
            </div>
            <div>
              <p className="mb-4">Full Name and Address of the Importer:</p>
              <p>Styling Beauty Services Pvt. Ltd.</p>
              <p>123 Beauty Street, Mumbai, Maharashtra - 400001, INDIA</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                Legal & Privacy
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                Cookies
              </a>
            </div>
            <h2 className="text-xl font-bold text-black uppercase tracking-tight">
              Styling-With-Muskan
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

