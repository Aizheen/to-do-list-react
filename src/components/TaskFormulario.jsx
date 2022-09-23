import React, { useState } from "react";
import "../stylesheets/TaskFormulario.css";
import {v4 as uuidv4} from "uuid"

function TaskFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (evento) => {
    setInput(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva)
  };
  return (
    <form 
      className="tarea-formulario" 
      onSubmit={manejarEnvio}>
      <input
      
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea..."
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TaskFormulario;
