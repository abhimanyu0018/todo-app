// componenet for listing all the task

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleComplete, editTask } from "../store/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.tasks || []);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleToggleComplete = (index) => {
    dispatch(toggleComplete(index));
  };

  const handleEdit = (index) => {
    const newTask = prompt("Edit task:", tasks[index].text);
    if (newTask) {
      dispatch(editTask({ index, text: newTask }));
    }
  };

  return (
    <>
      {/* rendering only if there exist task in list if not then null(not showing) */}
      {tasks.length > 0 ? (
        <div className="task-list bg-gray-200 p-4 rounded-md w-2/3 mx-auto">
          {/* mappint through each task in list and rendering them on screeen  */}
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`flex justify-between p-2 mb-2 border rounded ${
                task.completed ? "line-through" : ""
              }`}
            >
              <span>{task.text}</span>
              <div>
                <button
                  onClick={() => handleToggleComplete(index)}
                  className="bg-green-500 text-white p-1 rounded mr-2"
                >
                  Done
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white p-1 rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default TaskList;
