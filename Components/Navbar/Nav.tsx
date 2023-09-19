import Styles from '~/Components/Navbar/Nav.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

export default function Nav() {
  const router = useRouter()
  const [active, setActive] = useState(false)

  return (
    <section className={Styles.section} id='navbar'>
      <div className={Styles.container}>
        <div className={Styles.navbar_container}>
          <div className={Styles.navbar_logo}>
            <p>Arnoldart</p>
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
              <p className={`${router.pathname == "/" && Styles.navbar_link_active}`}>Home</p>
            </Link>
            <Link href={"/About"} className={Styles.navbar_link}>
              <p className={`${router.pathname == "/About" && Styles.navbar_link_active}`}>About Me</p>
            </Link>
            <Link href={"/Project"} className={Styles.navbar_link}>
              <p className={`${router.pathname == "/Project" && Styles.navbar_link_active}`}>Project</p>
            </Link>
            <Link href={"/Blog"} className={Styles.navbar_link}>
              <p className={`${router.pathname == "/Blog" && Styles.navbar_link_active}`}>Blog</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
