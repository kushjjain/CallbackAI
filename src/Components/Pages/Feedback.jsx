import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Textarea } from "../ui/TextArea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

export default function Feedback() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
      <Card className="bg-white rounded-lg shadow-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-purple-600">
            How was your experience?
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Your feedback helps us improve our support service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating Section */}
            <div className="space-y-4">
              <label className="text-lg font-semibold text-purple-600">Rate your experience</label>
              <Select>
                <SelectTrigger
                  className="w-full text-lg border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 appearance-none"
                  style={{
                    backgroundImage: "none", // Removes the default dropdown arrow
                  }}
                >
                  <SelectValue placeholder="Select a rating" />
                </SelectTrigger>
                <SelectContent className="w-full bg-white shadow-md rounded-lg">
                  <SelectItem value="5" className="p-2 hover:bg-purple-100">Excellent</SelectItem>
                  <SelectItem value="4" className="p-2 hover:bg-purple-100">Good</SelectItem>
                  <SelectItem value="3" className="p-2 hover:bg-purple-100">Average</SelectItem>
                  <SelectItem value="2" className="p-2 hover:bg-purple-100">Fair</SelectItem>
                  <SelectItem value="1" className="p-2 hover:bg-purple-100">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments Section */}
            <div className="space-y-4">
              <label className="text-lg font-semibold text-purple-600">Additional comments</label>
              <Textarea
                placeholder="Tell us more about your experience..."
                className="min-h-[150px] p-4 text-lg border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full py-3 text-xl bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
