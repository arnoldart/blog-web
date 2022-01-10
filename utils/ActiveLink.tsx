import { useRouter } from "next/dist/client/router"
import Link from "next/link"

type Test = {
  children:string,
}

export default function ActiveLink({children}:Partial<Test>) {
  const { asPath } = useRouter()

  console.log(useRouter())

  return (
    <>
      <p style={asPath ? {color: "black"} : {color: "black"}}>
        {children}
      </p>
    </>
  )
}