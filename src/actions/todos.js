 const addTodo = (payload) => ({type: 'ADD_TODO', payload});
 const deleteTodo = (payload) => ({type: 'DELETE_TODO', payload});
 const updateTodo = (payload) => ({type: 'UPDATE_TODO', payload});
 const toggleTodo = (payload) => ({type: 'TOGGLE_TODO', payload});

 export {
   addTodo,
   deleteTodo,
   updateTodo,
   toggleTodo,
 }