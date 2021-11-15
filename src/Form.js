import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions/todos';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim() || !description.trim()) {
      return;
    }
    dispatch(addTodo({title, description, done:false, id: Date.now()}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="title" className="todo-form-title">
        Title
        <input
          placeholder="Add title for your todo"
          type="text"
          className="todo-title"
          value={title}
          onChange={e => setTitle(e.target.value)} />
      </label>
      <label htmlFor="description" className="todo-form-description">
        Description
        <input
          placeholder="Add description for your todo"
          type="text"
          className="todo-description"
          value={description}
          onChange={e => setDescription(e.target.value)} />
      </label>
      <button className="submit-button" type="submit">
        Add Todo
      </button>
    </form>
  );
}
export default Form;