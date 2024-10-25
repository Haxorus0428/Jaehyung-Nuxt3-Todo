import { defineStore } from 'pinia'

interface Todo {
  id: number;
  text: string;
  date: string;  // 작성 일자
}

export const useTodoStore = defineStore('todo', {
  state: (): { todos: Todo[], nextId: number } => ({
    todos: [],
    nextId: 1
  }),
  actions: {
    addTodo(text: string) {
      // 날짜 형식 지정
      const date = new Date().toLocaleString();  // 로컬 시간대로 설정
      console.log("작성 일자: ", date);  // 작성 일자를 콘솔에 출력
      this.todos.push({ id: this.nextId++, text, date });
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
})
