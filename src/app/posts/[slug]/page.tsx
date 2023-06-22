import PostContent from "@/components/posts/PostContent";
import { getAllSlugs, getPostData } from "@/lib/posts-util";

export const revalidate = 60 * 10; // in sec, 10 mins

interface PostDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

const PostDetail: React.FC<PostDetailProps> = ({ params: { slug } }) => {
  const post = getPostData(slug);
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
};

export default PostDetail;
