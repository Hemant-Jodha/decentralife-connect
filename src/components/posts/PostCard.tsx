import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowBigUp, ArrowBigDown, MessageSquare, Share2 } from "lucide-react";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  community: string;
  votes: number;
  comments: number;
  timeAgo: string;
}

export default function PostCard({
  title,
  content,
  author,
  community,
  votes,
  comments,
  timeAgo,
}: PostCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow animate-scale-in">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-1">
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
            <ArrowBigUp className="h-6 w-6" />
          </Button>
          <span className="font-medium">{votes}</span>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-destructive">
            <ArrowBigDown className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <a href={`/c/${community}`} className="font-medium text-primary hover:underline">
              c/{community}
            </a>
            <span>•</span>
            <span>Posted by {author}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 mb-4">{content}</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-500">
              <MessageSquare className="h-4 w-4 mr-2" />
              {comments} Comments
            </Button>
            <Button variant="ghost" className="text-gray-500">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}