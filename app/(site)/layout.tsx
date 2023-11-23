import Navbar from "./_components/Navbar"

const HomeLayout = ({
  children
}: {children: React.ReactNode}) => {
  return (
    <div className="max-w-[1400px] w-full my-0 mx-auto px-[32px]">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout