import { useSelector } from "react-redux"
import CreateNote from "./CreateNote"
import CreateSection from "./CreateSection"
import { IRootState } from "./types"

const Notes = () => {
  const {isShowCreateNote } = useSelector((state:IRootState)=>state.showCreateNote)


  return (
    <div className="notes h-full ">
        <CreateSection/>
        {isShowCreateNote  && <CreateNote/>}
    </div>
  )
}

export default Notes