import React from 'react'
import quali from './quali.svg';
import arteDiseno from './arteDiseno.svg';
import Colibri from './colibri.svg';
import './Header.css'
import {Link} from 'react-router-dom'

class Header extends React.Component {
   render () {    
      return (
         <nav>  
            <div>
               <div className="columnas">
                  <img src={quali} alt="logo"/>
                  <img src={arteDiseno} alt="logo"/>
               </div>
               <img src={Colibri} alt="logo"/>
            </div>
            <div>
               {this.props.estado.logged ? 
               <>
                  <Link to='/Generales'>Generales</Link>
                  <Link to='/Reportes/1'>Reportes</Link> 
               </>: 
                  <Link to='/Login'>Login</Link>
               }
                  
           </div> 
         </nav>
      )   
   }
}
export default Header