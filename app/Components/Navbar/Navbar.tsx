"use client"
import Styles from '~/app/Components/Navbar/Navbar.module.scss';
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AiFillGithub } from 'react-icons/ai'

export default function Nav() {
  const [active, setActive] = useState(false)
  const params = usePathname()

  return (
    <section className={Styles.section} id='navbar'>
      <div className={`${Styles.container} ${params == '/' && Styles.container_home}`}>
        <div className={Styles.navbar_container}>
          <div className={Styles.navbar_logo}>
            <Link href={'/'}>
              <p>Arnoldart</p>
            </Link>
            <div
              onClick={() => setActive(!active)}
              className={Styles.button_mobile_menu}
            >
              <span className={`${Styles.line_1} ${active && Styles.line_1_active}`}></span>
              <span className={`${Styles.line_2} ${active && Styles.line_2_active}`}></span>
              <span className={`${Styles.line_3} ${active && Styles.line_3_active}`}></span>
            </div>
          </div>
          <div className={`${Styles.navbar_menu} ${ active ? Styles.navbar_menu_active : Styles.navbar_menu_inactive}`}>
            <Link href={"/"} className={`${Styles.navbar_link}`}>
              <p className={`${params == "/" && Styles.navbar_link_active}`}>Home</p>
            </Link>
            <Link href={"/Project"} className={Styles.navbar_link}>
              <p className={`${params.split('/')[1] == "Project" || params.split('/')[1] == 'Article' && Styles.navbar_link_active}`}>Project</p>
            </Link>
            <Link href={"/Blog"} className={Styles.navbar_link}>
              <p className={`${params == "/Blog" || params.split('/')[1] == 'Blog' && Styles.navbar_link_active}`}>Blog</p>
            </Link>
            <Link href={"/About"} className={Styles.navbar_link}>
              <p className={`${params == "/About" && Styles.navbar_link_active}`}>About Me</p>
            </Link>
            <Link href={"https://github.com/arnoldart/"} className={Styles.navbar_link}>
              <AiFillGithub size={25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
