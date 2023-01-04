const initState = {
  todos: [],
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODOS':
      return {
        ...state,
        todos: [...state.todos, action.data],
      };
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.data,
      };

    default:
      return state;
  }
};
export default adminReducer;
