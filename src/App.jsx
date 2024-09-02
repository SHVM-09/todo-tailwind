import { useState } from "react";
import { Todo } from "./components/Todo";
import { getTasks, setAllTasks } from "./LocalStorage";

function App() {
  const [todos, setTodos] = useState({ id: "", content: "", checked: false });
  const [tasks, setTasks] = useState(() => getTasks());
  setAllTasks(tasks);
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-800">
      <Todo
        todos={todos}
        setTodos={setTodos}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
