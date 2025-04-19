
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
import { LogIn } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This is a placeholder for actual authentication logic
      console.log("Login attempt with:", email);
      
      // Simulate successful login
      login({ 
        name: email.split('@')[0], // Simple name extraction from email
        email: email,
      });
      
      toast({
        title: "Login Successful",
        description: "Welcome back to SessionSpark!",
      });
      
      // Navigate to account page
      navigate('/account');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again.",
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
                <LogIn className="h-8 w-8" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center text-gray-800">Sign In</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
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
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-700">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-conference-purple hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white border-gray-300"
                  />
                </div>
                <Button type="submit" className="w-full bg-conference-purple hover:bg-conference-purple/90" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col bg-white">
            <div className="text-center text-sm mt-2 text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-conference-purple hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Login;
