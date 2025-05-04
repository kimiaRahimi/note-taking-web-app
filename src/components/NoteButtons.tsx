import ArchiveIcon from "@/Icons/ArchiveIcon"
import DeleteAllIcon from "@/Icons/DeleteAllIcon"
import DeleteIcon from "@/Icons/DeleteIcon"

const NoteButtons = () => {
const buttons = [
    {
        title:"Archive Note",
        icon:<ArchiveIcon/>
    },
    {
        title:"Delete Note",
        icon:<DeleteIcon/>
    },
    {
        title:"Delete All Notes",
        icon:<DeleteAllIcon/>
    }
]
  return (
    <div>
        <div className="px-4 py-6 flex flex-col gap-4">
            {buttons.map((item,index)=>(
                <div key={index} className="p-3 rounded-md border border-gray-300 flex gap-2 hover:bg-gray-100">
                    <div>{item.icon}</div>
                    <span className="text-sm font-medium">{item.title}</span>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default NoteButtons