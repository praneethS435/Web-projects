import { useState } from 'react'
import {AddName} from './assets/components/AddName'
import { Addtodo } from './assets/components/AddTodo'
import { Todo } from './assets/components/Todo';
import { TodoItems } from './assets/components/TodoItems';

import './App.css';
function App() {

  const [count, setCount] = useState(0)
  const Todoslots = [
    {
      Name: "go to there",
      Duedate: "23/12/2022",
    },
    {
      Name: "go to there",
      Duedate: "23/12/2022",
    },
    {
      Name: "go to tgjerehere",
      Duedate: "23/12/2022",
    },
    {
      Name: "go to thowjopwjggere",
      Duedate: "23/12/2022",
    },
    {
      Name: "go to tojwgrowgjohere",
      Duedate: "23/12/2022",
    },
    {
      Name: "go to jwfeowejgwthere",
      Duedate: "23/12/2022",
    },
  ];
  return (
    <center className='todo-container'>
      <AddName></AddName>
      <Addtodo></Addtodo>
      <TodoItems Todoslots ={Todoslots}></TodoItems>
      
    </center>
  )
}

export default App;
