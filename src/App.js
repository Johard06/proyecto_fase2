
import './App.css';
import Barra from './componentes/barra';
import Footer from './componentes/footer';
import { Routes, Route } from 'react-router-dom';
import Inicio from './inicio/inicio';
import Alta from './alta/alta';
import IniciarSesion from './iniciarSesion/iniciarSesion';
import Registrate from './registrate/registrate';
import Contacto from './contacto/contacto';
import Nosotros from './nosotros/nosotros';
import Samsung from './celulares/samsung';
import Iphone from './celulares/iphone';
import Xiaomi from './celulares/xiaomi';
import Carrito from './carrito/carrito';

function App() {
  return (
    <>
      <Barra />

      <Routes>
        <Route path='/' element={ <Inicio /> } />
        <Route path='/inicio' element={ <Inicio /> } />
        <Route path='/alta' element={ <Alta /> } />
        <Route path='/iniciarSesion' element={ <IniciarSesion /> } />
        <Route path='/registrate' element={ <Registrate /> } />
        <Route path='/carrito' element={ <Carrito /> } />
        <Route path='/contacto' element={ <Contacto /> } />
        <Route path='/nosotros' element={ <Nosotros /> } />
        <Route path='/celulares/samsung' element={ <Samsung /> } />
        <Route path='/celulares/iphone' element={ <Iphone /> } />
        <Route path='/celulares/xiaomi' element={ <Xiaomi /> } />
      </Routes>

      <Footer />  
    </>    
  );
}

export default App;
