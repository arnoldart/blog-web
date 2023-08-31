import Styles from '~/Components/Navbar/Nav.module.scss';
import Link from 'next/link'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import ThemeButton from './ThemeButton';

export default function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const router = useRouter()

  return (
    <main className={Styles.section}>
      <div className={Styles.container}>
        <div>Arnoldart</div>
        <div className={Styles.navbar_menu}>
          <Link href={"/"} className={`${Styles.navbar_link}`}>
            <p className={router.pathname == "/" ? Styles.navbar_link_active : ""}>Home</p>
          </Link>
          <Link href={"/About"} className={Styles.navbar_link}>
            <p className={router.pathname == "/About" ? Styles.navbar_link_active : ""}>About Me</p>
          </Link>
          <Link href={"/Project"} className={Styles.navbar_link}>
            <p className={router.pathname == "/Project" ? Styles.navbar_link_active : ""}>Project</p>
          </Link>
          <Link href={"/Blog"} className={Styles.navbar_link}>
            <p className={router.pathname == "/Blog" ? Styles.navbar_link_active : ""}>Blog</p>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </main>
  )
}
