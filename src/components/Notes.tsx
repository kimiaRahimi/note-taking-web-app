import CreateNote from "./CreateNote"
import CreateSection from "./CreateSection"

const Notes = () => {
  return (
    <div className="notes h-full ">
        <CreateSection/>
        <CreateNote/>
    </div>
  )
}

export default Notes