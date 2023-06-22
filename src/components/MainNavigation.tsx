import Link from "next/link";
import Logo from "./Logo";

const MainNavigation: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-0 px-4 w-full h-24 bg-[var(--color-grey-900)]">
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul className="list-none flex align-baseline m-0 p-0 gap-4 text-gray-100 text-lg md:text-xl">
          <li className="hover:text-gray-300">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
