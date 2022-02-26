import { MainCarousel } from "./components/main/main";
import { SectionProducts } from "./components/section/section";
import { NavBarOne } from "./components/navBar/navBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Mascotas } from "./components/navBar/mascotas"
import { Servicios } from "./components/navBar/servicios"
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { Cart } from "./components/Cart/cart";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { Marcas } from "./components/navBar/marcas";
import { Puppisone } from "./components/navBar/puppisone";
import { Sucursales } from "./components/navBar/sucursales";

function App() {
  return (

      <CartProvider>
        <BrowserRouter>
        <NavBarOne/>
        <MainCarousel/>
        <Routes>
          <Route path="/" element={<SectionProducts/> }/>
          <Route path='/productos/:catId' element={ <SectionProducts/> }/>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path="/mascotas" element={ <Mascotas /> } />
          <Route path="/servicios" element={ <Servicios /> } />
          <Route path='/cart' element={ <Cart/> } />
          <Route path="/marcas" element={ <Marcas/> }   />
          <Route path="/puppisone" element={ <Puppisone/> }   />
          <Route path="/sucursales" element={ <Sucursales/> }   />
          <Route path='*' element={ <Navigate to='/'/> }/>
         </Routes>
       {/* <Footer/> */}
        </BrowserRouter>
      
      </CartProvider>
  )
}

export default App;
