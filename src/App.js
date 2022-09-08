import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Make bed" />
      <Todo text="Clean house" />
      <Todo text="Wash dishes" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
