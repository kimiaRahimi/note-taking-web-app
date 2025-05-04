'use client'
import { Provider } from "react-redux"
import Header from "./Header"
import store from "@/app/store"
import Notes from "./Notes"

const MainPage=()=> {
  return (
    <div className="headermain overflow-hidden h-full">
    <Provider store={store}>
    <Header/>
    </Provider>
    <Notes/>

    </div>
  )
}

export default MainPage