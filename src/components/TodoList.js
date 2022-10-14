import React, {useState } from "react";

export function TodoList(props){
    let listTask = props.listTask;
    let titleBtn = props.titleBtn;

    const toggleChange = (id, e) => {
        let temp = [...listTask];
        for (var i = 0; i < temp.length; i++) {
          if (temp[i].id === id) {
            temp[i].status = !temp[i].status;
          }
        }
        props.setListTask(temp);
        if (titleBtn === 'All') {
          props.setListTaskTmp(temp)
        }
      }

    return(
        <>
        {listTask.length > 0 &&
            listTask.map((task) => (
            <li key={task.id}>
                <input type="checkbox" className="button" name="checkBtn" checked={task.status} onChange={(e) => toggleChange(task.id, e)} />
                <label>{task.taskName}</label>
            </li>
        ))}
        </>
    );
}
export default TodoList;