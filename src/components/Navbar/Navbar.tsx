import { useState } from "react";
import NavbarModalMobile from "./NavbarModalMobile";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

type Navbar = {
  currentPath: string;
};

export default function Navbar(data: Navbar) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <nav>
      <div className="flex items-center justify-between">
        <p className="text-ctp-text font-bold">ARNOLDART</p>
        <div className="sm:flex hidden gap-3 text-ctp-text font-bold">
          <a
            className={`${
              data.currentPath === "/" && "after:scale-x-100"
            } cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
            href="/"
          >
            Home
          </a>
          <a
            className={`${
              data.currentPath === "/project" && "after:scale-x-100"
            } cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-peach after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
            href="/project"
          >
            Project
          </a>
          <a
            className={`${
              data.currentPath === "/post" && "after:scale-x-100"
            } cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-pink after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
            href="/post"
          >
            Post
          </a>
          <a
            className={`${
              data.currentPath === "/aboutme" && "after:scale-x-100"
            } cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
            href="/aboutme"
          >
            Aboutme
          </a>
        </div>
        <div className="flex items-center gap-x-2">
          <FaLinkedin
            className="cursor-pointer"
            color="#c6d0f5"
            fontSize="1.5rem"
          />
          <FaGithubSquare
            className="cursor-pointer"
            color="#c6d0f5"
            fontSize="1.5rem"
          />
          <FaInstagramSquare
            className="cursor-pointer"
            color="#c6d0f5"
            fontSize="1.5rem"
          />
        </div>
        <div
          className="sm:hidden block gap-3 text-ctp-text font-bold"
          onClick={handleClick}
        >
          <p>Menu</p>
        </div>
      </div>
      <div className="sm:hidden block">
        <NavbarModalMobile open={open} currentPath={data.currentPath} />
      </div>
    </nav>
  );
}
