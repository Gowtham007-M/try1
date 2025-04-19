
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-conference-purple to-conference-teal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to elevate your conference experience?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of organizers, speakers, and attendees who use SessionSpark to create memorable conference experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-conference-purple hover:bg-gray-100">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
