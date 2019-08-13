export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.payload,
            id: Date.now(),
            completed: false
          }
        ]
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        todos: state.todos.map(elem =>
          elem.id === action.payload
            ? { ...elem, completed: !elem.completed }
            : elem
        )
      };
    case "CLEAR_DONE":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

export const initialState = {
  todos: [{ task: "", id: "", completed: false }]
};
