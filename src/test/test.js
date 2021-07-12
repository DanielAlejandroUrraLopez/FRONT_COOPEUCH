import reducers from '../../reducers';

test('reducers', () => {
    let state;
    state = reducers({tareas:[{identificador:1,descripcion:'daniel',fechaCreacion:'2021-07-12T09:42:01.745402',vigente:true},{identificador:2,descripcion:'abc',fechaCreacion:'2021-07-12T09:42:08.578916',vigente:false},{identificador:4,descripcion:'marcos',fechaCreacion:'2021-07-12T10:00:35.410488',vigente:true}]}, {type:'OBTENER_TAREAS',payload:[]});
    expect(state).toEqual({tareas:[]});
  });

  test('reducers', () => {
    let state;
    state = reducers({tareas:['Se agrego tarea exitosamente!!!']}, {type:'OBTENER_TAREAS',payload:[{identificador:3,descripcion:'daniel',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
    expect(state).toEqual({tareas:[{identificador:3,descripcion:'daniel',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
  });

  test('reducers', () => {
    let state;
    state = reducers({tareas:[{identificador:3,descripcion:'daniel',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true},{identificador:4,descripcion:'asdAD',fechaCreacion:'2021-07-12T10:54:27.507919',vigente:true}]}, {type:'OBTENER_TAREAS',payload:[{identificador:3,descripcion:'daniel',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
    expect(state).toEqual({tareas:[{identificador:3,descripcion:'daniel',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
  });

  test('reducers', () => {
    let state;
    state = reducers({tareas:[{identificador:3,descripcion:'daniel12',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true,submitted:true}]}, {type:'OBTENER_TAREAS',payload:[{identificador:3,descripcion:'daniel12',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
    expect(state).toEqual({tareas:[{identificador:3,descripcion:'daniel12',fechaCreacion:'2021-07-12T10:53:29.654619',vigente:true}]});
  });