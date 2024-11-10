
import '../celulares.css';
import samsungS24Ultra from '../imagenes/Samsung_S24_Ultra_Morado.jpg';
import samsungS24UltraFont from '../imagenes/Samsung_S24_Ultra_Font.jpg';
import samsungZFold6 from '../imagenes/Samsung_Z_Fold_6.jpg';
import samsungZFold6Font from '../imagenes/Galaxy_Z_Fold_6_Font.jpg';
import samsungZFlip6 from '../imagenes/Samsung_Z_Flip_6.jpg';
import samsungZFlip6Font from '../imagenes/Samsung_Galaxy_Z_Flip_6_Font.jpg'

function Samsung() {
    return(
        <>
            <div>
            <nav class="fondo2">

                <div class="bloque">
                    <img class="imgndx" src={samsungZFold6} alt="Samsung Galaxy Z Fold 6"/>
                    <img class="imgndx2" src={samsungZFold6Font} alt="SamsungFont"/>
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
                                <li class="info4">12 GB</li>
                            </ul>
                        </div>

                        <div class="especificaciones">
                            <h4 class="info2">CAMARA</h4>                        
                            <ul class="info3">
                                <li class="info4">50 MP</li>
                                <li class="info4">12 MP</li>
                                <li class="info4">10 MP</li>
                            </ul>   
                        </div>

                        <div class="especificaciones2">
                            <h4 class="info2">FRONTAL</h4>
                            <ul class="info3">
                                <li class="info4">10 MP</li>
                                <li class="info4">4 MP</li>
                            </ul>
                        </div>

                        <div class="especificaciones3">
                            <h4 class="info2">PROCESADOR</h4>
                            <ul class="info3">
                                <li class="info4">SNAPDRAGON 8</li>
                            </ul>
                        </div>
                    </details>
                    <p class="precio"><b>Desde</b> US$ 2,019.00</p>
                    <button class="boton">Comprar Ahora</button>
                    <button class="boton">Agregar al Carrito</button>
                </div>

                <div class="bloque">
                    <img class="imgndx" src={samsungZFlip6} alt="Samsung Galaxy Z Flip 6"/>
                    <img class="imgndx2" src={samsungZFlip6Font} alt="SamsungFont"/>
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
                                <li class="info4">12 GB</li>
                            </ul>
                        </div>

                        <div class="especificaciones">
                            <h4 class="info2">CAMARA</h4>
                            <ul class="info3">
                                <li class="info4">50 MP</li>
                                <li class="info4">12 MP</li>
                            </ul>
                        </div>

                        <div class="especificaciones2">
                            <h4 class="info2">FRONTAL</h4>
                            <ul class="info3">
                                <li class="info4">10 GB</li>
                            </ul>
                        </div>
                       
                        <div class="especificaciones3">
                            <h4 class="info2">PROCESADOR</h4>
                            <ul class="info3">
                                <li class="info4">OCTA CORE 4N</li>
                            </ul>
                        </div>
                    </details>
                    <p class="precio"><b>Desde</b> US$ 1,219.00</p>
                    <button class="boton">Comprar Ahora</button>
                    <button class="boton">Agregar al Carrito</button>
                </div>

                <div class="bloque">
                    <img class="imgndx" src={samsungS24Ultra} alt="Samsung S24 Ultra"/>
                    <img class="imgndx2" src={samsungS24UltraFont} alt="SamsungFont"/>
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
                                <li class="info4">12 GB</li>
                            </ul>
                        </div>
                        
                        <div class="especificaciones">
                            <h4 class="info2">CAMARA</h4>
                            <ul class="info3">
                                <li class="info4">200 MP</li>
                                <li class="info4">50 MP</li>
                                <li class="info4">10 MP</li>
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
                                <li class="info4">OCTA CORE</li>
                            </ul>
                        </div>
                    </details>
                    <p class="precio"><b>Desde</b> US$ 1,499.00</p>
                    <button class="boton">Comprar Ahora</button>
                    <button class="boton">Agregar al Carrito</button>
                </div>

            </nav>
        </div>
        </>
    )
}

export default Samsung;