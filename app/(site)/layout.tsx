import Navbar from "./_components/Navbar"

const HomeLayout = ({
  children
}: {children: React.ReactNode}) => {
  return (
    <div className="px-10">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout