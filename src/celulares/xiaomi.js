
import '../celulares.css';
import Xiaomi14Ultra from '../imagenes/Xiaomi.jpg';
import Xiaomi14UltraFont from '../imagenes/Xiaomi_14_ultra_font.jpg';
import Xiaomi14 from '../imagenes/Xiaomi_14.png';
import Xiaomi14Font from '../imagenes/Xiaomi_14_font.jpg';
import RedmiNote13Pro from '../imagenes/Redmi_Note_13_Pro.jpg';
import RedmiNote13ProFont from '../imagenes/Redmi_note_13_pro_font.jpg';

function Xiaomi() {
    return(
        <>
            <div>
                <nav class="fondo2">

                    <div class="bloque">
                        <img class="imgndx" src={Xiaomi14Ultra} alt="xiaomi 14 Ultra"/>
                        <img class="imgndx2" src={Xiaomi14UltraFont} alt="XiaomiFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">512 GB</li>
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">RAM</h4>
                                <ul class="info3">
                                    <li class="info4">16 GB</li>
                                </ul>
                            </div>

                            <div class="especificaciones">
                                <h4 class="info2">CAMARA</h4>
                                <ul class="info3">
                                    <li class="info4">Óptico Leica</li>
                                    <li class="info4">50 MP</li>
                                    <li class="info4">50 MP</li>
                                    <li class="info4">50 MP</li>
                                    <li class="info4">50 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">16 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">Snapdragon 8</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Precio</b> US$ 1,299.95</p>
                        <button class="boton">Comprar Ahora</button>
                        <button class="boton">Agregar al Carrito</button>
                    </div>

                    <div class="bloque">
                        <img class="imgndx" src={Xiaomi14} alt="Xiaomi 14"/>
                        <img class="imgndx2" src={Xiaomi14Font} alt="XiaomiFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">512 GB</li>
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
                                    <li class="info4">50 MP</li>
                                    <li class="info4">32 MP</li>
                                    <li class="info4">50 MP</li>
                                    <li class="info4">50 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">32 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">Snapdragon 8</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Precio</b> US$ 1099.95</p>
                        <button class="boton">Comprar Ahora</button>
                        <button class="boton">Agregar al Carrito</button>
                    </div>

                    <div class="bloque">
                        <img class="imgndx" src={RedmiNote13Pro} alt="Redmi Note 13 Pro"/>
                        <img class="imgndx2" src={RedmiNote13ProFont} alt="XiaomiFont"/>
                        <details>
                            <summary>Especificaciones</summary>
                            <div class="especificaciones">
                                <h4 class="info2">GB</h4>                        
                                <ul class="info3">
                                    <li class="info4">512 GB</li>   
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
                                    <li class="info4">200 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones2">
                                <h4 class="info2">FRONTAL</h4>
                                <ul class="info3">
                                    <li class="info4">16 MP</li>
                                </ul>
                            </div>

                            <div class="especificaciones3">
                                <h4 class="info2">PROCESADOR</h4>
                                <ul class="info3">
                                    <li class="info4">MD 7200-Ultra</li>
                                </ul>
                            </div>
                        </details>
                        <p class="precio"><b>Precio</b> US$ 469.95</p>
                        <button class="boton">Comprar Ahora</button>
                        <button class="boton">Agregar al Carrito</button>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Xiaomi;