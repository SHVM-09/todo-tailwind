const taskKey = "allTasks";

export const getTasks = () => {
  const tasks = localStorage.getItem(taskKey);
  return tasks ? JSON.parse(tasks) : [];
};

export const setAllTasks = (tasks) => {
  localStorage.setItem(taskKey, JSON.stringify(tasks));
};
