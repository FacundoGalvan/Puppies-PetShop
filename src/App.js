import { MainCarousel } from "./components/main/main";
import { SectionProducts } from "./components/section/section";
import { NavBarOne } from "./components/navBar/navBar";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { Cart } from "./components/Cart/cart";
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { RoyalCanin } from "./components/navBar/royalcanin";
import { Purina } from "./components/navBar/purina";
import { OldPrince } from "./components/navBar/oldprince";
import { VitalCan } from "./components/navBar/vitalcan"
import { Checkout } from "./components/Checkout/checkout"

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
          <Route path='/cart' element={ <Cart/> } />
          <Route path="/royalcanin" element={ <RoyalCanin/> }   />
          <Route path="/vitalcan" element={ <VitalCan/> }   />
          <Route path="/purina" element={ <Purina/> }   />
          <Route path="/oldprince" element={ <OldPrince /> } />
          <Route path='*' element={ <Navigate to='/'/> }/>
          <Route path='/checkout' element={ <Checkout/> } />
         </Routes>
       {/* <Footer/> */}
        </BrowserRouter>
      
      </CartProvider>
  )
}

export default App;
