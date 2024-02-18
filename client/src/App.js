import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';
import './App.css';
import ListTodos from './components/listTodos';


function App() {
  return <Fragment>
    <div className='container'>
      <InputTodo />
      <ListTodos />
    </div>

  </Fragment>
}

export default App;
