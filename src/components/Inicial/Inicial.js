import React from 'react'
import './Inicial.css'
import Boton from '../Boton/Boton';
import quali from './quali.svg'
import arteDiseno from './arteDiseno.svg'

class Inicial extends React.Component {
   render () {
      return (
         <>
            <div className="ContInicial">
               <h1>
                  Sistema de gestion empresarial de Recursos Humanos
               </h1>
               <div className="Inicio">
                  <p>
                     <div>
                        usuario: <input type="text" name="USR" id=""></input>
                     </div>
                     <div>
                        password: <input type="password" name="USR" id=""></input>
                     </div>
                     {/* <input type='button' value = "ingresar" onClick={this.props.funcion}></input> */}

                     <Boton texto={"ingresar"}  handleClick={this.props.funcion} />
                  </p>
               </div>
               
               <div>
                  <div className="columnas">
                     <img src={quali} alt="logo"/>
                     <img src={arteDiseno} alt="logo"/>
                  </div>
                  {/* <img src={colibri} alt="logo"/> */}
               </div>
               
            </div>
            
         </>
      )
   }
}

export default Inicial