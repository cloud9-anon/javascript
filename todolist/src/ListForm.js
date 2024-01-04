import { event } from 'jquery';
import React from 'react'
import { useState } from 'react';

function ListForm(props) {
  const [task,settask]=useState("");
    const [duration,setduration]=useState("");

    const addList=(event)=>{
    props.insertTask(task);

    props.insertDuration(duration);

    }
 
    return (
    <div>
      {task}
    {duration}
    <form>
      <div className='form-group'>
      
    <label htmlFor="name">Task</label>
    <input type="text" className="form-control" id="task" name="task" value={task} 
    onChange={(event)=>{settask(event.target.value)}}></input>
    <label htmlFor="name">Duration</label>
    <input type="text" className="form-control" id="duration" name="duration" value={duration}
    onChange={(event)=>{setduration(event.target.value)}}></input>


    <button type="button" className="btn btn-primary" onClick={addList}>Add List</button>

   
    </div>
    </form>

</div>
  )
}

export default ListForm;