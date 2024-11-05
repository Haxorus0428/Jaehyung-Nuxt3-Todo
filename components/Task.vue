<template>
  <li class="task" :data-id="taskProps.id" :class="{ done: taskProps.done }"> <!-- data-id가 설정되어 있어야 합니다. -->
    <div class="task-content">
      <span
      contenteditable
        @focus="getSpanTextBeforeChange($event)"
        @focusout="changeTaskText($event)"
        :class="taskProps.done && 'done'"
      >
        {{ taskProps.text }}
      </span>
    </div>
    <div class="actions">
      <span v-if="taskProps.createdAt" class="task-date">{{ taskProps.createdAt }}</span>
      <img
        src="~/assets/images/undo.svg"
        alt="Undo the task"
        v-if="taskProps.done"
        role="button"
        @click="changeTaskStatus($event)"
        class="icon"
      />
      <img
        src="~/assets/images/check.svg"
        alt="Mark the task as done"
        v-else
        role="button"
        @click="changeTaskStatus($event)"
        class="icon"
      />
      <img
        src="~/assets/images/trash.svg"
        alt="Delete the task"
        role="button"
        @click="deleteTask($event)"
        class="icon"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTodoStore } from "~~/store/todo";

const emit = defineEmits(["update-todos", "update-done-tasks"]);
const props = defineProps({
  taskProps: {
    type: Object,
    required: true
  },
});

const store = useTodoStore();
const { tasks } = store;

const getTaskIndexFromButton = (task) => {
  // 텍스트, 상태, 생성일자 등을 비교하여 정확한 task 찾기
  return tasks.findIndex(t => t.text === task.text && t.done === task.done && t.createdAt === task.createdAt);
};

const getSpanTextBeforeChange = (event) => {
  spanTextBeforeChange.value = event.target.innerText;
};
const spanTextBeforeChange = ref("");

const changeTaskText = (event) => {
  const spanText = event.target.innerText;
  const taskIndex = getTaskIndexFromButton(props.taskProps);
  if (taskIndex !== -1) {
    store.changeTaskText(spanText, taskIndex);
    updateTaskList();
    event.target.innerText = spanText.trim();
  }
};

const changeTaskStatus = () => {
  const taskId = props.taskProps.id;
  const task = store.tasks.find(task => task.id === taskId);
  if (task) {
    task.done = !task.done;
    store.updateTasksInLocalStorage();
    updateTaskList();
  }
};

const deleteTask = () => {
  const taskId = props.taskProps.id;
  const taskIndex = store.tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    store.deleteTaskFromStore(taskIndex);
    updateTaskList();
  }
};

const updateTaskList = () => {
  if (window.location.pathname === "/done") emit("update-done-tasks");
  else emit("update-todos");
};

</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 850px;
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
  position: relative; /* 버튼을 절대 위치로 배치할 수 있게 함 */
}

.task-content {
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 표시 */
  text-overflow: ellipsis; /* 일정 길이 이후 ... 표시 */
  margin-right: 10px; /* 아이콘 위치를 위해 여백 추가 */
}

.task-date {
  font-size: 0.8rem;
  color: grey;
  text-align: right; /* 날짜를 최우측 정렬 */
  margin-left: 5px;
}

.actions {
  display: flex;
  gap: 10px;
}

.icon {
  cursor: pointer;
}
</style>
