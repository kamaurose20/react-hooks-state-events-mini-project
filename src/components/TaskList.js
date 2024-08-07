import React from "react";
import Task from "./Task";
function TaskList({tasks,handleDelete}) {
  const mappedTasks = tasks.map((item,index)=>{
    return(
      <Task key={index} id={index} text = {item.text} category = {item.category} handleDelete={handleDelete}/>
    )
  })
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {mappedTasks}
    </div>
  );
}

export default TaskList;
