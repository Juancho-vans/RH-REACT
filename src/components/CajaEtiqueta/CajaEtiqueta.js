import React from 'react'
import './CajaEtiqueta.css'

class CajaEtiqueta extends React.Component {
   render () {
      return (
         <div className="Eti">
            {this.props.etiqueta}:
            <input className="txt_etiqueta" 
               type="text" 
               id={this.props.ident}
               size="20" 
               value={this.props.valor}
               disabled={true} >
            </input>
         </div> 
      )                                                                                                                                                                                                                                                                                                                          
   }
}
export default CajaEtiqueta