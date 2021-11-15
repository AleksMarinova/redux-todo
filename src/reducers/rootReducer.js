 const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload,
      ];
    case 'TOGGLE_TODO':
      const refToState = state.map(
        todo => todo.id === action.payload.id ? 
        {...todo, done: !todo.done} : todo)
      return refToState;
    case 'UPDATE_TODO':
      const refToState2 = state.map(
        todo => todo.id === action.payload.id ? 
        {...todo, description: action.payload.description, title: action.payload.title} : todo)
      return refToState2;
    case 'DELETE_TODO':
      const refToStateToDeleteTodo = state.filter(todo => todo.id !== action.payload.id)
      return refToStateToDeleteTodo;
    default: return state;
  }
};

export default rootReducer;