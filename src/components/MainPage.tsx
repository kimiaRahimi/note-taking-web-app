'use client'
import { Provider } from "react-redux"
import Header from "./Header"
import store from "@/app/store"
import Notes from "./Notes"

const MainPage=()=> {
  return (
    <div className="headermain">
    {/* header */}
    <Provider store={store}>
    <Header/>
    </Provider>
    {/* Notes */}
    <Notes/>

    </div>
  )
}

export default MainPage