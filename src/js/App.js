
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Chess from "./pages/Chess";





function App() {
    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/chess"} element={<Chess/>}/>
                    <Route path={"*"} element={<NoPage/>}/>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App;
