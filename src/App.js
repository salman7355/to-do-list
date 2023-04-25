import logo from "./logo.svg";
import "./App.css";
import AddTask from "./Components/AddTask";
import FilteredButtons from "./Components/FilteredButtons";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <FilteredButtons />
      {/* <Todo /> */}
      <TodoList />
    </div>
  );
}

export default App;
