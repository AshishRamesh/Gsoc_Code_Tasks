import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const status = useSelector((state) => state.tasks.status);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);
  const dispatch = useDispatch();
  
  const priorityColors = {
    high: " text-red-500", 
    medium: " text-yellow-600", 
    low: " text-green-500"
};


  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  if (loading) {
    return <div>Task Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // **Filter & Search Logic**
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = status === "All" || task.status === status;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-black-50">
      <h2 className="text-lg font-large text-gray-1000 justify-between">Tasks</h2>
      <ul className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <li key={task.id} className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-center hover:shadow-lg transition-shadow duration-200">
              <div>
                <h1 className="text-lg font-bold text-gray-800">{task.title}</h1>
                {task.description && <p className="text-gray-600">{task.description}</p>}
                <p className="mt-1 text-sm ">
                  Status: <span className={`italic font-bold ${priorityColors[task.priority || 'medium']}` }>{task.status}</span>
                  <div>
                  Category: <span className={`italic font-bold` }>{task.category || 'Personal'}</span>
                  </div>
                </p>
              </div>
              <div className="flex space-x-2">
                <EditTask task={task} />
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No tasks found</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
