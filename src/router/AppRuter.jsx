import {  Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth/pages"



export const AppRuter = () => {
  return (
    <>


        <Routes>
            <Route path="login" element={<LoginPage/>} />
            <Route path="/*" element={<HeroesRoutes/>} />

        </Routes>

    </>
  )
}
