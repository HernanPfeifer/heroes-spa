import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { MarvelPages } from "../pages/MarvelPages"
import { DcPages } from "../pages/DcPages"
import { SearchPages } from "../pages/SearchPages"
import { HeroPages } from "../pages/HeroPages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">

            <Routes>
                <Route path="marvel" element={<MarvelPages />}/> 
                <Route path="dc" element={<DcPages />}/> 

                <Route path="search" element={<SearchPages />}/> 
                <Route path="hero/:id" element={<HeroPages />}/> 
                
                <Route path="/" element={<Navigate to={'/marvel'} />}/> 
            </Routes>
        </div>

    </>
  )
}
