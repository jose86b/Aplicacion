import React from "react";
import '../Css/Testimonios.css'

function Testimonio(){
    return(
        <div className="contenedor-testimonio">
            <img className="img-testimonio" src="" alt="imagen Persona"/>

            <div className="contenedor-testimocio">
                <p className="nombre-testimnio">
                    <strong>Esdenka</strong>
                    
                </p>
                <p className="cargo-testimonio">
                    <strong>estudiante</strong> en <strong>utpaquime</strong>
                </p>
                <p className="texto-testimonio"> el profe chaparro es mi asesor de estadia</p>
            </div>
        </div>
        
        

    );
}
export default Testimonio;