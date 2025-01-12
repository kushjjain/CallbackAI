import { useState } from "react";
import { Paperclip } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Button } from "./Button";
import { Post } from "./Post";  // Import the Post component

export function CreatePost() {
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setImages(fileArray);
  };

  // Function to handle post submission
  const handlePostSubmit = () => {
    const newPost = {
      author: {
        name: "Jai Sanghvi",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      content,
      timestamp: new Date(),
      images,
    };

    setPosts([newPost, ...posts]); // Add new post at the top
    setContent(""); // Reset content
    setImages([]); // Reset images
  };

  return (
    <div>
      <div className="rounded-lg bg-white p-6 shadow-lg max-w-8xl">
        <div className="flex gap-4 items-center">
          <Avatar className="h-[70px] w-[70px]">
            <AvatarImage src="https://randomuser.me/api/portraits/men/1.jpg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <input
              type="text"
              placeholder="How was the client's call?"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="mt-3 flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-gray-600 hover:bg-gray-100 px-5 py-3"
                  onClick={() => document.getElementById("fileInput").click()} // Trigger file input click
                >
                  <Paperclip className="mr-2 h-4 w-4" />
                  Attach
                </Button>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
              <Button
                size="lg"
                className="bg-purple-600 text-white w-1/6 hover:bg-purple-700  text-[18px] rounded-md"
                onClick={handlePostSubmit}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Render posts using the Post component */}
      {posts.map((post, index) => (
        <Post key={index} author={post.author} content={post.content} timestamp={post.timestamp} images={post.images} />
      ))}
    </div>
  );
}
