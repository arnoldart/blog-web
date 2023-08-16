import Styles from '~/styles/Nav.module.css';
import Link from 'next/link'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';

export default function Nav() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const router = useRouter()

  return (
    <main>
      <div className={Styles.container}>
        <div>Arnoldart</div>
        <div className={Styles.navbar_menu}>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/About"}>
            <p>About Me</p>
          </Link>
          <Link href={"/Project"}>
            <p>Project</p>
          </Link>
          <Link href={"/Blog"}>
            <p>Blog</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
