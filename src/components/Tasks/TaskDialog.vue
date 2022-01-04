<template>
  <q-dialog v-model="showDialog" @hide="showDialog = false">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Task</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          v-if="currentCollection.length <= 0"
          class="q-pa-sm"
          label="Collection"
          dense
          v-model="currentTaskCollection"
          autofocus
          @keyup.enter="handleCreateTask"
        />

        <q-input
          dense
          class="q-pa-sm"
          label="Title"
          v-model="taskTitle"
          autofocus
          @keyup.enter="handleCreateTask"
        />

        <q-input
          dense
          class="q-pa-sm"
          label="Description"
          v-model="taskDescription"
          autofocus
          @keyup.enter="handleCreateTask"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn 
          flat 
          label="Create" 
          v-close-popup
          @click="handleCreateTask"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import taskEvents from './_events';
import { createTask } from 'src/models/tasks';
import collectionStore, { createCollection, setCollection } from 'src/models/collection';

export default {
  mounted() {
    taskEvents.onTaskDialogOpened(() => this.showDialog = true);
  },

  data: () => ({
    showDialog: false,
    taskTitle: '',
    taskDescription: '',
    currentTaskCollection: '',
  }),

  computed: {
    currentCollection: () => collectionStore.selectedCollection
  },

  methods: {
    handleCreateTask() {
      const task = {
        title: this.taskTitle,
        description: this.taskDescription
      };

      if (this.currentCollection.length > 0) {
        createTask(this.currentCollection, task);
        this.taskDescription = '';
        this.taskTitle = '';

        return;
      }

      createCollection(this.currentTaskCollection);
      setCollection(this.currentTaskCollection);
      createTask(this.currentTaskCollection, task);

      this.taskTitle = '';
      this.taskDescription = '';
      this.currentTaskCollection = '';


    }
  }
};
</script>

<style>
</style>