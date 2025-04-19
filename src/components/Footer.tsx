
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900">SessionSpark</span>
            </Link>
            <p className="mt-4 text-base text-gray-600 max-w-md">
              Streamlining conference management with powerful tools for event creation, 
              session scheduling, registration, and feedback collection.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/events" className="text-base text-gray-600 hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-base text-gray-600 hover:text-gray-900">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-base text-gray-600 hover:text-gray-900">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-base text-gray-600 hover:text-gray-900">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-base text-gray-600 hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SessionSpark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
