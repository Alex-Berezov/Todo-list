import { ITodo } from './types';

export interface TodoState {
  todos: Array<ITodo>
  loading: boolean
  error: null | string
}

export enum TodoActionType {
  FETCH_TODOS = 'FETCH_TODOS',
  ADD_TODO = 'ADD_TODO',
  COMPLETE_TODO = 'COMPLETE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  TODOS_SUCCESS = 'TODOS_SUCCESS',
  TODOS_ERROR = 'TODOS_ERROR'
}

interface FetchTodosAction {
  type: TodoActionType.FETCH_TODOS
}

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: ITodo
}

interface UpdateAction {
  type: TodoActionType.COMPLETE_TODO,
  payload: string
}

interface DeleteAction {
  type: TodoActionType.DELETE_TODO,
  payload: string
}

interface TodosSuccessAction {
  type: TodoActionType.TODOS_SUCCESS
  payload: Array<ITodo>
}

interface TodosErrorAction {
  type: TodoActionType.TODOS_ERROR
  payload: string
}

export type TodoAction =
  FetchTodosAction
  | AddTodoAction
  | UpdateAction
  | DeleteAction
  | TodosSuccessAction
  | TodosErrorAction