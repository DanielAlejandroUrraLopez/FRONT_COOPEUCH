import React, { Component } from "react";
import { connect } from "react-redux";
import { agregarTarea } from "../actions/tareas";
import Checkbox from '@material-ui/core/Checkbox';


class AddTarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onChangeVigente = this.onChangeVigente.bind(this);
    this.saveTarea = this.saveTarea.bind(this);

    this.state = {
      identificador: null,
      descripcion: "",
      vigente: false,
      fechaCreacion: "",

      submitted: false,
    };

    
  }
  componentDidMount(){
    try{
      console.log(this.props.location.state.id);
    }catch(Error){

    }
  }

  onChangeDescripcion(e) {
    this.setState({
      descripcion: e.target.value,
    });
  }

  onChangeVigente(e) {
    this.setState({
      vigente: e.target.checked,
    });
  }

  saveTarea() {
    const {identificador,descripcion, vigente,fechaCreacion } = this.state;

    if(!descripcion.trim()){
      alert("El campo descripción es obligatorio!!");
    }else{

    this.props
    .agregarTarea(identificador, descripcion,vigente, fechaCreacion)
     .then((data) => {
       this.setState({
           identificador: data.identificador,
            descripcion: data.descripcion,
            vigente: data.vigente,          
           fechaCreacion: data.fechaCreacion,

           submitted: true,
          });
         console.log(data);   
         alert("Se guardo tarea con éxito!!");   
         this.props.history.push("/");
       })
      .catch((e) => {
        console.log(e);
      });
    }
  }


  render() {
    
    return (
      <div className="submit-form">
      
        <div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              required
              //value={this.state.descripcion}
              onChange={this.onChangeDescripcion}
              name="descripcion"
            />
          </div>

          <div className="form-group p" >
            <label htmlFor="vigente">Vigente:</label>
            <Checkbox
              className="form-control"
              id="vigente"
              required
              value={this.state.vigente}
              onChange={this.onChangeVigente}
              name="vigente"
            />
          </div>

          <button onClick={this.saveTarea} className="btn btn-success">
            Guardar
          </button>
        </div>
    </div>
  );    
      
  }
}

export default connect(null, { agregarTarea })(AddTarea);