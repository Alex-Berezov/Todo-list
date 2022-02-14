import { Dispatch } from "redux"
import { TodoAction, TodoActionType } from "../../types/todoTypes"
import { ITodo } from "../../types/types"
import { todoAPI } from './../../api/todoApi';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS })
      const data = await todoAPI.getTodos()
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      dispatch({ type: TodoActionType.TODOS_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: TodoActionType.TODOS_ERROR,
        payload: 'Ошибка загрузки задач'
      })
    }
  }
}

export const addTodo = (newTodo: ITodo) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.ADD_TODO, payload: newTodo })
      await todoAPI.postTodo(newTodo)
    } catch (error) {
      dispatch({
        type: TodoActionType.TODOS_ERROR,
        payload: 'Ошибка добавления задачи'
      })
    }
  }
}

export const completeTodo = (todoId: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.COMPLETE_TODO, payload: todoId })
      await todoAPI.updateTodo(todoId)
    } catch (error) {
      dispatch({
        type: TodoActionType.TODOS_ERROR,
        payload: 'Ошибка обновления задачи'
      })
    }
  }
}

export const deleteTodo = (todoId: string) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.DELETE_TODO, payload: todoId })
      await todoAPI.deleteTodo(todoId)
    } catch (error) {
      console.log(error)
    }
  }
}
