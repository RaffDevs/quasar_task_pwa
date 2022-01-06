import Vue from 'vue';
import { v4 as uuid } from 'uuid';

const state = Vue.observable({
  tasks: []
});

export function initTask() {
  if (localStorage.getItem('tasks')) {
    state.tasks = JSON.parse(localStorage.getItem('tasks'));
  }
}

export function createTask(collection, task) {
  const data = {
    id: uuid(),
    collection: collection,
    title: task.title,
    description: task.description,
    isCompleted: false
  };

  state.tasks.push(data);
  saveTasks();
}

export function saveTasks() {
  const parsed = JSON.stringify(state.tasks);
  localStorage.setItem('tasks', parsed);
}

export function deleteTask(id) {
  state.tasks = state.tasks.filter(task => task.id !== id);
  saveTasks();
}

export function deleteTasksByCollection(collection) {
  state.tasks = state.tasks.filter(task => task.collection !== collection);
  saveTasks();
}

export function toggleTask(id, value) {
  const taskIndex = state.tasks.findIndex(task => task.id === id);
  state.tasks[taskIndex].isCompleted = value;

  saveTasks();
}

export default state;