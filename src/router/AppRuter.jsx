import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../ui"
import { DCPage, MarvelPage } from "../heroes"
import { LoginPage } from "../auth/pages"



export const AppRuter = () => {
  return (
    <>

        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelPage/>} />
            <Route path="dc" element={<DCPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>

    </>
  )
}
