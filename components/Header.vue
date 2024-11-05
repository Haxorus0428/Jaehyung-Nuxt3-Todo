<template>
  <header>
    <div class="base-container">
      <h1 class="app-title">KJH's To-do App 📝</h1>
      <nav>
        <ul>
          <li>
            <NuxtLink
              to="/"
              exact
              :class="{ active: isTodoPage }"
              @click="setActivePage('todo')"
            >
              Todo
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/done"
              exact
              :class="{ active: isDonePage }"
              @click="setActivePage('done')"
            >
              Done
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isTodoPage = ref(route.path === '/');
const isDonePage = ref(route.path === '/done');

const setActivePage = (page: string) => {
  isTodoPage.value = page === 'todo';
  isDonePage.value = page === 'done';
};

onMounted(() => {
  setActivePage(route.path === '/' ? 'todo' : 'done');
});
</script>

<style scoped>
.base-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
}

.app-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: 2rem; /* 중앙에 가까워지도록 약간 왼쪽에서 떨어뜨림 */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav a {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}

nav a.active {
  font-weight: bold;
  border-bottom: 2px solid white; /* 선택된 페이지에 밑줄 */
}

nav a:hover {
  text-decoration: underline;
}
</style>
