
import Layout from "@/components/Layout";
import EventsList from "@/components/EventsList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Events = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">All Events</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search events..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
          
          <EventsList />
        </div>
      </div>
    </Layout>
  );
};

export default Events;
