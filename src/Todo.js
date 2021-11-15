import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo, toggleTodo} from './actions/todos';
import React,{useState} from 'react';

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  const [todoToEdit, setTodoToEdit] = useState(null);
  const [todoToEditTitle, setTodoToEditTitle] = useState('');
  const [todoToEditDescription, setTodoToEditDescription] = useState('');


  const handleUpdate = (e) => {
    e.stopPropagation();
    setTodoToEdit(todo.id);
  }

  const sendUpdateToState = (e) => {
    e.stopPropagation();
    if(!todoToEditTitle || !todoToEditDescription){
      return;
    }
    dispatch(updateTodo({title: todoToEditTitle, description: todoToEditDescription, id: todoToEdit}));
    setTodoToEdit(null);
  }

  const regularTodo = () => {
    return (
        <article 
        role="listitem" 
        className="todo-active" 
        onClick={() => dispatch(toggleTodo(todo))} 
        onKeyDown={() => dispatch(toggleTodo(todo))}>
        <p className="todo-active-title">{todo.title}</p>
        <p className="todo-active-description">{todo.description}</p>
        <button 
            className="edit-button" 
            onClick={(e) => handleUpdate(e)}>Edit todo</button>
        </article>
    )
  };

  const editableTodo = () => {
    return (
      <div className="edit-form">
        <label className="edit-form-label-title">Title</label>
        <input 
          className="edit-form-title"
          type="text" 
          placeholder="Edit title" 
          onChange={(e)=> setTodoToEditTitle(e.target.value)} 
          value={todoToEditTitle} />
          <label className="edit-form-label-description">Description</label>
  <input 
      className="edit-form-description"
       type="text" 
       placeholder="Edit description" 
       onChange={(e)=> setTodoToEditDescription(e.target.value)} 
       value={todoToEditDescription} />
       <button 
            className="save-changes-button" 
            onClick={(e)=> sendUpdateToState(e)}
            onKeyDown={(e)=> sendUpdateToState(e)}>Save</button>
     </div>
    )
  }

  if (todo.done === false) {
    if(todoToEdit){
      return editableTodo();
    }
    return regularTodo();
  } if (todo.done === true) {
    return (
      <article  
            role="listitem" 
            className="todo-done" 
            onClick={() => dispatch(toggleTodo(todo))} 
            onKeyDown={() => dispatch(toggleTodo(todo))}>
        <p className="todo-done-title">{todo.title}</p>
        <p className="todo-done-description">{todo.description}</p>
        <button 
            className="delete-button" 
            type="button" 
            onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteTodo(todo))} }>Delete</button>
      </article>
    );
  }
}

export default Todo;