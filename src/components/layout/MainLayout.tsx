import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container py-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}