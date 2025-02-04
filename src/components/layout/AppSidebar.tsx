import { Home, Users, Compass, Bookmark } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>My Communities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {communities.map((community) => (
                <SidebarMenuItem key={community.name}>
                  <SidebarMenuButton asChild>
                    <a href={community.url}>{community.name}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}