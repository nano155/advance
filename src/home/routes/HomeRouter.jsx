import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { AboutPage, ContactPage, HomePage } from "../pages"

export const HomeRouter = () => {
  return (
    <>
    <NavBar/>
    <div className="h-full py-20 bg-slate-900">
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>   
    </Routes>
    </div>
    </>
  )
}