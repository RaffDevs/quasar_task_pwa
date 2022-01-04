<template>
  <q-item 
    clickable  
    v-ripple 
    @click="selectedCollection(collection)"
    :active="activeItem"
  >
    <q-item-section avatar>
      <q-icon color="primary" name="category" />
    </q-item-section>
    <q-item-section>{{ collection }}</q-item-section>
    <q-item-section side>
      <q-badge :label="notFinishedTasksCounter" />
    </q-item-section>
  </q-item>
</template>

<script>
import storeCollection, { setCollection } from 'src/models/collection';
import storeTasks, {} from 'src/models/tasks';

export default {
  props: {
    collection: {
      type: String
    }
  },

  methods: {
    selectedCollection(collection) {
      setCollection(collection);
    }
  },

  computed: {
    activeItem() {
      if (storeCollection.selectedCollection === this.collection) {
        return true
      }

      return false
    },

    notFinishedTasksCounter() {
      return storeTasks.tasks.filter(
        task => task.isCompleted === false && 
        task.collection === this.collection
      ).length
    }
  }
};
</script>

<style>
</style>