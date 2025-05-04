import ArrowDownIcon from "@/Icons/ArrowDownIcon"
import LastEditIcon from "@/Icons/LastEditIcon"
import TagsIcon from "@/Icons/TagsIcon"

const YourNotes = () => {
  return (
    <div className="border-r border-gray-300 h-full">
        <div className="flex flex-col gap-6 px-4 py-6">
          <span className="text-2xl font-bold">Untitled Note</span>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
            <TagsIcon/>
            <span className="text-sm">Tags</span>
            <div className="flex items-center">
              <input type="text" name="tags" id="tags" placeholder="Add or select tags..." className="outline-none py-2 text-sm text-gray-600 font-semibold" />
              <div className="px-2 py-1 border-l border-gray-300" ><ArrowDownIcon/></div>
            </div>
            </div>
            <div className="flex gap-3 items-center">
            <LastEditIcon/>
            <span className="text-sm">Last Edited</span>
            <span className=" text-sm text-gray-400 font-semibold">Not yet saved</span>
            </div>
            <div className="w-full border-b border-gray-200 pt-6"></div>
            <textarea name="note " id="note" className="h-full resize-none outline-none px-3 text-sm" placeholder="Start typing here..."></textarea>
          </div>
        </div>
    </div>
  )
}

export default YourNotes