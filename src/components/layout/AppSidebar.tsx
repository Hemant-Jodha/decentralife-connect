import { Home, Users, Compass, Bookmark } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const menuItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Communities", icon: Users, url: "/communities" },
  { title: "Explore", icon: Compass, url: "/explore" },
  { title: "Saved", icon: Bookmark, url: "/saved" },
];

const communities = [
  { name: "Technology", url: "/c/technology" },
  { name: "Science", url: "/c/science" },
  { name: "Art", url: "/c/art" },
  { name: "Music", url: "/c/music" },
];

export default function AppSidebar() {
  return (
    <div className="w-full border-b bg-white">
      <div className="container py-2">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.title === "Communities" ? (
                  <>
                    <NavigationMenuTrigger>
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[200px]">
                        {communities.map((community) => (
                          <a
                            key={community.name}
                            href={community.url}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {community.name}
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href={item.url}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}