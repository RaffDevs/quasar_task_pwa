<template>
  <div class="col-12 shadow-5">
    <CollectionDialog/>
    <div class="banner">
      <q-banner inline-actions class="text-black">
        <template v-slot:avatar>
          <q-icon name="category" color="primary" />
        </template>
        {{ currentCollection }}
        <template v-slot:action>
          <q-btn round icon="more_vert" flat color="primary" />
        </template>
      </q-banner>
      <q-separator />
    </div>

    <q-list padding>
      <q-item-label header>Tasks</q-item-label>
      <template v-for="(task, index) in tasks">
        <Task 
          :key="index" 
          :caption="task.caption" 
          :description="task.description" 
          :done="task.isCompleted" 
        />
      </template>
    </q-list>
  </div>
</template>

<script>
import TaskModel from 'src/models/tasks';
import store from 'src/models/collection';
import Task from './TaskItem.vue';
import CollectionDialog from './CollectionDialog.vue';

export default {
  name: 'TasksContainer',

  components: {
    Task,
    CollectionDialog
  },

  data: () => ({
    tasks: [
      { caption: 'A task 2', description: 'A incomplete task', isCompleted:true },
      { caption: 'A task', description: 'A incomplete task', isCompleted:false },
      { caption: 'A task', description: 'A incomplete task', isCompleted:true },
      { caption: 'A task', description: 'A incomplete task', isCompleted:false },
    ]
  }),

  computed: {
    currentCollection: () => store.selectedCollection
  }

};
</script>

<style>
</style>