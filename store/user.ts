import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null as { username: string } | null,
  }),
  actions: {
    setUserInfo(username: string) {
      this.userInfo = { username };
      this.persistUserSession();
    },
    clearUserInfo() {
      this.userInfo = null;
      this.clearUserSession();
    },
    persistUserSession() {
      if (this.userInfo) {
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      }
    },
    restoreUserSession() {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
        this.userInfo = JSON.parse(userInfo);
      }
    },
    clearUserSession() {
      localStorage.removeItem('userInfo');
    },
  },
});
