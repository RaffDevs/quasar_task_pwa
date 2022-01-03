import Vue from 'vue';

const state = Vue.observable({
  tasks: []
});

export function initTask() {
  if (localStorage.getItem('tasks')) {
    state.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

export function createTask(collection, task) {
  if ()
}

export default new Vue({
  data: () => ({
    tasks: []
  }),

  mounted() {
    
  },

  methods: {
    createTask(task) {
      if (task && !this.tasks.some(target => target.id === task.id)) {
        this.tasks.push(task);
        this.saveTasks();
      }
    },

    saveTasks() {
      const parsed = JSON.stringify(this.tasks);
      LocalStorage.set('tasks', parsed);
    },

    deleteTask(target) {
      this.tasks = this.tasks.filter(task => task.id !== target.id);
      this.saveTasks();
    },

    completeTask(id) {
      const taskIndex = this.tasks.findIndex(task => task.id === id);
      this.tasks[taskIndex].isCompleted = false;

      this.saveTasks();
    }
  }
});