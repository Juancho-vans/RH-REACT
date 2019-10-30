import React from 'react'
import './CajaBoton.css'

class CajaBoton extends React.Component {
   render () {
      return (
         <>
            <h3>{this.props.texto}: </h3>
            <input 
               className="Boton" 
               type="button" 
               value="Adjuntar">
            </input>
         </>
      )
   }
}

export default CajaBoton