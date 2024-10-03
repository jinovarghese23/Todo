import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../redux/todoSlice';

const ToDoApp = () => {
  const [todo, setTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todo, completed: false }));
      setTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
    <div className='col-md-3'></div>
    
    <div className='col-md-6 container'>
      <h1 className='text-light mt-4' style={{textAlign:'center'}}>ToDo App</h1>
      <input
      type='text'
      className='form-control mb-2 mt-4'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder='Enter the TO do'
      />
      <button className='button btn btn-success mt-2' style={{alignItems:'center'}} onClick={handleAddTodo}>Add Todo</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none',color:'white' }}>
            {todo.text}
            {/* <button className='btn btn-warning ms-3 mt-3 mb-2' onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button> */}
            <button className='btn btn-danger ms-3 mt-3 mb-2' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>

    <div className='col-md-3'></div>
    </>
    
  );
};

export default ToDoApp;