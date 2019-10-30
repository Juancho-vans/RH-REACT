import React from 'react'
import './CajaCombo.css'

class CajaCombo extends React.Component {
   render () {
      return (
         <div className="Comb">   
            <h3>{this.props.texto}: </h3>
            <select className={this.props.PropClase} 
            name="monto"
            width="100px">
               <option value="1">
                  {this.props.listado[0]}
               </option>
               <option value="2">
                  {this.props.listado[1]}
               </option>
               <option value="3">
                  {this.props.listado[2]}
               </option>
               <option value="4">
                  {this.props.listado[3]}
               </option>
               <option value="5">
                  {this.props.listado[4]}
               </option>
               <option value="6">
                  {this.props.listado[5]}
               </option>
            </select>
        </div>
      )
   }
}

export default CajaCombo