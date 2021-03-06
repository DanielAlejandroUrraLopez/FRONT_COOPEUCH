import {
    CREAR_TAREA
    ,OBTENER_TAREAS
    ,MODIFICAR_TAREA
    ,BORRAR_TAREA
  } from "./types";

  import TareaDataService from "../services/tarea.service";

  export const agregarTarea = (identificador, descripcion,vigente, fechaCreacion) => async (dispatch) => {
    try {
      const res = await TareaDataService.agregarTarea({ identificador, descripcion, vigente, fechaCreacion });
  
      dispatch({
        type: CREAR_TAREA,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const listaTodasLasTareas = () => async (dispatch) => {
    try {
      const res = await TareaDataService.listaTodasLasTareas();
  
      dispatch({
        type: OBTENER_TAREAS,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const modificarTarea = (id, data) => async (dispatch) => {
    try {
      const res = await TareaDataService.modificarTarea(id, data);
  
      dispatch({
        type: MODIFICAR_TAREA,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const eliminacionDeTarea = (id) => async (dispatch) => {
    try {
      await TareaDataService.eliminacionDeTarea(id);
  
      dispatch({
        type: BORRAR_TAREA,
        payload: { id },
      });
      
    } catch (err) {
      console.log(err);
    }
  };