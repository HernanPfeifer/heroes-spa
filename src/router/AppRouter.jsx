import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes/index";
import { LoginPages } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export default function AppRouter() {
  
  
    return (
    <>

        <Routes>

            <Route path="login" element={ <PublicRoute> <LoginPages /> </PublicRoute> }/> 

            <Route path="/*" element={<PrivateRoute> <HeroesRoutes /> </PrivateRoute>}/>

        </Routes>
    
    </>
  )
}
