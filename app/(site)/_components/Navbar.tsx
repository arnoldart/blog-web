import { ModeToggle } from "~/components/mode-toggle"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "~/components/ui/button"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-5">
      <div>
        <p>Arnoldart</p>
      </div>
      <ul className="flex items-center gap-x-3">
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
      <div className="flex items-center">
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
  )
}

export default Navbar