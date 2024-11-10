import './inicio.css';
import samsungS24Ultra from '../imagenes/Samsung.jpg';
import samsungFont from '../imagenes/SamsungFont.jpg';
import iphone15ProMax from '../imagenes/Apple.jpg';
import iphoneFont from '../imagenes/AppleFont.jpg';
import xiaomi14Ultra from '../imagenes/Xiaomi.jpg';
import xiaomiFont from '../imagenes/XiaomiFont.jpg';
import { Link } from 'react-router-dom';


function Inicio() {
    return(
        <>
            <div className="fondo1">
                <div className="bloque">
                    <Link to="../celulares/samsung">
                        <img className="imgndx1" src={samsungS24Ultra} alt="Samsung S24 Ultra"/>
                        <img className="imgndx3" src={samsungFont} alt="SamsungFont"/>    
                    </Link>
                </div>
                <div className="bloque">
                    <Link to="../celulares/iphone">
                        <img className="imgndx1" src={iphone15ProMax} alt="Iphone 15 Pro Max"/>
                        <img className="imgndx3" src={iphoneFont} alt="AppleFont"/>
                    </Link>                  
                </div>
                <div className="bloque">
                    <Link to="../celulares/xiaomi">
                        <img className="imgndx1" src={xiaomi14Ultra} alt="Xiaomi 14 Ultra"/>
                        <img className="imgndx3" src={xiaomiFont} alt="XiaomiFont"/>
                    </Link>                                    
                </div>                
            </div>     
        </>
    )
}

export default Inicio;