import React from 'react'
import './CajaFecha.css'

class CajaFecha extends React.Component {
   render() {
      return (
         <>
            <h3>{this.props.texto}</h3>
            <input 
               className="CajaFecha" 
               type="date" 
               name="dt_FechIni" 
               size="5">
            </input>
         </>
      )
   }
}

export default CajaFecha