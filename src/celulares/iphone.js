
import '../celulares.css';
import iphone15ProMax from '../imagenes/Apple.jpg';
import iphone15ProMaxFont from '../imagenes/Iphone_15_pro_max_font.jpg';
import iphone15Pro from '../imagenes/Iphone_15_pro.jpg';
import iphone15ProFont from '../imagenes/Iphone_15_pro_font.jpg';
import iphone15 from '../imagenes/Iphone_15.jpg';
import iphone15Font from '../imagenes/Iphone_15_font.jpg';
import Carrito from '../carrito/carrito';

function Iphone() {

    const iphone15promaxcarrito = () => {
        alert("Producto agregado al carrito");       
        const iphone15promax = {
            nombre: 'Iphone 15 Pro Max',
            precio: 1729.96,
            descripcion: '256GB',
            img: iphone15ProMax
        }    
        localStorage.setItem('iphone15promax', JSON.stringify(iphone15promax));
    }

    const iphone15procarrito = () => {
        alert("Producto agregado al carrito");       
        const iphone15pro = {
            nombre: 'Iphone 15 Pro',
            precio: 1189.96,
            descripcion: '128GB',
            img: iphone15Pro
        }    
        localStorage.setItem('iphone15pro', JSON.stringify(iphone15pro));
    }

    const iphone15carrito = () => {
        alert("Producto agregado al carrito");       
        const iphone15 = {
            nombre: 'Iphone 15',
            precio: 929.96,
            descripcion: '128GB',
            img: iphone15
        }    
        localStorage.setItem('iphone15', JSON.stringify(iphone15));
    }

    return(
        <>
            <div>
                <nav class="fondo2">

                    <div class="bloque">
                        <img class="imgndx" src={iphone15ProMax} alt="Iphone 15 Pro Max"/>
                        <img class="imgndx2" src={iphone15ProMaxFont} alt="IphoneFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">256 GB</li>
                                    <li class="info4">512 GB</li>
                                    <li class="info4">1 TB</li>
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">RAM</h4>
                                <ul class="info3">
                                    <li class="info4">8 GB</li>
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">CAMARA</h4>
                                <ul class="info3">
                                    <li class="info4">48 MP</li>
                                    <li class="info4">12 MP UGA</li>
                                    <li class="info4">12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">A17 PRO</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Desde</b> US$ 1,729.96</p>
                        <button class="boton">Comprar Ahora</button>
                        <button onClick={iphone15promaxcarrito} class="boton">Agregar al Carrito</button>
                    </div>

                    <div class="bloque">
                        <img class="imgndx" src={iphone15Pro} alt="Iphone 15 Pro"/>
                        <img class="imgndx2" src={iphone15ProFont} alt="IphoneFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">128 GB</li>
                                    <li class="info4">256 GB</li>
                                    <li class="info4">512 GB</li>
                                    <li class="info4">1 TB</li>
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">RAM</h4>
                                <ul class="info3">
                                    <li class="info4">12 GB</li>
                                </ul>
                            </div>
                            
                            <div class="especificaciones">
                                <h4 class="info2">CAMARA</h4>
                                <ul class="info3">
                                    <li class="info4">48 MP</li>
                                    <li class="info4">12 MP GA</li>
                                    <li class="info4">12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">A 17 PRO</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Desde</b> US$ 1,189.96</p>
                        <button class="boton">Comprar Ahora</button>
                        <button onClick={iphone15procarrito} class="boton">Agregar al Carrito</button>
                    </div>

                    <div class="bloque">
                        <img class="imgndx" src={iphone15} alt="Iphone 15"/>
                        <img class="imgndx2" src={iphone15Font} alt="IphoneFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">128 GB</li>
                                    <li class="info4">256 GB</li>
                                    <li class="info4">512 GB</li>   
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">RAM</h4>
                                <ul class="info3">
                                    <li class="info4">6 GB</li>
                                </ul>
                            </div>
                            
                            <div class="especificaciones">
                                <h4 class="info2">CAMARA</h4>
                                <ul class="info3">
                                    <li class="info4">48 MP</li>
                                    <li class="info4">UGA 12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">TD 12 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">A16 BIONIC</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Desde</b> US$ 929.96</p>
                        <button class="boton">Comprar Ahora</button>
                        <button onClick={iphone15carrito} class="boton">Agregar al Carrito</button>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Iphone;