import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="container flex items-center h-16 gap-4">
        <div className="flex-1 flex items-center gap-4">
          <h1 className="text-xl font-bold text-primary">MetaMind</h1>
          <div className="max-w-md flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="w-full pl-10" placeholder="Search communities and posts..." />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>
      </div>
    </nav>
  );
}