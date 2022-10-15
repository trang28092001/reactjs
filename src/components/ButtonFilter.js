import React, { useEffect, useState } from "react";

export function ButtonFilter(props){
    // const [task, setTask] = useState();
    // const [listTask, setListTask] = useState([]);
    const [listTaskTmp, setListTaskTmp] = useState([]);
    // const [titleBtn, setTitleBtn] = useState('All');
    let listTask = props.listTask;
    let titleBtn = props.titleBtn;

    useEffect(() => {
        if (titleBtn === 'All') {
          setListTaskTmp(listTask)
        }
    }, [listTask, titleBtn])
    
    let fun = ["All", "Active", "Completed"];
    
    const handleClickBtn = (item, e) => {
        props.setTitleBtn(item)
    }
    
    useEffect(() => {
        let listClick;
        if (titleBtn === "Active") {
          listClick = listTaskTmp.filter(i => i.status === false);
    
        } else if (titleBtn === "Completed") {
          listClick = listTaskTmp.filter(i => i.status === true);
        }
        else {
          listClick = listTaskTmp.filter(i => (i.status === true || i.status === false));
        }
        props.setListTask(listClick);
      }, [titleBtn])
    
      const myList = fun.map((item) => (
        <button key={item} className="show" onClick={(e) => handleClickBtn(item, e)}>
          {item}
        </button>
    ));

    return(
      <p className="end">
        <span>{listTask.length} item left</span>
        <span>{myList}</span>
      </p>
    );
}