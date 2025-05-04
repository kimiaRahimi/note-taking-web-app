import MainPage from "@/components/MainPage"
import Sidebar from "@/components/Sidebar"


const page=()=> {
  return (
    <div className=" dashboard overflow-hidden h-full">
      {/* sidebar */}
      <Sidebar/>
      {/*main  */}
      <MainPage/>
    </div>
  )
}

export default page