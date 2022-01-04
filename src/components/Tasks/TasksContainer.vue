<template>
  <div class="col-12 shadow-5">
    <CollectionDialog />
    <TaskDialog />
    <TheHeader :currentCollection="currentCollection" />

    <q-list padding v-if="tasks.length > 0">
      <q-item-label header>Tasks</q-item-label>
      <template v-for="(task, index) in tasks">
        <Task
          :key="index"
          :task="task"
        />
      </template>
    </q-list>

    <div class="flex column items-center no-tasks" v-else>
      <div class="text-h4 text-primary">No tasks yet!</div>

      <q-btn
        color="positive"
        label="Crete a task"
        flat
        class="q-mt-md"
        @click="taskDialog"
      />
    </div>
  </div>
</template>

<script>
import taskEvents from "./_events";
import storeTasks from "src/models/tasks";
import storeCollection from "src/models/collection";

// Components
import Task from "./TaskItem.vue";
import CollectionDialog from "./CollectionDialog.vue";
import TaskDialog from "./TaskDialog.vue";
import TheHeader from "./layout/TheHeader.vue";

export default {
  name: "TasksContainer",

  components: {
    Task,
    CollectionDialog,
    TaskDialog,
    TheHeader,
  },

  computed: {
    currentCollection() {
      return storeCollection.selectedCollection;
    },

    tasks() {
      return storeTasks.tasks.filter(
        (task) => task.collection === this.currentCollection
      );
    },
  },

  methods: {
    collectionDialog() {
      taskEvents.openCollectionDialog();
    },

    taskDialog() {
      taskEvents.openTaskDialog();
    },
  },
};
</script>

<style>
.border {
  border: 1px solid red;
}

.no-tasks {
  margin-top: 200px;
}
</style>