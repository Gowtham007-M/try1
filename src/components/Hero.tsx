
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="conference-hero relative">
      <div className="absolute inset-0 bg-gradient-to-r from-conference-purple/90 to-conference-teal/90"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          SessionSpark
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          The complete platform for conference organizers, speakers, and attendees. 
          Create events, schedule sessions, and manage registrations all in one place.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-conference-purple hover:bg-gray-100">
            <Link to="/events">Browse Events</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
