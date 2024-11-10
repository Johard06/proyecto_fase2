
import '../formularios.css'

function Contacto() {
    return(
        <>
            <div class="fondo">
                <div class="mns">
                    <h2 id="mns1">Contacto</h2>
                    <form class="form">

                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" required placeholder="Juan Gonzalez"/>

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required placeholder="juanito@gmail.com"/>

                        <label for="edad">Edad</label>
                        <input type="number" name="edad" id="edad" required/>

                        <label for="provincia">Provincia</label>
                        <select name="provincia" id="provincia">
                            <optgroup>
                                <option value=""></option>
                                <option value="BOC">BOCAS DEL TORO</option>
                                <option value="COC">COCLÉ</option>
                                <option value="COL">COLÓN</option>
                                <option value="CHI">CHIRIQUÍ</option>
                                <option value="DAR">DARIEN</option>
                                <option value="HER">HERRERA</option>
                                <option value="SAN">LOS SANTOS</option>
                                <option value="PAN">PANAMÁ</option>
                                <option value="VER">VERAGUAS</option>
                            </optgroup>
                        </select>

                        <label for="telefono">Teléfono</label>
                        <input type="number" name="telefono" id="telefono"/>

                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje"></textarea>

                    </form>
                    <div class="mns2"><button className="boton1">Enviar</button></div>
                </div>
            </div>
        </>
    )
}

export default Contacto;