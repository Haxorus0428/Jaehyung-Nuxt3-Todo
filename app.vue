<template>
  <Head><Title>KJH's To-do App</Title></Head>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { useTodoStore } from "./store/todo";  // 할 일 목록 관리 스토어
import { useUserStore } from "./store/user";  // 사용자 세션 관리 스토어

// Bootstrap과 Google Fonts 적용을 위한 head 설정
useHead({
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
  ],
});

const todoStore = useTodoStore();
const userStore = useUserStore();

// 페이지 로드 시, 할 일 목록과 사용자 세션을 로컬 스토리지에서 불러옴
onBeforeMount(() => {
  todoStore.getTasksFromLocalStorage();  // 할 일 목록 로드
  userStore.persistUserSession();        // 사용자 로그인 세션 유지
});
</script>
