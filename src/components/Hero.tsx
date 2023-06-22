import Image from "next/image";
import classes from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/bas.png"
          alt="An image showing Bas"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Andrii</h1>
      <p>
        I blog about web development - especially frontend frameworks like Next
        or React.
      </p>
    </section>
  );
};

export default Hero;
