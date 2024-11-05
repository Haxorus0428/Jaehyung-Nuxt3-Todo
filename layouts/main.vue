<template>
  <div id="wrapper">
    <Header />
    <main>
      <slot name="addTaskForm" />
      <h2>
        <slot name="heading" />
      </h2>
      <ul>
        <slot />
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const noTasksMessage = computed(() => {
  return route.path === '/done' ? 'No done tasks!' : 'No tasks todo!';
});
const showNoTasksMessage = computed(() => {
  // 기본값으로는 할 일 리스트가 비어 있을 때 보여지는 설정 (예시로 넣었으며, 실제로는 각 페이지에서 관리할 수도 있음)
  return true;
});
</script>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}

ul {
  max-width: 630px;
  width: 100%;
  list-style: none;
  padding: 0;
}

</style>
