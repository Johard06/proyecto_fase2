
import Facebook from '../imagenes/facebook.png';
import Instagram from '../imagenes/instagram.png';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <>
            <footer>
                <ul className="info">
                    <li>Contactanos</li>
                    <li>Servicios</li>                   
                </ul>

                <ul className="info">
                    <li>Sucursales</li>
                    <Link className='estilodelinkto' to="../contacto"><li>Contacto</li></Link>
                </ul>

                <ul className="info">
                    <Link className='estilodelinkto' to="../nosotros"><li>Nosotros</li></Link>
                    <li>Trabaja con Nosotros</li>
                </ul>

                <ul className="info">
                    <li>Siguenos</li>
                    <li>
                        <img className="logo" src={Facebook} alt="Facebook"/>
                        <img className="logo" src={Instagram} alt="Instagram"/>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;