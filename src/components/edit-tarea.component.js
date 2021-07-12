import React, { Component } from "react";
import { connect } from "react-redux";
import { modificarTarea } from "../actions/tareas";
import Checkbox from '@material-ui/core/Checkbox';


class EditTarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onChangeVigente = this.onChangeVigente.bind(this);
    this.editTarea = this.editTarea.bind(this);

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
      console.log(this.props.location.state.obj);
      this.setState({
        identificador: this.props.location.state.obj.identificador,
        descripcion: this.props.location.state.obj.descripcion,
        vigente: this.props.location.state.obj.vigente,
        fechaCreacion: this.props.location.state.obj.fechaCreacion,

        submitted: true,
      });
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

  editTarea() {
    const {identificador,descripcion, vigente,fechaCreacion } = this.state;

    if(!descripcion.trim()){
      alert("El campo descripción es obligatorio!!");
    }else{

    this.props
    .modificarTarea(identificador, this.state)
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
              value={this.state.descripcion}
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
              checked={this.state.vigente}
              value={this.state.vigente}
              onChange={this.onChangeVigente}
              name="vigente"
            />
          </div>

          <button onClick={this.editTarea} className="btn btn-success">
            Guardar
          </button>
        </div>
    </div>
  );    
      
  }
}

export default connect(null, { modificarTarea })(EditTarea);