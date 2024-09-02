import { AiOutlineClear } from "react-icons/ai";

export const DelAllBtn = ({ setTasks }) => {
  const handleDeleteAll = () => {
    setTasks([]);
  };
  return (
    <div className="flex items-center justify-center">
      <button
        className="mt-5 flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleDeleteAll}
      >
        Clear All <AiOutlineClear />
      </button>
    </div>
  );
};
