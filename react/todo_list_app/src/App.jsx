import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import FilterTask from "./components/FilterTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false); // State to control AddTask visibility

    const handleAddTaskClick = () => {
        setShowAddTask(true); // Show the AddTask form when button is clicked
    };

    const handleTaskAdded = () => {
        setShowAddTask(false); // Close the AddTask form once task is added
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
                <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">Todo List</h1>
                <div>
                    <FilterTask />
                </div>
                <div>
                    {!showAddTask && ( // Only show the button if the form isn't displayed
                        <button
                            onClick={handleAddTaskClick}
                            className="w-full bg-indigo-600 text-white font-semibold p-2 rounded-md hover:bg-indigo-700 mb-4"
                        >
                            Add New Task
                        </button>
                    )}
                    {showAddTask && <AddTask onTaskAdded={handleTaskAdded} />} {/* Show AddTask only if state is true */}
                    <TaskList />
                </div>
            </div>
        </div>
    );
}

export default App;
