//component for taking input from user (input task)

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

function TaskInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput("");
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Enter tasks"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 w-2/3 border border-gray-300 rounded-l-md"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-r-md"
      >
        +
      </button>
    </div>
  );
}

export default TaskInput;
