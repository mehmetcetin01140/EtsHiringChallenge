import LayoutComponent from "./components/LayoutComponent";
import HomePage from "./components/HomePage"
import EventDetail from "./components/EventDetail";
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
        </Route>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
