import '../formularios.css';


function Registrate() {
    return(
        <>
            <div class="fondo">
                <div class="mns">
                    <h2 id="mns1">Registrate</h2>
                    <form class="form">

                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" required placeholder="Juan Gonzalez"/>

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required placeholder="juanito@gmail.com"/>

                        <label for="edad">Edad</label>
                        <input type="number" name="edad" id="edad" required/>

                        <label for="provincia">Provincia</label>
                        <select name="provincia" id="provincia" required>
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
                        <input type="number" name="telefono" id="telefono" required/>

                        <label for="sucursales">Sucursal de preferencia</label>
                        <select name="sucursales" id="sucursales">
                            <optgroup>
                                <option value=""></option>
                                <option value="VIES">VIA ESPAÑA</option>
                                <option value="CA50">CALLE 50</option>
                            </optgroup>
                        </select>

                        <label for="pago">Forma de pago</label>
                        <select name="pago" id="pago" required>
                            <optgroup>
                                <option value=""></option>
                                <option value="EFE">EFECTIVO</option>
                                <option value="VIS">VISA</option>
                                <option value="MTC">MASTERCARD</option>
                                <option value="CLA">CLAVE</option>
                                <option value="YAP">YAPPY</option>
                                <option value="PAY">PAY PAL</option>
                                <option value="NEQ">NEQUI</option>
                            </optgroup>
                        </select>
                    </form>
                    <div class="mns2"><button className="boton1">Registrarse</button></div>
                </div>
            </div>     
        </>
    )
}

export default Registrate;