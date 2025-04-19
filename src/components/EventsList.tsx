
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';

// Updated events data with India locations and prices under 1000 INR
const events = [
  {
    id: 1,
    title: 'Tech Conference 2025',
    description: 'Join us for the latest in technology trends and innovations.',
    date: 'June 15-18, 2025',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=60',
    attendees: 1200,
    sessions: 48,
    categories: ['Technology', 'Innovation'],
    featured: true,
    fee: 999,
    currency: 'INR',
  },
  {
    id: 2,
    title: 'Marketing Summit',
    description: 'Discover the future of marketing with industry leaders.',
    date: 'July 10-12, 2025',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=60',
    attendees: 800,
    sessions: 32,
    categories: ['Marketing', 'Business'],
    featured: true,
    fee: 899,
    currency: 'INR',
  },
  {
    id: 3,
    title: 'Design Workshop',
    description: 'Interactive sessions on UX/UI design principles and practices.',
    date: 'August 5, 2025',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=60',
    attendees: 300,
    sessions: 16,
    categories: ['Design', 'Workshop'],
    featured: false,
    fee: 799,
    currency: 'INR',
  },
  {
    id: 4,
    title: 'Web Development Conference',
    description: 'Learn about the latest web technologies and frameworks.',
    date: 'September 20-22, 2025',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&w=500&q=60',
    attendees: 650,
    sessions: 28,
    categories: ['Web Development', 'Technology'],
    featured: false,
    fee: 949,
    currency: 'INR',
  },
];

const EventsList = ({ featured = false }) => {
  const filteredEvents = featured 
    ? events.filter(event => event.featured) 
    : events;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          {featured ? 'Featured Events' : 'Upcoming Events'}
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          {featured 
            ? 'Don\'t miss these highlight events coming up soon.' 
            : 'Browse all our upcoming conferences and events.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <div 
            key={event.id} 
            className="event-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {event.categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant="secondary" 
                    className="bg-conference-purple/10 text-conference-purple hover:bg-conference-purple/20"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link to={`/events/${event.id}`} className="hover:text-conference-purple">
                  {event.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 line-clamp-2 mb-4">
                {event.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1 text-conference-teal" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1 text-conference-teal" />
                  {event.location}
                </div>
                <div className="flex items-start text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1 text-conference-teal" />
                  <span>{event.attendees} attendees</span>
                </div>
                <div className="flex items-start text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1 text-conference-teal" />
                  <span>{event.sessions} sessions</span>
                </div>
                <div className="flex items-start text-sm text-gray-500">
                  <DollarSign className="h-4 w-4 mr-1 text-conference-purple" />
                  <span>₹{event.fee} {event.currency}</span>
                </div>
              </div>
              
              <Button variant="outline" asChild className="w-full">
                <Link to={`/events/${event.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {featured && (
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventsList;
