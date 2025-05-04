import NoteButtons from "./NoteButtons"
import YourNotes from "./YourNotes"

const CreateNote = () => {
  return (
    <div className="createnote">
        <YourNotes/>
        <NoteButtons/>
    </div>
  )
}

export default CreateNote