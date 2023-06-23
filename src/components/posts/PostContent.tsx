import * as React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
// import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
// import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
// import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import classes from "./PostContent.module.css";
import { Post } from "@/data/Post";

// SyntaxHighlighter.registerLanguage("js", js);
// SyntaxHighlighter.registerLanguage("css", css);

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({
  post: { title, image, content },
}) => {
  const imagePath = `/images/posts/${image}`;

  const components = {
    // img(props: any) {
    //   return (
    //     <Image
    //       src={`/images/posts/${props.src}`}
    //       alt={props.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(props: any) {
      // console.log("node: ", props.node);
      if (props.node?.children[0]?.tagName === "img") {
        // console.log("imgProps: ", props.node.children);
        const image = props.node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      } else {
        return <p>{props.children}</p>;
      }
    },
    code({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      node: any;
      inline?: boolean;
      className?: string;
      children: any;
    }) {
      // codeProps:  {
      //   className: 'language-js',
      //   node: {
      //     type: 'element',
      //     tagName: 'code',
      //     properties: { className: [Array] },
      //     children: [ [Object] ],
      //     position: { start: [Object], end: [Object] }
      //   },
      //   children: [
      //     "const basics = 'Okay, that should not be too difficult actually';\n" +
      //       '\n' +
      //       'function printBasics() {\n' +
      //       '  console.log(basics):\n' +
      //       '}\n' +
      //       '\n' +
      //       'printBasics();\n'
      //   ]
      // }

      // TODO: does not work in Server components

      // const match = /language-(\w+)/.exec(className || "");
      // console.log("codeProps: ", match);
      // return match ? (
      //   <SyntaxHighlighter
      //     {...props}
      //     style={atomDark}
      //     language={match[1]}
      //     PreTag="div"
      //   >
      //     {String(children).replace(/\n$/, "")}
      //   </SyntaxHighlighter>
      // ) : (
      return (
        <code {...props} className={className}>
          {children}
        </code>
      );
      // );
    },
  };

  return (
    <article className={classes.content}>
      <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
      </header>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
