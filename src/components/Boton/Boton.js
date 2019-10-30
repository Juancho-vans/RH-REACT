import React from 'react'
import './Boton.css'

class Boton extends React.Component {
    render () {
        return (
            <input 
                type="button"
                className="boton_obscuro" 
                value={this.props.texto}
                onClick= {this.props.handleClick}
             />                
        ) 
    }
}

export default Boton