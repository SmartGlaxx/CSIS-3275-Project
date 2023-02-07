import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore({
  id: "useAppStore",
  state: ()=>({
    menubar: false
  }),
  actions:{
    setMenubar() {
      this.menubar = !this.menubar
    },
  }
})



