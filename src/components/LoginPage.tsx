import Image from "next/image"
import noteicon from "@/assets/logo-DWbvI4_L.svg"

const LoginPage = ()=> {
  return (
    <div className="flex justify-center items-center bg-gray-200 w-full h-screen">
        <div className="bg-white flex flex-col rounded-md gap-4 py-9 px-14 items-center">
          <Image src={noteicon} alt="Icon"/>
          <div className="flex flex-col gap-1 items-center">
          <span className="text-2xl font-bold">Welcome to Note!</span>
          <span className="text-base text-gray-600">Please log to continue</span>
          </div>
          <form action="" className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder="email@example.com" className="p-2 border border-gray-300 rounded-md" />
            <label htmlFor="">Password</label>
            <input type="text" placeholder="At least 8 characters in total" className="p-2 border border-gray-300 rounded-md" />
          </form>
        </div>
    </div>
  )
}

export default LoginPage