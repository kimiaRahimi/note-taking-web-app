import Image from "next/image"
import noteicon from "@/assets/logo-DWbvI4_L.svg"
import Link from "next/link"

const LoginPage = ()=> {
  return (
    <div className="flex justify-center items-center bg-gray-100 w-full h-screen">
        <div className="bg-white flex flex-col rounded-md gap-6 py-12 px-14 w-4/12 items-center border border-gray-200">
          <Image src={noteicon} alt="Icon"/>
          <div className="flex flex-col gap-1 items-center">
          <span className="text-2xl font-bold">Welcome to Note!</span>
          <span className="text-base text-gray-600">Please log to continue</span>
          </div>
          <form action="" className="flex flex-col w-full gap-5">
            <div className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="email@example.com" className="p-2 border border-gray-300 rounded-md" required />
            </div>
            <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="At least 8 characters in total" className="p-2 border border-gray-300 rounded-md" required />
            </div>
            <Link href={"/apps/Dashboard"} className="bg-blue-600 text-white w-full rounded-sm p-3 font-semibold flex justify-center items-center cursor-pointer">Log in</Link>
          </form>
        </div>
    </div>
  )
}

export default LoginPage