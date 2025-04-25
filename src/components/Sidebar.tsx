'use client'
import Image from "next/image"
import noteIcon from "@/assets/logo-DWbvI4_L.svg"
import NoteOptions from "./NoteOptions"
import { Provider } from "react-redux"
import store from "@/app/store"
const Sidebar=()=> {

  return (
    <div className="flex flex-col gap-8 h-screen py-7 px-5 border-r border-gray-300">
        <Image src={noteIcon} alt="Icon"/>
        <div className="flex flex-col gap-3">
        <Provider store={store}>
        <NoteOptions/>
        </Provider>
        <div className="w-full h-[1px] bg-gray-200"></div>
        <span className="text-gray-400 text-sm font-semibold">Tags</span>
        </div>
    </div>
  )
}

export default Sidebar