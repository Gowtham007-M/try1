
import {
  CalendarDays,
  Clock,
  MessageSquare,
  Users,
  Video,
  Bell,
} from 'lucide-react';

const features = [
  {
    name: 'Event Creation',
    description: 'Create and manage conferences with customizable schedules and session details.',
    icon: CalendarDays,
  },
  {
    name: 'Session Scheduling',
    description: 'Organize sessions by time slots, speakers, and topics with automatic conflict resolution.',
    icon: Clock,
  },
  {
    name: 'Registration System',
    description: 'Handle attendee registrations with confirmation emails and role-based access.',
    icon: Users,
  },
  {
    name: 'Feedback Collection',
    description: 'Collect and analyze feedback from attendees to improve future events.',
    icon: MessageSquare,
  },
  {
    name: 'Virtual Events',
    description: 'Support for virtual and hybrid events with video conferencing integrations.',
    icon: Video,
  },
  {
    name: 'Real-time Updates',
    description: 'Instant notifications for schedule changes, important announcements, and more.',
    icon: Bell,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Powerful Features for Successful Conferences
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to organize, manage, and improve your conference experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-conference-purple to-conference-teal rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
