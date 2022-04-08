<template>
  <div class="p-20 d-flex justify-content-center">
    <div class="card">
      <h1 class="mb-20">Todo List</h1>
      <div class="d-flex align-items-center">
        <input v-model="input" type="text" class="flex-fill mr-20" />
        <button class="btn btn-primary mr-20" @click="addTodo">Ajouter</button>
      </div>
      <ul>
        <li
          v-for="todo in todos"
          class="d-flex align-items-center"
          :key="todo.content"
        >
          {{ todo.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodos } from './stores/todoStore';

const input = ref<string>('');

const todoStore = useTodos();
const todos = todoStore.todoList;

function addTodo() {
  todoStore.addTodo(input.value);
  input.value = '';
}
</script>

<style lang="scss">
@import './assets/scss/base.scss';

.card {
  width: 500px;
}
</style>
