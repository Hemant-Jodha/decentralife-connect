import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Image, Link } from "lucide-react";

export default function CreatePost() {
  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <Input className="flex-1" placeholder="Create a post" />
        <Button variant="ghost" size="icon">
          <Image className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <Link className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </Card>
  );
}