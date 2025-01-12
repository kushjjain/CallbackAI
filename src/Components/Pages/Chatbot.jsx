import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { ScrollArea } from "../ui/ScrollArea";
import { MessageCircle, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useChat } from 'ai/react';

export default function Chatbot() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialQuery = new URLSearchParams(location.search).get('query');

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: initialQuery
      ? [
          { role: 'user', content: initialQuery },
          { role: 'assistant', content: 'Let me help you with that query...' },
        ]
      : [{ role: 'assistant', content: 'Hello! How can I assist you today?' }],
  });

  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (messages.length > 2) {
      setShowFeedback(true);
    }
  }, [messages]);

  const handleFeedback = (satisfied) => {
    if (satisfied) {
      navigate('/support/feedback');
    } else {
      navigate('/support/connecting');
    }
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-xl">
      <Card className="h-[650px] flex flex-col bg-white rounded-lg shadow-md">
        <CardHeader className="text-center bg-blue-100 py-6 rounded-t-lg">
          <CardTitle className="flex items-center justify-center gap-2 text-blue-700 font-semibold text-lg">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            AI Support Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col px-4">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 mt-6">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] shadow-md ${message.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} text-base`} // Added text-base for 16px text size
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {showFeedback && (
            <div className="py-4 text-center space-y-2">
              <p className="text-sm text-gray-600">Was this response helpful?</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeedback(true)}
                  className="border-green-500 text-green-600 hover:bg-green-100"
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Yes
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFeedback(false)}
                  className="border-red-500 text-red-600 hover:bg-red-100"
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  No
                </Button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex gap-2 pt-4">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 rounded-lg shadow-inner border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 text-base" // Added text-base here too
            />
            <Button type="submit" size="icon" className="bg-blue-600 text-white hover:bg-blue-700">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
