import Styles from '~/Components/Navbar/Nav.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

export default function Nav() {
  const router = useRouter()

  return (
    <main className={Styles.section} id='navbar'>
      <div className={Styles.container}>
        <div className={Styles.navbar_container}>
          <div className={Styles.navbar_logo}>
            <p>Arnoldart</p>
          </div>
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
          </div>
        </div>
      </div>
    </main>
  )
}
