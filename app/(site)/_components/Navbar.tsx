"use client"

import { ModeToggle } from "~/components/mode-toggle"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center justify-between md:w-auto w-full">
          <p>Arnoldart</p>
          <p onClick={() => handleClick} className="md:hidden block">menu</p>
        </div>
        <ul className="md:flex items-center gap-x-3 hidden">
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
        <div className="md:flex hidden items-center">
          <Button size="icon" variant="ghost">
            <Link target="_blank" href="https://www.linkedin.com/in/jedidta-adoni-saputra/">
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="icon" variant="ghost">
            <Link target="_blank" href="https://github.com/arnoldart/">
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
      {/* <div className="h-screen w-full  justify-center items-center bg-slate-400 flex md:hidden">
        <ul className="md:hidden items-center gap-y-3 justify-center flex flex-col">
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
        <div className="md:hidden flex items-center justify-center">
          <Button size="icon" variant="ghost">
            <Link target="_blank" href="https://www.linkedin.com/in/jedidta-adoni-saputra/">
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="icon" variant="ghost">
            <Link target="_blank" href="https://github.com/arnoldart/">
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div> */}
    </div>
  )
}

export default Navbar