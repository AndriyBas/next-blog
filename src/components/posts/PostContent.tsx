import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import classes from "./PostContent.module.css";
import { Post } from "@/data/Post";

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({
  post: { title, image, content },
}) => {
  const imagePath = `/images/posts/${image}`;
  return (
    <article className={classes.content}>
      <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
      </header>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
