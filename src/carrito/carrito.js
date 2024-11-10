import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../carrito.css'

function Carrito () {
    
    const [carrito, setCarrito] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        const iphone15promax = JSON.parse(localStorage.getItem('iphone15promax'));
        if (!iphone15promax) {
            alert('No hay productos en el carrito');
            navigate('/')
        }        else {setCarrito(iphone15promax);}
        
/*         const iphone15pro = JSON.parse(localStorage.getItem('iphone15pro'));
        if (!iphone15pro) {
            alert('No hay productos en el carrito');
            navigate('/')
        }        else {setCarrito(iphone15pro);}
        
        const iphone15 = JSON.parse(localStorage.getItem('iphone15'));
        if (!iphone15) {
            alert('No hay productos en el carrito');
            navigate('/')
        }        else {setCarrito(iphone15);} */

        //Solo funciona el primero al intentar cargar los demas no muestra nada y emite error, corregir

    },[]);

    const eliminarDatos = () => {
        localStorage.removeItem('iphone15promax'); 
        /* localStorage.removeItem('iphone15pro');
        localStorage.removeItem('iphone15'); */
        //solo elimina el primero y solo lo hace en la memoria local, corregir para eliminar en la parte principal
    };
    
    return(
        <>
            {carrito &&(
            <div className="fondoCarrito">
                <div className="bloqueCarrito">
                    <h2>Carrito</h2>
                        
                        <div className="cardCarrito">
                            <div className="cardCarrito1">
                                <div className="imgCarrito"><img src={carrito.img} alt="Imagen del producto seleccionado"/></div>
                                <div className="nombreCarrito"><h4>{carrito.nombre}</h4></div>
                                <div className="precioCarrito"><p>Precio: ${carrito.precio}</p></div>
                                <button onClick={eliminarDatos} className="botonCarrito">Borrar</button>
                            </div>
                        </div>
                    
                    <div class="mns2">
                        <button onClick={eliminarDatos} className="boton1">Borrar Todo</button>
                    </div>
                </div>
            </div>   
            )}
        </>
    )
}

export default Carrito;