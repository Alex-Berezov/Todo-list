import { TodoState, TodoAction, TodoActionType } from './../../types/todoTypes';

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null
}

export const todosReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionType.FETCH_TODOS:
      return { loading: true, error: null, todos: [] }

    case TodoActionType.ADD_TODO:
      return { loading: false, error: null, todos: [{ ...action.payload }, ...state.todos] }

    case TodoActionType.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        })
      }

    case TodoActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }

    case TodoActionType.TODOS_SUCCESS:
      return { loading: false, error: null, todos: action.payload }

    case TodoActionType.TODOS_ERROR:
      return { loading: false, error: action.payload, todos: [] }

    default:
      return state
  }
}