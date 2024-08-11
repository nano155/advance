import { Navigate, Route, Routes } from "react-router-dom"
import { HomeRouter } from "../home/routes/HomeRouter"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<HomeRouter/>} /> 
        <Route path='*' element={<Navigate to='/'/>}/>      
    </Routes>
  )
}