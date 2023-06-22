import { Post } from "@/data/Post";
import PostsGrid from "./posts/PostsGrid";

interface AllPostsProps {
  posts: Post[];
}

const AllPosts: React.FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className="w-[90%] max-w-[60rem] mx-auto my-8">
      <h1 className="text-2xl md:text-4xl text-gray-800 text-center mb-8">
        All posts
      </h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
