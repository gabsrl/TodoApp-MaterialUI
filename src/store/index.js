import { createStore } from 'redux';

const INITIAL_STATE = {
  todos: [
    {id: 1, title: 'Estudar Material ICON', date: '5 days ago', descr: 'estudar os principais componentes da lib.'},
    {id: 2, title: 'Estudar Material ICON', date: '5 days ago', descr: 'estudar os principais componentes da lib.'},
  ],
  editingTodo: null,
}

function todos(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload.newTodo] };
    case 'EDIT_TODO':
      let newState = {...state};
      const index = newState.todos.findIndex((item) => item.id === action.payload.todoModified.id);
      newState.todos[index] = action.payload.todoModified;
      return newState;
    default:
      return state;      
  }
}

const store = createStore(todos);
export default store;