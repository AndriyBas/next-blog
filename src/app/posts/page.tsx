import AllPosts from "@/components/AllPosts";
import { DUMMY_POSTS } from "../page";

const AllPostsPage: React.FC = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
