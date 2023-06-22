import { Post } from "@/data/Post";
import PostItem from "./PostItem";

interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  //   .grid {
  //   list-style: none;
  //   margin: 0;
  //   padding: 0;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  //   gap: 1.5rem;
  //   align-content: center;
  //   }

  return (
    <ul
      className="list-none m-0 p-0 grid gap-6 content-center"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
      }}
    >
      {posts.map((p) => (
        <PostItem key={p.slug} post={p} />
      ))}
    </ul>
  );
};

export default PostsGrid;
