
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Users, Tag } from "lucide-react";

interface StatsCardsProps {
  registrationsCount: number;
  totalRevenue: number;
}

export const StatsCards = ({ registrationsCount, totalRevenue }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Total Registrations</CardTitle>
          <CardDescription>All events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{registrationsCount}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Total Revenue</CardTitle>
          <CardDescription>All payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-conference-purple">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Average Price</CardTitle>
          <CardDescription>Per registration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">
            ₹{registrationsCount > 0 
              ? Math.round(totalRevenue / registrationsCount).toLocaleString('en-IN') 
              : 0}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Registration Types</CardTitle>
          <CardDescription>Different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold flex items-center">
            <Tag className="h-6 w-6 mr-2 text-conference-purple" />
            <span>4</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
