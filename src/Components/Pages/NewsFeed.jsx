import { CreatePost } from "../ui/CreatePost";
import { Post } from "../ui/Post";
import { Calendar } from "../ui/Calendar";
import { Celebrations } from "../ui/Celebration";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";

const posts = [
  {
    author: {
      name: "Welcome to CallbackAI",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    content:
      "Discover the power of CallbackAI's intelligent automation and streamline your claims management process. See how it can help you save time, reduce errors, and improve customer satisfaction. Get started today!",
    timestamp: new Date("2024-01-09T11:05:00"),
    images: [img2, img1],
  },
  {
    author: {
      name: "Sanika Jain",
      avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    content:
      "CallbackAI is the ultimate solution for efficient and effective claims management. With its advanced automation and sentiment analysis capabilities, it empowers agents to deliver exceptional customer experiences and achieve better business outcomes.",
    timestamp: new Date("2024-01-09T15:43:00"),
  },
];

export default function NewsFeed() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        <CreatePost />
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>

      {/* Right Sidebar */}
      <aside className="w-1/5 space-y-6 p-6">
        <Calendar className="rounded-lg border bg-white" />
        <Celebrations />
      </aside>
    </div>
  );
}
