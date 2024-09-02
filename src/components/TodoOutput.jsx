import { FaCheckSquare, FaTrash } from "react-icons/fa";

export function TodoOutput({ tasks, setTasks }) {
  const handleDeleteTodo = (val) => {
    const newTasks = tasks.filter((task) => task.content !== val.content);
    setTasks(newTasks);
  };

  const handlecheck = (val) => {
    const newTasks = tasks.map((task) => {
      if (task.content === val.content) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <ul className="flex max-h-[400px] w-full flex-col gap-2 overflow-scroll rounded-md bg-gray-700 p-4 sm:min-w-96">
      {tasks.length ? (
        tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-md bg-gray-200 p-2"
          >
            <span
              className={`${task.checked ? "line-through" : "no-underline"}`}
            >
              {task.content}
            </span>
            <ul className="flex items-center gap-2">
              <FaCheckSquare
                className="cursor-pointer text-xl text-gray-500 hover:text-gray-800"
                onClick={() => handlecheck(task)}
              />
              <FaTrash
                className="mb-px cursor-pointer text-lg text-gray-500 hover:text-gray-800"
                onClick={() => handleDeleteTodo(task)}
              />
            </ul>
          </li>
        ))
      ) : (
        <li className="text-center text-gray-100">No tasks, Add Todos!</li>
      )}
    </ul>
  );
}
