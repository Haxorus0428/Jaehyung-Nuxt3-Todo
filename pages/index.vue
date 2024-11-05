<template>
  <NuxtLayout name="main">
    <template #addTaskForm><AddTask @add-todo="addTodo" /></template>
    <template #heading><span>Tasks to-do</span></template>
    <ul id="todoList" ref="todoListRef">
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        :data-id="todo.id"
        class="task-item no-bullet"
      >
        <!-- 순위 표시 -->
        <span :class="getRankClass(index)" class="rank">{{ index + 1 }}</span> 
        <Task :taskProps="todo" @update-todos="updateTodos" />
      </li>
    </ul>
    <p v-if="todos.length === 0" class="no-tasks">No tasks to do!</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useTodoStore } from '~~/store/todo';
import $ from 'jquery';

const store = useTodoStore();
const todos = computed(() => store.getTasksTodo);
const todoListRef = ref(null);

const addTodo = ({ text, done }) => {
  store.addTaskInStore(text, done);
  updateTodos();
};

const updateTodos = () => {
  store.updateTasksInLocalStorage();
};

const getRankClass = (index) => {
  switch (index) {
    case 0:
      return 'gold';
    case 1:
      return 'silver';
    case 2:
      return 'bronze';
    default:
      return 'gray';
  }
};

// sortable 적용 로직
onMounted(() => {
  if (todoListRef.value) {
    $(todoListRef.value).sortable({
      placeholder: "ui-state-highlight",
      stop: (event, ui) => {
        const updatedOrder = $(todoListRef.value)
          .children()
          .map((_, element) => $(element).data('id'))
          .get();
        store.updateTaskOrder(updatedOrder); // 순서 업데이트
      }
    });
  }
});

</script>

<style scoped>
.no-bullet {
  list-style-type: none;
}

.task-item {
  display: flex;
  width: 100%;
  padding: 3px;
  background-color: #fff;
  border: none; /* 불필요한 테두리 제거 */
}

.no-tasks {
  color: green;
  font-weight: bold;
  text-align: center;
}
.rank {
  font-weight: bold;
  margin-right: 10px;
  width: 20px; /* 순위 숫자를 정렬하기 위해 너비 지정 */
  text-align: center;
}

.gold {
  color: #FFD700; /* 금색 */
}

.silver {
  color: #C0C0C0; /* 은색 */
}

.bronze {
  color: #CD7F32; /* 동색 */
}

.gray {
  color: #7A7A7A; /* 회색 */
}
</style>
