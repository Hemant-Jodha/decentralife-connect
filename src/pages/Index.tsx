import MainLayout from "@/components/layout/MainLayout";
import CreatePost from "@/components/posts/CreatePost";
import PostList from "@/components/posts/PostList";
import CommunityCard from "@/components/communities/CommunityCard";
import { AnimatedWords } from "@/components/ui/animated-words";

const TRENDING_COMMUNITIES = [
  {
    name: "technology",
    description: "The latest in tech news and discussions about the future of technology.",
    members: 125000,
  },
  {
    name: "science",
    description: "A community dedicated to science news and scientific discussion.",
    members: 98000,
  },
];

export default function Index() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CreatePost />
          <PostList />
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-lg">Trending Communities</h2>
          {TRENDING_COMMUNITIES.map((community) => (
            <CommunityCard key={community.name} {...community} />
          ))}
          <div className="mt-8">
            <h2 className="font-semibold text-lg mb-4">Trending Concepts</h2>
            <AnimatedWords />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}