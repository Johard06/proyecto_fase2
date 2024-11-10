
import '../formularios.css';

function Alta() {
    return(
        <>
           <div class="fondo">
                <div class="mns">
                    <h2 id="mns1">Celulares</h2>
                    <form class="form">

                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Samsung S24 Ultra"/>

                        <label for="precio">Precio</label>
                        <input type="text" name="precio" id="precio"/>

                        <label for="marca">Marca</label>
                        <select name="marca" id="marca">
                            <optgroup>
                                <option value=""></option>
                                <option value="SMG">SAMSUNG</option>
                                <option value="IPH">I PHONE</option>
                                <option value="XIA">XIAOMI</option>
                            </optgroup>
                        </select>

                        <label for="almacenamiento">Almacenamiento</label>
                        <input type="text" name="almacenamiento" id="almacenamiento"/>

                        <label for="descripcion">Descripción</label>
                        <input type="text" name="descripcion" id="descripcion"/>

                        <label for="envio">Envio</label>
                        <select name="envio" id="envio">
                            <optgroup>
                                <option value=""></option>
                                <option value="SÍ">SÍ</option>
                                <option value="NO">NO</option>
                            </optgroup>
                        </select>

                    </form>
                    <div class="mns2"><button className="boton1">Comprar</button></div>
                </div>
            </div>     
        </>
    )
}

export default Alta;