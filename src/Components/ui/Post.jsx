import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal, Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Button } from "./Button";

// Post Component
export function Post({ author, content, timestamp, images }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked((prev) => !prev);
  };

  const handleComment = () => {
    setCommentCount((prev) => prev + 1);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg max-w-8xl my-6">
      <div className="flex gap-4 ">
        <Avatar className="h-[70px] w-[70px]">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-gray-500">
            {formatDistanceToNow(timestamp, { addSuffix: true })}
          </div>
          <p className="mt-2">{content}</p>
          {/* Display images in smaller size */}
          {images && images.length > 0 && (
            <div className="mt-2 flex gap-2 overflow-x-auto">
              {images.slice(0, 5).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt="Post image"
                  className="w-48 h-48 object-cover rounded-lg"
                />
              ))}
              {images.length > 5 && (
                <div className="flex items-center justify-center w-48 h-48 bg-gray-200 rounded-lg">
                  <span className="text-gray-600">+{images.length - 5}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-4 border-t pt-4">
        <Button
          variant="ghost"
          size="sm"
          className={`text-gray-500 ${liked ? "text-red-500" : ""}`}
          onClick={handleLike}
        >
          <Heart
            className={`mr-2 h-5 w-5 ${liked ? "fill-current text-red-500" : ""}`}
          />
          {likeCount > 0 ? `Like (${likeCount})` : "Like"}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500"
          onClick={handleComment}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Comment ({commentCount})
        </Button>

        <Button variant="ghost" size="sm" className="text-gray-500">
          <Share2 className="mr-2 h-5 w-5" />
          Share
        </Button>
      </div>
    </div>
  );
}
