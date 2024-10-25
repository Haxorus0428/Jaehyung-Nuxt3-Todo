<template>
    <div>
      <h1>TODO 리스트</h1>
      <input v-model="newTodo" placeholder="할 일 추가..." @keyup.enter="addTodo" />
      <button @click="addTodo">추가</button>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }} - <span>{{ todo.date || "날짜 없음" }}</span>  <!-- 작성 일자 표시 -->
          <button @click="removeTodo(todo.id)">삭제</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useTodoStore } from '~/stores/todo'
  
  const todoStore = useTodoStore()
  const newTodo = ref('')
  
  // 할 일 추가 함수
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todoStore.addTodo(newTodo.value)
      newTodo.value = ''  // 입력 필드를 초기화
    }
  }
  
  // 할 일 삭제 함수
  const removeTodo = (id: number) => {
    todoStore.removeTodo(id)
  }
  
  // 할 일 목록을 가져오기 위한 computed 사용
  const todos = computed(() => todoStore.todos)  // 상태 변경 시 반응형으로 업데이트
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  input {
    padding: 5px;
    font-size: 18px;
  }
  button {
    margin-left: 10px;
    padding: 5px;
  }
  span {
    margin-left: 10px;
    font-size: 14px;
    color: grey;
  }
  </style>
  