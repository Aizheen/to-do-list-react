import "./App.css";
import TodoList from "./components/TodoList";
import Fecha from "./components/Fecha";
function App() {
  
  return (
    <div className="App">
      <div className="title-contenedor">
        <h2>To Do List</h2>
      </div>
      <div className="tareas-lista-principal">
        <Fecha/>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
