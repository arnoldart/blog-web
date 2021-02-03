import Nav from '../pages/Components/Nav/Nav'
import {tw} from 'twind'

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={tw `mt-10`}>
        {children}
      </main>
    </>
  )
}