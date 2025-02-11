import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    console.log(window.location.pathname)
  }, [])

  const handleClick = () => setIsOpen(!isOpen)

  console.log(isOpen)

  return (
    <header className="fixed w-full bg-ctp-mantle/50 backdrop-blur-sm border-b border-ctp-surface0 z-50">
      <nav className={isOpen ? "h-screen max-w-5xl mx-auto px-6 py-4" : "max-w-5xl mx-auto px-6 py-4"}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-ctp-mauve font-bold">
            Arnoldart
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex gap-6">
              <a
                href="/about"
                className={`${
                  currentPath === "/about" && "after:scale-x-100 text-ctp-green"
                } cursor-pointer relative w-fit block after:block after:content-[''] text-ctp-text hover:text-ctp-green after:absolute after:h-[3px] after:bg-ctp-green after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              >
                About
              </a>
              <a
                href="/projects"
                className={`${
                  currentPath === "/projects" && "after:scale-x-100"
                } transition-colors text-ctp-text hover:text-ctp-pink cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-pink after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              >
                Projects
              </a>
              <a
                href="/blog"
                className={`${
                  currentPath === "/blog" && "after:scale-x-100"
                } cursor-pointer relative w-fit block after:block after:content-[''] text-ctp-text hover:text-ctp-yellow after:absolute after:h-[3px] after:bg-ctp-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              >
                Blog
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            <a
              href="https://github.com/arnoldart"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/jedidta-adoni-saputra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/jedidta_adoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col mt-4 md:hidden gap-4 bg-ctp-mantle p-4 rounded-lg shadow-md">
            <a
              href="/about"
              className={`${
                currentPath === "/about" && "after:scale-x-100 text-ctp-green"
              } cursor-pointer relative w-fit block after:block after:content-[''] text-ctp-text hover:text-ctp-green after:absolute after:h-[3px] after:bg-ctp-green after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-300 after:origin-left`}
            >
              About
            </a>
            <a
              href="/projects"
              className={`transition-colors text-ctp-pink cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-ctp-pink after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-300 after:origin-left ${
                currentPath === "/projects" && "text-ctp-pink after:scale-x-100"
              }`}
              onClick={handleClick}
            >
              Projects
            </a>
            <a
              href="/blog"
              className={`${
                currentPath === "/blog" && "after:scale-x-100"
              } cursor-pointer relative w-fit block after:block after:content-[''] text-ctp-text hover:text-ctp-yellow after:absolute after:h-[3px] after:bg-ctp-yellow after:w-full after:scale-x-0 after:scale-x-100 after:transition after:duration-300 after:origin-left`}
            >
              Blog
            </a>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/arnoldart"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/jedidta-adoni-saputra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/jedidta_adoni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-ctp-surface0 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );

};

export default Navbar;
