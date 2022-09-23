import React, { useState } from "react";
import TaskFormulario from "./TaskFormulario";
import "../stylesheets/TodoList.css";
import Task from "./Task";

function TodoList() {
  const [tareas, setTareas] = useState([]);
  const agregarTarea = (tarea) => {
    if(tarea.texto.trim()){ /* preguntamos si la tarea tiene espacios  */
      tarea.texto = tarea.texto.trim() /* le sacamos los espacios */
      const tareasActualizadas = [tarea,...tareas]; /* creamos un nuevo array en donde la ultima tarea aparece primero */
      setTareas(tareasActualizadas) /* actualizamos el estado actual */
    }
  };
  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada; /* invierte la tarea  */
      }
      return tarea;
    })
    setTareas(tareasActualizadas)
  }
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }
  return (
    <>
      <TaskFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => ( /* genera un elemento por cada iteracion en el elemento "tareas" */
          <Task 
          key={tarea.id}
          id={tarea.id}
          texto={tarea.texto} 
          completada={tarea.completada} 
          eliminarTarea={eliminarTarea}    
          completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
