
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRegistration } from "@/contexts/UserContext";
import { formatDate } from "@/utils/formatters";
import { CalendarDays } from "lucide-react";

interface RegistrationsTabProps {
  registrations: UserRegistration[];
}

export const RegistrationsTab = ({ registrations }: RegistrationsTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">My Registrations</CardTitle>
        <CardDescription>
          View all conferences you have registered for
        </CardDescription>
      </CardHeader>
      <CardContent>
        {registrations.length > 0 ? (
          <div className="space-y-4">
            {registrations.map((reg, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2 hover:border-conference-purple transition-colors">
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5 text-conference-purple" />
                  <h3 className="font-semibold text-lg">{reg.eventName}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-gray-500">Registration Date</p>
                    <p>{formatDate(reg.registrationDate)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ticket ID</p>
                    <p className="font-mono text-sm">{reg.ticketId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <CalendarDays className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">You haven't registered for any events yet.</p>
            <Button className="mt-4" asChild>
              <a href="/events">Browse Events</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
