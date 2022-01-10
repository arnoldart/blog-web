import Styles from '../styles/Nav.module.css';
import Link from 'next/link'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';

export default function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const router = useRouter()

  return (
    <>
      <main className="container">
        <nav className={Styles.Nav}>
          <div className={Styles.NavDevMenu}>
            <Link href="/" passHref>
              <p className={Styles.NavDev}>Arnold</p>
            </Link>
            <div onClick={handleClick} className={Styles.hamburger}>
              <motion.div
                animate={{
                  y: click ? 8 : [8, 8, 0],
                  rotate: click ? [0, 0, 1125] : [1125, 0 , 0],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={Styles.topAndBottomHamburger}
                onClick={handleClick}
              >
              </motion.div>
              <motion.div
                animate={{
                  opacity: click ? 0 : [0, 0, 1]
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={Styles.MiddleHamburger}
                onClick={handleClick}
              >
              </motion.div>
              <motion.div
                animate={{
                  y: click ? -8 : [-8, -8, 0],
                  rotate: click ? [0, 0, 1215] : [1215, 0, 0]
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={Styles.topAndBottomHamburger}
                onClick={handleClick}
              >
              </motion.div>
            </div>
          </div>
          <ul className={click ? "NavMenuList active" : "NavMenuList" }>
            <li className={Styles.ListMenu}>
              <Link href ="/" passHref>
                <p className={router.pathname == "/" ? Styles.activeLink : ""}>Home</p>
              </Link>
            </li>
            <li className={Styles.ListMenu}>
              <Link href ="/Post" passHref>
                <p className={router.pathname == "/Post" ? Styles.activeLink : ""}>Post</p>
              </Link>
            </li>
            <li className={Styles.ListMenu}>
              <Link href ="/Project" passHref>
                <p className={router.pathname == "/Project" ? Styles.activeLink : ""}>Project</p>
              </Link>
            </li>
            <li className={Styles.ListMenu}>
              <Link href ="/About" passHref>
                <p className={router.pathname == "/About" ? Styles.activeLink : ""}>About</p>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}
