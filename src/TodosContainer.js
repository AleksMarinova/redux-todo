import Todo from './Todo';
import { useSelector } from 'react-redux';

const TodosContainer = () => {

const state = useSelector(state => state);

const showHideButton = () => {
  if(state.some(todo => todo.done)) {
    return (
      <>
      <button className="hide-done-button" onClick={()=> hideDone()} >Hide done todos</button>
      <button className="hide-done-button" onClick={()=> showDone()} >Show done todos</button>
      </>
    ) 
  }
}

const showDone = () => {
  const doneTodos = document.querySelectorAll('.todo-done');
  doneTodos.forEach(todo => {
    if (todo.classList.contains('hidden')){
      todo.classList.remove('hidden');
    }
  })
}

const hideDone = () => {
  const doneTodos = document.querySelectorAll('.todo-done');
  doneTodos.forEach(todo => {
   if(!todo.classList.contains('hidden')){
      todo.classList.add('hidden');
    }
  });
}

return (
  <div className="todos-container">
    {showHideButton()}
    {state.map(todo => <Todo key={todo.id} todo={todo} />)}
  </div>
)
}
export default TodosContainer;