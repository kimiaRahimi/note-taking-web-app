import { useDispatch} from "react-redux"
import { setShowCreateNote } from "@/features/ShowCreateNoteSlice"

const CreateSection = () => {
const dispatch = useDispatch();


  return (
    <div className="border-r border-gray-300 p-5">
     <div className="flex flex-col gap-3">
     <button className="bg-blue-600 rounded-md text-white px-4 py-3 text-sm font-semibold flex justify-center " onClick={() => dispatch(setShowCreateNote(true))}>+ Create New Note </button>
     <div className="bg-gray-100 rounded-md px-4 py-2 text-base font-semibold ">Untitled Note</div>
     </div>
    </div>
  )
}

export default CreateSection