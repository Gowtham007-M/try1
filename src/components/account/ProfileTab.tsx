
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "@/contexts/UserContext";
import { useUser } from "@/contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogOut, Pencil, Save, User as UserIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileTabProps {
  user: User;
}

export const ProfileTab = ({ user }: ProfileTabProps) => {
  const { logout, updateUser } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Edit mode state and form values
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editPhone, setEditPhone] = useState(user.phone || "");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    updateUser({
      name: editName,
      phone: editPhone,
    });
    
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-4">
          <div className="bg-conference-purple text-white rounded-full p-3">
            <UserIcon className="h-8 w-8" />
          </div>
          <div>
            <CardTitle className="text-2xl">My Profile</CardTitle>
            <CardDescription>Manage your SessionSpark account information</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing ? (
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email (cannot be changed)</Label>
              <Input 
                id="email"
                value={user.email}
                disabled
                className="bg-gray-100"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <Button 
              onClick={handleSaveProfile}
              className="flex items-center space-x-2 mt-4"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-base">{user.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-base">{user.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone Number</p>
              <p className="text-base">{user.phone || "Not provided"}</p>
            </div>

            <Button 
              onClick={handleStartEdit}
              variant="outline" 
              className="flex items-center space-x-2 mt-4"
            >
              <Pencil className="h-4 w-4" />
              <span>Edit Profile</span>
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleLogout}
          variant="outline" 
          className="flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign out</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
