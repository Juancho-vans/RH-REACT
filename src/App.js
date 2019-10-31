import React from 'react'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer'
import Contenedor from './components/Contenedor/Contenedor'
import Grafica from './components/Grafica/Grafica'
import Inicial from './components/Inicial/Inicial'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
   state = {logged:false}

   Logger = () => {
      this.setState ({logged:true}) 
   }

   render () { 
      return (  
         <>
         <Router>
            <Header estado={this.state} />
            <Switch>
               {/* <Route exact path ="/Generales" component={Contenedor} /> */}
               <Route path='/Login' render={() => <Inicial funcion={this.Logger} />}/>
               <Route path='/Generales' component={Contenedor}/>
               <Route path='/Reportes/:userid' component={Grafica}/>   
            </Switch>
            {/* <Contenedor>
            </Contenedor>         */}          
            <Footer/>
         </Router>
         
         {/* esta es la sintaxis para ccomunicar componentes en este caso comunicamos APP con INICIAL <Inicial variable='true' estado = {this.state} funcion={this.Logger} /> */}
         </>
      )
   }
}

export default App