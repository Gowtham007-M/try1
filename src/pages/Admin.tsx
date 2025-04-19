
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "@/components/Layout";
import { useUser, UserRegistration } from '@/contexts/UserContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck } from 'lucide-react';
import { StatsCards } from '@/components/admin/StatsCards';
import { RegistrationsTable } from '@/components/admin/RegistrationsTable';

const Admin = () => {
  const { user, getAllRegistrations } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<UserRegistration[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  
  useEffect(() => {
    // If not logged in or not admin, redirect to login
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!user.isAdmin) {
      toast({
        title: "Access Denied",
        description: "This page is only accessible to administrators.",
        variant: "destructive",
      });
      navigate('/');
      return;
    }
    
    // Load all registrations
    const allRegistrations = getAllRegistrations();
    setRegistrations(allRegistrations);
    
    // Calculate total revenue
    const total = allRegistrations.reduce((sum, reg) => sum + reg.paymentAmount, 0);
    setTotalRevenue(total);
  }, [user, navigate, toast, getAllRegistrations]);

  if (!user || !user.isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <Layout>
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-conference-purple text-white p-3 rounded-full">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-500">Manage registrations and payments</p>
            </div>
          </div>
        </div>
        
        <StatsCards 
          registrationsCount={registrations.length}
          totalRevenue={totalRevenue}
        />
        
        <Card>
          <CardHeader>
            <CardTitle>Registrations & Payments</CardTitle>
            <CardDescription>Comprehensive list of all event registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <RegistrationsTable registrations={registrations} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Admin;
