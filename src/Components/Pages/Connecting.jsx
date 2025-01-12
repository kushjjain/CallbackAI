import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Use react-router for routing in Vite
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Loader2 } from 'lucide-react';

export default function Connecting() {
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    // Simulate connection delay then redirect to agent
    const timer = setTimeout(() => {
      navigate('/support/agent'); // Redirect to /support/agent after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigate]);

  return (
    <div className="container mx-auto max-w-3xl py-12 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
      <Card className="bg-white rounded-lg shadow-lg p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-indigo-600">
            Connecting you with an agent
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Please wait while we connect you with the next available support representative.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center py-12">
          <Loader2 className="h-16 w-16 animate-spin text-indigo-600" />
        </CardContent>
      </Card>
    </div>
  );
}
