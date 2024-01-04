
import { useState } from 'react';
import './App.css';
import  Header  from './Header';
import ListForm from './ListForm';
import TodoList from './TodoList';



function App() {

  const [taskname, setTask] = useState(["workout"]);

  const [duration, setDuration] =useState(["5 hours"]);


  const addTask=(task)=>{
      setTask([...taskname,task]);
  }

  const addDuration =(time)=>{
    setDuration([...duration,time]);
  }


  return (
    
 
    <div className="App">
      <Header></Header>
         
      <div className='col-sm-12 col-md-6'>
      <ListForm  insertTask={addTask} insertDuration={addDuration}></ListForm>
      </div>
      
      <div className='col-sm-12 col-md-6'>
        <TodoList task_arr={taskname} duration_arr={duration}></TodoList>
      </div>
      
      
      
    </div>
  );
}

export default App;
