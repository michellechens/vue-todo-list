<script setup>
import { ref, defineEmits } from 'vue'

const inputText = ref('')
const emit = defineEmits(['addTodo'])

const onSubmit = () => {
  const todo = {
    id: crypto.randomUUID(),
    text: inputText.value,
    complete: false,
  }
  emit('addTodo', todo)
}
</script>

<template>
  <form id="form" @submit.prevent="onSubmit">
    <div>
      <input
        type="text"
        placeholder="Todo Text..."
        class="border-gray-400 border-[2px] rounded-sm p-4 text-lg"
        v-model="inputText"
      />
    </div>
    <div class="mt-2">
      <button class="w-full p-4 text-white bg-blue-500 rounded-sm">Add Todo</button>
    </div>
  </form>
</template>
