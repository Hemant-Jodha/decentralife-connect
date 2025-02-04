import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CommunityCardProps {
  name: string;
  description: string;
  members: number;
  image?: string;
}

export default function CommunityCard({
  name,
  description,
  members,
  image,
}: CommunityCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
          {name[0]}
        </div>
        <div>
          <h3 className="font-semibold text-lg">c/{name}</h3>
          <p className="text-sm text-gray-500">{members.toLocaleString()} members</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      <Button className="w-full">Join Community</Button>
    </Card>
  );
}