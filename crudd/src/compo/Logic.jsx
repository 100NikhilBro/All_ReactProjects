import React, { useState } from 'react';

function Logic() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  // Add a new task
  const addTask = () => {
    if (taskName.trim() === '') return;
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  

  // Edit a task
  const editTask = (id, newName) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, name: newName } : task)));
  };



  // Delete a task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  // Toggle task completion
  const toggleTaskCompletion = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };



  return (
    <div>
      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <input
              type="text"
              value={task.name}
              onChange={(e) => editTask(task.id, e.target.value)}
            />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logic;
