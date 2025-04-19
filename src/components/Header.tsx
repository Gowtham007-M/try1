
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  CalendarDays,
  Menu,
  User,
  Users,
  X,
} from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <CalendarDays className="h-8 w-8 text-conference-purple" />
              <span className="ml-2 text-xl font-semibold text-gray-900">SessionSpark</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-conference-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <Link to="/events" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Events
            </Link>
            <Link to="/schedule" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Schedule
            </Link>
            <Link to="/speakers" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Speakers
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            {user ? (
              <Button asChild>
                <Link to="/account" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>My Account</span>
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="absolute top-full inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <CalendarDays className="h-8 w-8 text-conference-purple" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-conference-purple"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/events"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CalendarDays className="flex-shrink-0 h-6 w-6 text-conference-purple" />
                    <span className="ml-3 text-base font-medium text-gray-900">Events</span>
                  </Link>
                  <Link
                    to="/schedule"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CalendarDays className="flex-shrink-0 h-6 w-6 text-conference-purple" />
                    <span className="ml-3 text-base font-medium text-gray-900">Schedule</span>
                  </Link>
                  <Link
                    to="/speakers"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="flex-shrink-0 h-6 w-6 text-conference-purple" />
                    <span className="ml-3 text-base font-medium text-gray-900">Speakers</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link 
                  to="/feedback" 
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Feedback
                </Link>
                <Link 
                  to="/about" 
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </div>
              <div className="space-y-2">
                {user ? (
                  <Button className="w-full" asChild>
                    <Link to="/account" onClick={() => setIsMenuOpen(false)}>
                      My Account
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button className="w-full" asChild>
                      <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                        Sign up
                      </Link>
                    </Button>
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing account?{' '}
                      <Link 
                        to="/login" 
                        className="text-conference-purple hover:text-conference-purple/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
