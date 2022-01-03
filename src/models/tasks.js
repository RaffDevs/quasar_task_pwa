import Vue from 'vue';
import { LocalStorage } from 'quasar';

export default new Vue({
  data: () => ({
    tasks: []
  }),

  mounted() {
    if (LocalStorage.has('tasks')) {
      this.tasks = JSON.parse(LocalStorage.getItem('tasks'));
    }
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