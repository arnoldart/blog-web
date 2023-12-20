import Navbar from "./_components/Navbar"

const HomeLayout = ({
  children
}: {children: React.ReactNode}) => {
  return (
    <div className="max-w-[1400px] w-full my-0 mx-auto px-[0] md:px-[32px]">
      <Navbar />
      <div className="px-[32px] md:px-[0] z-[1]">
        {children}
      </div>
    </div>
  )
}

export default HomeLayout