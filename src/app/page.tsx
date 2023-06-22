import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import { getFeaturedPosts } from "@/lib/posts-util";

// export const revalidate = 60 * 60; // in seconds, 1 hour

export default function Home() {
  const posts = getFeaturedPosts();
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
