import React from "react";
import { connect } from "react-redux";
import { modificarTarea, eliminacionDeTarea, listaTodasLasTareas } from "../actions/tareas";
import 'bootstrap/dist/css/bootstrap.min.css'


class TareasList extends React.Component {
  constructor(props) {
    super(props); 
    this.deleteTarea = this.deleteTarea.bind(this);
    this.getTareas = this.getTareas.bind(this);
    this.editarTarea = this.editarTarea.bind(this);
  }

  state={
    list:[]
  }
componentDidMount(){
  this.getTareas();
};



deleteTarea(e){
  this.props
    .eliminacionDeTarea(e)
    .then(() => {
      alert("se elimino con exito!!")
      this.getTareas();
    })
    .catch((e) => {
      alert("Error: "+e)
      console.log(e);
    });
}

getTareas(){
  this.props
    .listaTodasLasTareas()
    .then((response) => {
      this.setState({
        list: response
      })
      
    })
    .catch((e) => {
      console.log(e);
    });
}

editarTarea(e){
  this.props.history.push({pathname:"/add",state:{id: e}});
}



  render() {
      return (
        <React.Fragment>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Identificador</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Fecha Creación</th>
                  <th scope="col">Vigente</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.list.map((value,index) =>{
                    return(
                      <tr key={index}>
                        <td>{value.identificador}</td>
                        <td>{value.descripcion}</td>
                        <td>{value.fechaCreacion}</td>
                        <td>{value.vigente.toString()}</td>
                        <td>
                        <button type="button" onClick={() => this.editarTarea(value.identificador)} class="btn btn-primary">Editar</button>
                          <button type="button" onClick={() => this.deleteTarea(value.identificador)} class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                    )
                  })}
                

              </tbody>
            </table>

            
        </React.Fragment>
        );
  }
}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, { modificarTarea, eliminacionDeTarea, listaTodasLasTareas })(TareasList);