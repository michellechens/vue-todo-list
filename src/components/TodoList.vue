<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  todos: {
    type: Array,
  },
})

const emit = defineEmits(['deleteTodo', 'completeTodo'])

const deleteTodo = (todoId) => {
  emit('deleteTodo', todoId)
}

const completeTodo = (todoId) => {
  emit('completeTodo', todoId)
}
</script>

<template>
  <ul v-if="todos.length > 0">
    <li v-for="todo in todos" :key="todo.id" class="flex gap-3 my-2">
      <button class="bg-red-500 text-white w-5" @click="deleteTodo(todo.id)">X</button>
      <button class="bg-green-500 text-white w-5" @click="completeTodo(todo.id)">V</button>
      <p :class="{ 'line-through': todo.complete }">{{ todo.text }}</p>
    </li>
  </ul>

  <p v-else>No todos found.</p>
</template>
