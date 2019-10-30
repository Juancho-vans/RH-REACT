import React from 'react'
import './Solicitud.css'

class Solicitud extends React.Component {
    render () {
        return(
            <div className={this.props.PropClase} >
                {this.props.children}
            </div>
        )
    }
}

export default Solicitud
