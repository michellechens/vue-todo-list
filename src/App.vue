<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import { ref } from 'vue'

const todos = ref([])

const handleAddTodo = (todo) => {
  // console.log('todo:', todo)
  todos.value.push(todo)
}

const handleDeleteTodo = (todoId) => {
  todos.value = todos.value.filter((todo) => todo.id !== todoId)
}

const handleCompleteTodo = (todoId) => {
  todos.value = todos.value.map((todo) =>
    todo.id === todoId ? { ...todo, complete: !todo.complete } : todo,
  )
}
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-[100vh]">
    <AddTodo @add-todo="handleAddTodo" />
    <TodoList :todos="todos" @delete-todo="handleDeleteTodo" @complete-todo="handleCompleteTodo" />
  </div>
</template>
