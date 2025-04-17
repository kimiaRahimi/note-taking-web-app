'use client'
import Image from "next/image"
import noteIcon from "@/assets/logo-DWbvI4_L.svg"
import NoteOptions from "./NoteOptions"
const Sidebar=()=> {

  return (
    <div className="flex flex-col gap-8 h-screen py-7 px-5 border-r border-gray-300">
        <Image src={noteIcon} alt="Icon"/>
        <NoteOptions/>
    </div>
  )
}

export default Sidebar