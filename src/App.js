import LayoutComponent from "./components/LayoutComponent";
import HomePage from "./pages/Home"
import EventDetail from "./pages/EventDetail";
import CategoryView from "./pages/CategoryView"
import LocationView from "./pages/LocationView"
import AboutUs from "./pages/AboutUs"
import Expired from "./pages/Expired"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.scss"
function App() {

  return (
    <BrowserRouter >
    <Routes >
        <Route path="/*" element={<LayoutComponent/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="etkinlik/:name" element={<EventDetail/>}/>
        <Route path="kategori/:name" element={<CategoryView/>}/>
        <Route path="lokasyon/:name" element={<LocationView/>}/>
        <Route path="hakkimizda" element={<AboutUs/>}/>
        <Route path="gecmisetkinlik" element={<Expired/>}/>
        </Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
