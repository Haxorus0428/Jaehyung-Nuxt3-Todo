<template>
  <form @submit.prevent="addTask" class="input-group mb-3">
    <input
      v-model="inputText"
      type="text"
      placeholder="Add your task"
      class="form-control"
    />
    <button type="submit" class="btn btn-primary">+</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["add-todo", "add-done-task"]);
const inputText = ref("");

// 사용자가 할 일을 추가했을 때
const addTask = () => {
  const text = inputText.value.trim();
  const isInTheDonePage = window.location.pathname === "/done";

  if (text.length > 0) {
    if (isInTheDonePage) {
      emit("add-done-task", { text, done: true });
    } else {
      emit("add-todo", { text, done: false });
    }
  }
  inputText.value = ""; // 입력 필드를 비웁니다.
};
</script>

<style scoped>
.input-group {
  max-width: 600px;
  width: 100%;
}
</style>
