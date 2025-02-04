import PostCard from "./PostCard";

const MOCK_POSTS = [
  {
    title: "Introducing Nexus: A New Kind of Social Platform",
    content: "We're excited to announce the launch of Nexus, a decentralized social platform that combines the best features of your favorite social networks.",
    author: "nexus_team",
    community: "announcements",
    votes: 1420,
    comments: 284,
    timeAgo: "2 hours ago",
  },
  {
    title: "The Future of Decentralized Social Media",
    content: "Let's discuss how decentralized platforms are changing the way we connect and share online. What are your thoughts on the future of social media?",
    author: "web3_enthusiast",
    community: "technology",
    votes: 892,
    comments: 156,
    timeAgo: "4 hours ago",
  },
];

export default function PostList() {
  return (
    <div className="space-y-4">
      {MOCK_POSTS.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
}