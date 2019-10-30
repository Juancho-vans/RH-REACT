import React from 'react'
import './CajaTexto.css'

class CajaTexto extends React.Component {
   render () {
      return (
         <>
            <h3>{this.props.texto}: </h3>
            <textarea 
               className="CajaTexto" 
               rows={this.props.renglones} 
               cols={this.props.columnas}>
            </textarea>
         </>
      )
   }
}

export default CajaTexto