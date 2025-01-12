import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Textarea } from '../ui/TextArea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";

export default function CustomerSupport() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUrgent = /urgent|emergency|immediate|asap/i.test(query);
    if (isUrgent) {
      navigate('/support/connecting');
    } else {
      navigate(`/support/chatbot?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
      <Card className="bg-white rounded-lg shadow-lg p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-600">
            How can we help you today?
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Describe your issue and we'll connect you with the best available support option.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Textarea for User Query */}
            <div className="space-y-4">
              <Textarea
                placeholder="Type your question or describe your issue..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full min-h-[200px] p-4 text-lg border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full py-3 text-xl bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md"
            >
              Get Support
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
