import { defineStore } from "pinia";

interface Task {
  id: number;
  text: string;
  done: boolean;
  createdAt: string;
}

export const useTodoStore = defineStore("todo", {
  state: () => ({
    tasks: [] as Task[], // Task 인터페이스 사용
    nextId: 1, // 각 task의 고유 ID를 생성하기 위한 id 카운터 추가
  }),
  actions: {
    addTaskInStore(text: string, done: boolean): void {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric', month: 'long', day: 'numeric',
        weekday: 'long', hour: '2-digit', minute: '2-digit',
        hour12: false, timeZone: 'Asia/Tokyo'
      };
      const newTask: Task = {
        id: this.nextId++, // nextId로 고유 ID 생성
        text,
        done,
        createdAt: new Date().toLocaleString('ja-JP', options),
      };
      this.tasks.push(newTask);
      this.updateTasksInLocalStorage();
    },
    
    deleteTaskFromStore(taskIndex: number) {
      this.tasks.splice(taskIndex, 1);
      this.updateTasksInLocalStorage();
    },
    
    changeTaskStatus(taskIndex: number) {
      this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
      this.updateTasksInLocalStorage();
    },
    
    changeTaskText(newText: string, taskIndex: number) {
      if (newText.trim()) {
        this.tasks[taskIndex].text = newText.trim();
      } else {
        this.tasks[taskIndex].text = "No empty tasks!";
      }
      this.updateTasksInLocalStorage();
    },
    
    getTasksFromLocalStorage() {
      const tasksInStorage = localStorage.getItem("tasks");
      if (tasksInStorage) {
        this.tasks = JSON.parse(tasksInStorage);
      }
    },
    
    updateTasksInLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    updateTaskOrder(updatedOrder: number[]) {
      const reorderedTasks = updatedOrder
        .map(id => this.tasks.find(task => task.id === id))
        .filter((task): task is Task => !!task); // 존재하는 task만 필터링
    
      this.tasks = reorderedTasks;
      this.updateTasksInLocalStorage();
    },

    updateDoneTaskOrder(updatedOrder: number[]) {
      // Done 상태인 할 일들만 업데이트
      const reorderedDoneTasks = updatedOrder
        .map(id => this.tasks.find(task => task.id === id && task.done))
        .filter((task): task is Task => !!task); // 존재하는 done 상태인 task만 필터링
      
      // 전체 tasks 배열에서 done 상태인 항목들을 새로운 순서로 업데이트
      const updatedTasks = this.tasks.map(task => {
        if (task.done) {
          return reorderedDoneTasks.shift() || task; // reorderedDoneTasks에서 순서대로 가져옴
        }
        return task; // not done 상태의 항목은 그대로 유지
      });
    
      this.tasks = updatedTasks;
      this.updateTasksInLocalStorage();
    },    
    
  },

  getters: {
    getTasksTodo(): Task[] {
      return this.tasks.filter((task: Task) => !task.done); 
    },
    getDoneTasks(): Task[] {
      return this.tasks.filter((task: Task) => task.done); 
    },
    getTasksSortedByDate(): Task[] {
      return [...this.tasks].sort((a: Task, b: Task) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    },
  }
});
