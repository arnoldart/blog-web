import Nav from '../pages/Components/Nav/Nav'

export default function Layout({children}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}