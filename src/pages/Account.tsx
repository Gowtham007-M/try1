
import Layout from "@/components/Layout";
import { ProfileTab } from "@/components/account/ProfileTab";
import { RegistrationsTab } from "@/components/account/RegistrationsTab";
import { TicketsTab } from "@/components/account/TicketsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@/contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If not logged in, redirect to login
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto py-12">
        <Tabs defaultValue="profile">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="registrations">My Registrations</TabsTrigger>
            <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <ProfileTab user={user} />
          </TabsContent>
          
          <TabsContent value="registrations">
            <RegistrationsTab registrations={user.registrations || []} />
          </TabsContent>
          
          <TabsContent value="tickets">
            <TicketsTab registrations={user.registrations || []} />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
