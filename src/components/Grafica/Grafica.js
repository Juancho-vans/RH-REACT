import React from 'react'
import './Grafica.css'
import Solicitud from '../Solicitud/Solicitud.js'
import Imagen from '../Imagen/imagen.js'
import CajaEtiqueta from '../CajaEtiqueta/CajaEtiqueta'
import Titulo from '../Titulo/Titulo'
import Boton from '../Boton/Boton'
import Plot from 'react-plotly.js';


class Contenedor extends React.Component {

   constructor(props){
      super(props);
      this.state = {empleado:"NULL",datos_grafico:null}
   }

   componentDidMount = async () =>{
       console.log(this.props)
      let response = await fetch("http://127.0.0.1:8000/empleado/" + this.props.match.params.userid + "/",
                     {headers:{'Content-Type':'application/json'} ,
                     mode:"cors"}
                     )

      let graphic_response = await fetch("http://127.0.0.1:8000/prodempleado/" + this.props.match.params.userid,
                    {headers:{'Content-Type':'application/json'} ,
                    mode:"cors"}
                    )
        this.setState ((
            {empleado:await response.json(),datos_grafico:await graphic_response.json()}
            ))
   }

   render () {
      return (
         <div className="ContenedorFlex">
            {this.props.children}
            <Solicitud PropClase="SolGde">
                <Titulo titulo="Colaborador"/>
                <Imagen src={this.state.empleado.id}  />
                <CajaEtiqueta 
                    etiqueta="Nombre(s)" 
                    valor={this.state.empleado.nombre_empleado} 
                    ident="txt_Nombre"/>
                <CajaEtiqueta 
                    etiqueta="Apellidos" 
                    valor={this.state.empleado.a_paterno + ' ' + this.state.empleado.a_materno}  
                    ident="txt_Apellidos"/>
                <CajaEtiqueta 
                    etiqueta="Area" 
                    valor="Recursos Humanos" 
                    ident="txt_Area"/>
                <CajaEtiqueta 
                    etiqueta="Depto" 
                    valor="Beneficios" 
                    ident="txt_Departamento"/>
                <CajaEtiqueta 
                    etiqueta="Genero" 
                    valor="Masculino" 
                    ident="txt_Genero"/>
                <CajaEtiqueta 
                    etiqueta="Edad" 
                    valor="37" 
                    ident="txt_Edad"/>                       
                <Boton texto="Editar"/>
            </Solicitud> 

            <div>
                { this.state.datos_grafico ? 
                    <Plot data = {[
                        {
                            x:this.state.datos_grafico.fechas,
                            y:this.state.datos_grafico.cantidades,
                            type:"scatter"
                        }
                    ]}>
                    </Plot> : null
                }
            </div>
           
         </div>
      )
   }
}

export default Contenedor