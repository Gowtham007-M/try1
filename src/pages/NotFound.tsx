
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-conference-purple mb-6">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. The page might have been removed or the URL might be incorrect.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
