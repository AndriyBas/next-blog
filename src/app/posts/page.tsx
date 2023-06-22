import AllPosts from "@/components/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

const AllPostsPage: React.FC = () => {
  const posts = getAllPosts();
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;
