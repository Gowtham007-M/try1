import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useUser } from '@/contexts/UserContext';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  DollarSign,
  Check,
  CreditCard,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const eventsData = [
  {
    id: 1,
    title: 'Tech Conference 2025',
    description: 'Join us for the latest in technology trends and innovations. Our annual tech conference brings together industry leaders, innovators, and technology enthusiasts from around the world. Participate in workshops, listen to inspiring keynotes, and network with professionals in your field.',
    date: 'June 15-18, 2025',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    attendees: 1200,
    sessions: 48,
    categories: ['Technology', 'Innovation'],
    featured: true,
    fee: 999,
    currency: 'INR',
    agenda: [
      { time: '9:00 AM', title: 'Opening Keynote', speaker: 'John Davis' },
      { time: '10:30 AM', title: 'Future of AI', speaker: 'Sarah Chen' },
      { time: '1:00 PM', title: 'Networking Lunch', speaker: '' },
      { time: '2:30 PM', title: 'Workshop Sessions', speaker: 'Various Speakers' },
    ]
  },
  {
    id: 2,
    title: 'Marketing Summit',
    description: 'Discover the future of marketing with industry leaders. The Marketing Summit covers the latest trends, strategies, and technologies in digital marketing, content creation, social media, and brand development. Learn from successful case studies and apply new techniques to your business.',
    date: 'July 10-12, 2025',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    attendees: 800,
    sessions: 32,
    categories: ['Marketing', 'Business'],
    featured: true,
    fee: 899,
    currency: 'INR',
    agenda: [
      { time: '9:30 AM', title: 'Digital Marketing Trends', speaker: 'Emma Roberts' },
      { time: '11:00 AM', title: 'Social Media Strategy', speaker: 'Michael Lee' },
      { time: '1:30 PM', title: 'Networking Lunch', speaker: '' },
      { time: '3:00 PM', title: 'Content Marketing Workshop', speaker: 'David Wilson' },
    ]
  },
  {
    id: 3,
    title: 'Design Workshop',
    description: 'Interactive sessions on UX/UI design principles and practices. This workshop focuses on hands-on experience with modern design tools and methodologies. Perfect for beginners and intermediate designers looking to enhance their skills in user-centered design.',
    date: 'August 5, 2025',
    location: 'Hyderabad, India',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    attendees: 300,
    sessions: 16,
    categories: ['Design', 'Workshop'],
    featured: false,
    fee: 799,
    currency: 'INR',
    agenda: [
      { time: '10:00 AM', title: 'UI Design Principles', speaker: 'Lisa Chang' },
      { time: '11:30 AM', title: 'Prototyping Workshop', speaker: 'Robert Johnson' },
      { time: '1:00 PM', title: 'Lunch Break', speaker: '' },
      { time: '2:00 PM', title: 'User Testing Methods', speaker: 'Amanda Torres' },
    ]
  },
  {
    id: 4,
    title: 'Web Development Conference',
    description: 'Learn about the latest web technologies and frameworks. This comprehensive conference covers frontend and backend development, performance optimization, security, and emerging web standards. Whether you\'re a beginner or an experienced developer, there\'s something for everyone.',
    date: 'September 20-22, 2025',
    location: 'Chennai, India',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&w=1200&q=80',
    attendees: 650,
    sessions: 28,
    categories: ['Web Development', 'Technology'],
    featured: false,
    fee: 949,
    currency: 'INR',
    agenda: [
      { time: '9:00 AM', title: 'Modern JavaScript Frameworks', speaker: 'Thomas Brown' },
      { time: '10:30 AM', title: 'Backend Architecture', speaker: 'Jennifer Smith' },
      { time: '12:00 PM', title: 'Lunch Network Session', speaker: '' },
      { time: '1:30 PM', title: 'Web Performance Workshop', speaker: 'Daniel Rodriguez' },
    ]
  },
];

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, addRegistration } = useUser();
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const form = useForm({
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const event = eventsData.find(e => e.id === Number(eventId));

  if (!event) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="mb-8">We couldn't find the event you're looking for.</p>
          <Button onClick={() => navigate('/events')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Events
          </Button>
        </div>
      </Layout>
    );
  }

  const handleRegisterClick = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to register for this event.",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }
    
    setIsRegistering(true);
    setShowPayment(true);
    setPaymentSuccess(false);
  };

  const handlePayment = (data) => {
    setPaymentProcessing(true);
    
    setTimeout(() => {
      const ticketId = Math.random().toString(36).substring(2, 10).toUpperCase();
      
      addRegistration({
        eventId: event.id,
        eventName: event.title,
        registrationDate: new Date().toISOString(),
        ticketId: ticketId,
        paymentAmount: event.fee,
        paymentCurrency: event.currency
      });
      
      setPaymentProcessing(false);
      setShowPayment(false);
      setIsRegistering(false);
      setPaymentSuccess(true);
      
      toast({
        title: "Registration Successful!",
        description: `You've successfully registered for ${event.title}.`,
      });
      
      setTimeout(() => {
        navigate('/account');
      }, 3000);
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate('/events')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Button>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative h-[300px] w-full mb-6 rounded-lg overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.title}</h1>
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
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700">{event.description}</p>
              </div>
              
              <div className="border-t border-b py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-conference-teal mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-conference-teal mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="h-5 w-5 text-conference-teal mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Attendees</p>
                    <p className="font-medium">{event.attendees}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-5 w-5 text-conference-teal mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Sessions</p>
                    <p className="font-medium">{event.sessions}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Event Agenda</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex border-b border-gray-200 pb-3">
                      <div className="w-24 font-medium text-conference-purple">{item.time}</div>
                      <div className="flex-1">
                        <p className="font-medium">{item.title}</p>
                        {item.speaker && <p className="text-sm text-gray-500">Speaker: {item.speaker}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Registration</CardTitle>
                <CardDescription>Secure your spot at this event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Registration Fee</span>
                  <span className="text-2xl font-bold text-conference-purple">
                    {event.currency === 'INR' ? '₹' : '$'}{event.fee.toLocaleString()}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Access to all sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Conference materials</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Networking opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Certificate of attendance</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                {paymentSuccess ? (
                  <div className="text-center space-y-4 p-4 border rounded-md bg-green-50">
                    <div className="mx-auto bg-green-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800">Payment Successful!</h3>
                    <p className="text-sm">
                      Your registration for {event.title} is confirmed. You can view your ticket in your account.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/account')}
                    >
                      View Tickets
                    </Button>
                  </div>
                ) : showPayment ? (
                  <div className="w-full space-y-4">
                    <div className="border rounded-md p-4 bg-gray-50">
                      <h3 className="font-medium mb-4 flex items-center">
                        <CreditCard className="h-4 w-4 mr-1" />
                        Payment Details
                      </h3>
                      
                      <form onSubmit={form.handleSubmit(handlePayment)} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input 
                            id="cardName" 
                            {...form.register('cardName')}
                            required
                            placeholder="John Smith" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            id="cardNumber" 
                            {...form.register('cardNumber')}
                            required
                            placeholder="1234 5678 9012 3456" 
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input 
                              id="expiryDate" 
                              {...form.register('expiryDate')}
                              required
                              placeholder="MM/YY" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              id="cvv" 
                              {...form.register('cvv')}
                              required
                              type="password"
                              placeholder="123" 
                            />
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <Button 
                            type="submit"
                            className="w-full" 
                            disabled={paymentProcessing}
                          >
                            {paymentProcessing ? 'Processing...' : `Pay ${event.currency === 'INR' ? '₹' : '$'}${event.fee.toLocaleString()}`}
                          </Button>
                        </div>
                      </form>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setShowPayment(false);
                        setIsRegistering(false);
                      }}
                      disabled={paymentProcessing}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={handleRegisterClick}
                  >
                    Register Now
                  </Button>
                )}
                
                {!showPayment && !paymentSuccess && (
                  <p className="text-xs text-center text-gray-500">
                    You'll receive a confirmation email with your ticket after registration.
                  </p>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
