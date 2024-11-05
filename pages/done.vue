<template>
  <NuxtLayout name="main">
    <template #heading><span>Done tasks</span></template>
    <ul id="doneList" ref="doneListRef">
      <li
        v-for="(task, index) in doneTasks"
        :key="task.id"
        class="task-item no-bullet"
      >
        <Task :taskProps="task" @update-done-tasks="updateDoneTasks" />
      </li>
    </ul>
    <p v-if="doneTasks.length === 0" class="no-tasks">No done tasks!</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useTodoStore } from '~~/store/todo';
import $ from 'jquery';

const store = useTodoStore();
const doneTasks = computed(() => store.getDoneTasks);
const doneListRef = ref(null);

const updateDoneTasks = () => {
  store.updateTasksInLocalStorage();
};

// Done.vue 내부의 sortable 설정 로직
onMounted(() => {
  if (doneListRef.value) {
    $(doneListRef.value).sortable({
      placeholder: "ui-state-highlight",
      stop: (event, ui) => {
        const updatedOrder = $(doneListRef.value)
          .children()
          .map((_, element) => $(element).data('id'))
          .get();
        store.updateDoneTaskOrder(updatedOrder); // Done에 해당하는 순서 업데이트
      }
    });
  }
});

</script>

<style scoped>
.no-bullet {
  list-style-type: none;
}

.no-tasks {
  color: red; /* Done 페이지에서는 빨간색으로 설정 */
  font-weight: bold;
  text-align: center; /* 가운데 정렬 */
}
.ui-state-highlight {
  background-color: #f0f0f0;
  height: 2.5em;
  line-height: 1.2em;
  border: dashed 1px #ddd;
}
</style>
