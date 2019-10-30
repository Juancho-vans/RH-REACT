import React from 'react'
import './Titulo.css'

class Titulo extends React.Component {
   render(){
      return (
         <>
         <h2 className="tit"> {this.props.titulo}
         </h2>
         </>
      )
   }
}

export default Titulo