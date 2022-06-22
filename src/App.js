import LayoutComponent from "./components/LayoutComponent";
import HomePage from "./pages/Home"
import EventDetail from "./pages/EventDetail";
import CategoryView from "./pages/CategoryView"
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
        </Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
