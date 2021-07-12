import http from "../http-common";



class TareaDataService {

  listaTodasLasTareas() {
    return http.get("listaTodasLasTareas");
  }

  get(id) {
    return http.get(`/tareas/${id}`);
  }

  agregarTarea(data) {
    return http.post("/agregarTarea",data);
  }

  modificarTarea(id, data) {
    return http.put(`/modificarTarea/${id}`, data);
  }

  eliminacionDeTarea(id) {
    return http.delete(`/eliminacionDeTarea/${id}`);
  }

  deleteAll() {
    return http.delete(`/tareas`);
  }

  findByTitle(title) {
    return http.get(`/tareas?title=${title}`);
  }
}

export default new TareaDataService();