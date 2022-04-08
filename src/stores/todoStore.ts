import { defineStore } from 'pinia';
import { Todo } from '../interfaces/todo.interface';

interface TodoState {
  todos: Todo[];
}

export const useTodos = defineStore('todos', {
  state: (): TodoState => ({
    todos: [],
  }),
  getters: {
    todoList(state: TodoState) {
      return state.todos;
    },
  },
});
