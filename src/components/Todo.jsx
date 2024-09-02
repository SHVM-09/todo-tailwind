import { FcTodoList } from "react-icons/fc";
import { TodoInput } from "./TodoInput";
import { TodoOutput } from "./TodoOutput";
import { DateUi } from "./DateUi";
import { DelAllBtn } from "./DelAllBtn";

export function Todo({ todos, setTodos, tasks, setTasks }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="my-5 flex items-center gap-2 text-3xl text-cyan-400">
          <FcTodoList /> Todo
        </h1>
        <DateUi />
      </div>
      <TodoInput
        todos={todos}
        setTodos={setTodos}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TodoOutput tasks={tasks} setTasks={setTasks} />
      <DelAllBtn tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
