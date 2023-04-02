// import { useState } from 'react';
import './App.css';
// import Form from './Component/form';
import Header from './Component/header';
import TodoList from './Component/TodoList';


const App=()=> {
  
  return (
   <div className='container'>
    <div className='app-wrapper'>
    <div>
      <Header/>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
   </div>
      
  );
}

export default App;
