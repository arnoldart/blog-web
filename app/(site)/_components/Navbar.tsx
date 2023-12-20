"use client"

import { ModeToggle } from "~/components/mode-toggle"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useScrollTop } from "~/hooks/use-scroll-top"
import { cn } from "~/lib/utils"

const Navbar = () => {
  const [click, setClick] = useState(true)
  const handleClick = () => setClick(!click)
  // const scrolled = useScrollTop()

  return (
    <div>
      <div className="block md:flex items-center justify-between py-5">
        <div className="flex items-center justify-between md:w-auto w-full static z-50">
          <Link href='/'>
            <p>Arnoldart</p>
          </Link>
          <p onClick={handleClick} className="md:hidden block">menu</p>
        </div>
        <ul className={`${click ? 'flex-row' : 'flex-col h-screen justify-center items-center absolute m-auto w-full bg-gray-700 top-0 z-40'} flex items-center gap-x-3`}>
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
        {/* <div className={cn("absolute w-full h-screen bg-slate-500 top-0 opacity-0 transition-all ease-out duration-300", click && "opacity-1")}>
          adasd
        </div> */}
      </div>
    </div>
  )
}

export default Navbar