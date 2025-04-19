
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/utils/formatters";
import { DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export interface Registration {
  eventName: string;
  ticketId: string;
  registrationDate: string;
  paymentAmount: number;
  registrationType?: string; // Added registration type field
}

interface RegistrationsTableProps {
  registrations: Registration[];
}

export const RegistrationsTable = ({ registrations }: RegistrationsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter registrations based on search term
  const filteredRegistrations = registrations.filter(reg => 
    reg.eventName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    reg.ticketId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mb-4">
        <Input 
          placeholder="Search by event name or ticket ID" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>
      <Table>
        <TableCaption>A list of all event registrations and payments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Event Name</TableHead>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Registration Type</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead className="text-right">Payment Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRegistrations.length > 0 ? (
            filteredRegistrations.map((reg, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{reg.eventName}</TableCell>
                <TableCell>{reg.ticketId}</TableCell>
                <TableCell>{reg.registrationType || "Regular"}</TableCell>
                <TableCell>{formatDate(reg.registrationDate)}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center text-conference-purple">
                    <DollarSign className="h-4 w-4 mr-1" />
                    ₹{reg.paymentAmount}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                {searchTerm ? 'No matching registrations found' : 'No registrations found'}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
