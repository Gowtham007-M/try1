
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    content: "SessionSpark completely transformed how we manage our annual tech conference. The scheduling tools saved us hours of planning time.",
    author: "Sarah Johnson",
    role: "Event Director, TechConf"
  },
  {
    content: "As a speaker, I love how easy it is to submit my materials and communicate with event organizers. The platform is intuitive and well-designed.",
    author: "Michael Chen",
    role: "Senior Developer, CodeCorp"
  },
  {
    content: "The feedback collection system has given us valuable insights that helped improve our conference year after year.",
    author: "Emily Rodriguez",
    role: "Conference Coordinator, EduSummit"
  },
  {
    content: "Registration management has never been easier. We've seen a 40% increase in attendee satisfaction since switching to SessionSpark.",
    author: "David Kim",
    role: "Marketing Director, GlobalEvents"
  }
];

const TestimonialSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from conference organizers, speakers, and attendees who use SessionSpark.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <svg 
                    className="h-8 w-8 text-conference-purple mb-4" 
                    fill="currentColor" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="mt-2 flex-grow">
                    <p className="text-lg leading-relaxed text-gray-700">"{testimonial.content}"</p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </footer>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
