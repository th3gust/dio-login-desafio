import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import SignUp from "../pages/SignUp"
import SignIn from "../pages/SignIn"
import Feed from "../pages/Feed"


const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/signup"
                    element={<SignUp/>}
                />
                <Route
                    path="/signin"
                    element={<SignIn/>}
                />
                <Route
                    path="/feed"
                    element={<Feed/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes