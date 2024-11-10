import logoPrincipal from '../imagenes/Logo_principal.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Barra() {

    const navigate = useNavigate(); //para redirigir a otra pagina

    return (
        <>
            <section className="cabecera">
                <div>
                    <Link className='estilodelinkto' to="../inicio"><h1 className="titulo">Digital Shop</h1></Link>
                </div>
                <div>
                    <Link className='estilodelinkto' to="../inicio"><img className="logo2" src={logoPrincipal} alt="logo_principal"/></Link>
                </div>
            </section>

            <section className="cabecera2">

                <div className="barra1">
                    <ul className="barra2">
                        <Link className="estilodelinkto" to="../alta"><li>Alta</li></Link>
                        <Link className="estilodelinkto" to="../carrito"><li>Carrito</li></Link>
                        <li>Iniciar Sesion</li>
                        <Link className="estilodelinkto" to="../registrate"><li>Registrarse</li></Link>                       
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Barra;