import React from 'react'


function TodoList(props){




  return (
    <div> 
    <table border='2' >
    <thead>
        <tr>
            <td>Task</td>
            <td>Duration</td>
        </tr>
    </thead>
        <tbody>
        {props.task_arr.map((task,index)=><tr key={index}>
            <td>{task}</td> 
            <td>{props.duration_arr[index]}</td>
            </tr>)}


        
        </tbody>

    
    </table>
    </div>
  )
}
export default TodoList;

