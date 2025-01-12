import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Trophy } from "lucide-react";

const celebrations = [
  {
    name: "Mayur Kalwar",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Working online image URL
    years: 1,
  },
  {
    name: "Rohan Patel",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg", // Working online image URL
    years: 2,
  },
  {
    name: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg", // Working online image URL
    years: 3,
  },
];

export function Celebrations() {
  return (
    <div className="rounded-lg p-4 bg-white shadow-lg transition-shadow hover:shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-[20px] font-semibold text-gray-900">Celebrations</h2>
      </div>
      <div className="space-y-6">
        {celebrations.map((celebration) => (
          <div
            key={celebration.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={celebration.avatar} />
                <AvatarFallback>{celebration.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[18px] font-semibold text-gray-900">
                  {celebration.name}
                </p>
                <p className="text-[16px] text-gray-600">
                  Celebrates {celebration.years} year{celebration.years > 1 ? "s" : ""} at CallbackAI
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
