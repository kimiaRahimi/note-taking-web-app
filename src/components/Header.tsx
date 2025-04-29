"use client"
import DarkModeIcon from "@/Icons/DarkModeIcon"
import GoBackIcon from "@/Icons/GoBackIcon"
import SearchIcon from "@/Icons/SearchIcon"
import { useSelector } from "react-redux"
import { IRootState } from "./types"
import Link from "next/link"

const Header=()=> {

const {activeStatus} = useSelector((state:IRootState)=>state.active)


  return (
    <div className="w-full border-b border-gray-300 flex justify-between items-center px-6">
        <div>
            <span className="text-2xl text-black font-bold">{activeStatus.allNotes ? "All Notes" : "Archived Notes"}</span>
        </div>
        <div className="flex gap-2">
            <div className="flex items-center">
                <SearchIcon />
                <input type="search" name="search" id="search" placeholder="Search by title, content, or tags ..." className="rounded-lg border border-gray-300 py-2 px-10 w-[21rem] placeholder-neutral-500 outline-none" />
            </div>
            <div className="py-2 px-3 border border-gray-300 rounded-lg">
                <DarkModeIcon/>
            </div>
            <div className="py-2 px-3 border border-gray-300 rounded-lg">
                <Link href={'/'}><GoBackIcon/></Link>
            </div>
        </div>
    </div>
  )
}

export default Header