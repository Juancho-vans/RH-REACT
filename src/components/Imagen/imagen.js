import React from 'react'
import './imagen.css'
import Foto from './jc.jpg'

class Imagen extends React.Component {
   render() {
      return (
         <>
            <img 
               src={'http://localhost:8000/static/frontend/Imagenes/' + this.props.src + '.png'}
               alt="colaborador" 
               width="150px">
            </img>
         </>
      )
   }
}

export default Imagen