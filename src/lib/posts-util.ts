import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { Post } from "@/data/Post";

const postsDir = path.join(process.cwd(), "content");

export function getAllSlugs(): string[] {
  const postsFiles = fs.readdirSync(postsDir);
  return postsFiles.map((f) => f.replace(/\.md$/, ""));
}

export function getPostData(slugOrFileName: string): Post {
  const slug = slugOrFileName.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data, content } = matter(fileContent);
  const postData: Post = {
    slug,
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content,
  };
  return postData;
}

export function getAllPosts(): Post[] {
  const allSlugs = getAllSlugs();
  const posts = allSlugs.map((file) => getPostData(file));
  // sort most recent to oldest
  const sorted = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return sorted;
}

export function getFeaturedPosts(): Post[] {
  return getAllPosts().filter((p) => p.isFeatured);
}
