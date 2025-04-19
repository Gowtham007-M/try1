
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Phone } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accepted) {
      toast({
        variant: "destructive",
        title: "Terms Not Accepted",
        description: "You must accept the terms and conditions to register.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // This is a placeholder for actual registration logic
      console.log("Registration attempt with:", { name, email, phone });
      
      // Simulate successful registration and login
      login({ 
        name: name,
        email: email,
        phone: phone
      });
      
      toast({
        title: "Registration Successful",
        description: "Welcome to SessionSpark! Your account has been created.",
      });
      
      // Navigate to account page
      navigate('/account');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "An error occurred during registration. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container max-w-md mx-auto py-12">
        <Card className="border-2 shadow-lg">
          <CardHeader className="space-y-1 bg-white">
            <div className="flex justify-center mb-4">
              <div className="bg-conference-purple text-white p-3 rounded-full">
                <UserPlus className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-gray-800">Create an account</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input
                    id="name"
                    type="text" 
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white border-gray-300"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white border-gray-300"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white border-gray-300 pl-10"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white border-gray-300"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={accepted}
                    onCheckedChange={(checked) => setAccepted(checked as boolean)} 
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                  >
                    I accept the{" "}
                    <Link to="/terms" className="text-conference-purple hover:underline">
                      terms and conditions
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full bg-conference-purple hover:bg-conference-purple/90" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col bg-white">
            <div className="text-center text-sm mt-2 text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-conference-purple hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Register;
