import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import { Post } from "@/data/Post";

export const DUMMY_POSTS: Post[] = [
  {
    slug: "next-intro-1",
    title: "Introduction to Next 1",
    image: "next-intro.jpg",
    date: "2023-06-22",
    excerpt:
      "NextJS is the React framework for production. It makes building sites super easy and scale worldwide",
  },
  {
    slug: "next-intro-2",
    title: "Introduction to Next 2",
    image: "next-intro.jpg",
    date: "2023-06-22",
    excerpt:
      "NextJS is the React framework for production. It makes building sites super easy and scale worldwide",
  },
  {
    slug: "next-intro-3",
    title: "Introduction to Next 3",
    image: "next-intro.jpg",
    date: "2023-06-22",
    excerpt:
      "NextJS is the React framework for production. It makes building sites super easy and scale worldwide",
  },
  {
    slug: "next-intro-4",
    title: "Introduction to Next 4",
    image: "next-intro.jpg",
    date: "2023-06-22",
    excerpt:
      "NextJS is the React framework for production. It makes building sites super easy and scale worldwide",
  },
  {
    slug: "next-intro-5",
    title: "Introduction to Next 5",
    image: "next-intro.jpg",
    date: "2023-06-22",
    excerpt:
      "NextJS is the React framework for production. It makes building sites super easy and scale worldwide",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
