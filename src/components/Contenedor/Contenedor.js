import React from 'react'
import './Contenedor.css'
import Solicitud from '../Solicitud/Solicitud.js'
import Imagen from '../Imagen/imagen.js'
import CajaEtiqueta from '../CajaEtiqueta/CajaEtiqueta'
import CajaCombo from '../CajaCombo/CajaCombo' 
import Titulo from '../Titulo/Titulo'
import Boton from '../Boton/Boton'
import CajaBoton from '../CajaBoton/CajaBoton'
import CajaTexto from '../CajaTexto/CajaTexto'
import CajaFecha from '../CajaFecha/CajaFecha'

class Contenedor extends React.Component {

   constructor(props){
      super(props);
      this.state = {empleado:"NULL"}
   }

   componentDidMount = async () =>{
      let response = await fetch("http://127.0.0.1:8000/empleado/2/",
                     {headers:{'Content-Type':'application/json'} ,
                     mode:"cors"}
                     )
      this.setState (({empleado:await response.json()}))
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

            <Solicitud PropClase="SolMed">
               <Titulo titulo="Incapacidad"/>
               <CajaTexto 
                  texto="Motivo:"
                  renglones="5" 
                  columnas="28"/>
               <CajaFecha texto="Fecha Inicial:"/>
               <CajaFecha texto="Fecha Final:"/>
               <Boton texto = "Solicitar"/>
            </Solicitud>

            <Solicitud PropClase="SolChi">
               <Titulo titulo="Formación"/>
               <CajaTexto 
                  texto="Justificación"
                  renglones="3"
                  columnas="23" />
               <CajaCombo PropClase="ComboGde"
                  texto="Cursos" 
                  listado={[
                     "Aprender a Aprender",
                     "Manejo de la Voz",
                     "PNL",
                     "Comunicación Efectiva",
                     "Google Analitics",
                     "Manejo de Objeciones",
                     "Telemarjeting",
                     "Negociación Efectiva"]}/>
               <Boton texto="Solicitar"/>
            </Solicitud>

            <Solicitud PropClase="SolChi">
               <Titulo titulo="Aumento"/>
               <CajaCombo PropClase="ComboChi"
                  texto="Evaluación previa" 
                  listado={[
                     "C",
                     "B",
                     "A"]}/>
               <CajaBoton texto="Justificación"/>
               <Boton texto="Solicitar"/>
            </Solicitud> 

            <Solicitud PropClase="SolChi">
               <Titulo titulo = "Vacaciones"/>
               <CajaFecha texto="Fecha Inicial:" />
               <CajaFecha texto="Fecha Final:" />
               <Boton texto="Solicitar"/>
            </Solicitud>

            <Solicitud PropClase="SolChi">
                <Titulo titulo="Préstamos"/>
                <CajaCombo PropClase="ComboMed"
                    texto="Monto" 
                    listado={[
                        "$1,000",
                        "$2,000",
                        "$3,000",
                        "$4,000",
                        "$5,000",
                        "$7,000"]}/>
                <CajaCombo PropClase="ComboMed" 
                    texto="Plazo" 
                    listado={[
                        "3 meses",
                        "6 meses",
                        "9 meses",
                        "12 meses"]}/>
                <Boton texto="Solicitar"/>
            </Solicitud> 
           
         </div>
      )
   }
}

export default Contenedor