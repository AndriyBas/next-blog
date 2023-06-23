import AllPosts from "@/components/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

export const metadata = {
  title: "All posts about coding with Andrii",
  description:
    "Blog about best coding practices. Make the world better with software",
};

const AllPostsPage: React.FC = () => {
  const posts = getAllPosts();
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;
