import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import Notfound from "./pages/Notfound";
import BlogDetalles from "./pages/BlogDetalles";

const App = () => {
  return <>
    <Navbar />
   
 
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
      <Route element={<Inicio/>} index></Route>
      <Route element={<Contacto />} path="/contacto"></Route>
        <Route element={<Blog />} path="/blog"></Route>
        <Route path="/blog/:id" element={<BlogDetalles />} />
      </Route>
      <Route element={<Notfound />} path="*"></Route>
         
      </Routes>
   
  </>;
}
export default App;