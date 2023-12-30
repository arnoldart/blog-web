"use client"

import { ModeToggle } from "~/components/mode-toggle"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useScrollTop } from "~/hooks/use-scroll-top"
import { cn } from "~/lib/utils"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const menuRef = useRef(null);

  const handleMenuItemClick = () => setClick(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !(menuRef.current as any).contains(e.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    // Attach an event listener to handle outside clicks
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  // const scrolled = useScrollTop()

  return (
    <div id="navbar" className="relative md:flex justify-between block md:py-5">
      <div className="flex justify-between md:px-0 px-5 md:py-0 py-5">
        <p style={{ zIndex: "5" }}>Arnoldart</p>
        <p onClick={handleClick} style={{ zIndex: "5" }} className="md:hidden block">menu</p>
      </div>
      <div className="md:block hidden">
        <ul className="flex items-center gap-x-5">
          <li>
            <Link href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/Project'>
              Project
            </Link>
          </li>
          <li>
            <Link href="/Blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/AboutMe">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden block">
        {click && (
          <div className="flex flex-col justify-center items-center bg-gray-400 absolute h-screen w-full top-0">
            <ul className="text-center">
              <li>
                <Link href='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/Project'>
                  Project
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/AboutMe">
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar