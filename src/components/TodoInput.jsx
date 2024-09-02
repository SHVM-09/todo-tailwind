export function TodoInput({ todos, setTodos, tasks, setTasks }) {
  function handleInputChange(value) {
    setTodos({ id: value, content: value, checked: false });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { id, content, checked } = todos;
    if (!content) return;
    const duplicateTodo = tasks.find((todo) => todo.content === content);
    if (duplicateTodo) {
      setTodos({ id: "", content: "", checked: false });
      return;
    }
    setTasks([...tasks, { id, content, checked }]);
    setTodos({ id: "", content: "", checked: false });
  };

  return (
    <form className="my-5 flex gap-0" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="h-12 rounded-s-md px-2 focus:outline-none sm:w-96"
        value={todos.content}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button className="rounded-e-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700">
        Add Todo
      </button>
    </form>
  );
}
