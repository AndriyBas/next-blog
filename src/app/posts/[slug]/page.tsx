import PostContent from "@/components/posts/PostContent";
import { getAllSlugs, getPostData } from "@/lib/posts-util";
import { cache } from "react";

export const revalidate = 60 * 10; // in sec, 10 mins

interface PostDetailProps {
  params: {
    slug: string;
  };
}

const getData = cache((slug: string) => {
  return getPostData(slug);
});

export async function generateMetadata({ params: { slug } }: PostDetailProps) {
  const post = getData(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: `/images/posts/${post.image}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

const PostDetail: React.FC<PostDetailProps> = ({ params: { slug } }) => {
  const post = getData(slug);
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
};

export default PostDetail;
