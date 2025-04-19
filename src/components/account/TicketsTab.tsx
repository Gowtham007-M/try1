
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRegistration } from "@/contexts/UserContext";
import { formatDate } from "@/utils/formatters";
import { Ticket } from "lucide-react";

interface TicketsTabProps {
  registrations: UserRegistration[];
}

export const TicketsTab = ({ registrations }: TicketsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">My Tickets</CardTitle>
        <CardDescription>Access your event tickets</CardDescription>
      </CardHeader>
      <CardContent>
        {registrations.length > 0 ? (
          <div className="space-y-6">
            {registrations.map((reg, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-conference-purple text-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{reg.eventName}</h3>
                    <Ticket className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Ticket ID:</span>
                    <span className="font-mono">{reg.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Registration Date:</span>
                    <span>{formatDate(reg.registrationDate)}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      You'll receive a reminder email 24 hours before the event.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Ticket className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No tickets found. Register for events to get tickets.</p>
            <Button className="mt-4" asChild>
              <a href="/events">Browse Events</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
