<template>
  <div class="banner">
    <q-banner inline-actions class="text-black">
      <template v-slot:avatar>
        <q-icon name="category" color="primary" />
      </template>
      {{ currentCollection }}
      <template v-slot:action>
        <q-btn 
          label="New Task" 
          color="positive"
          class="q-mx-md"
          @click="openTaskDialog"
        />
        <q-btn
          label="Delete"
          flat
          color="negative"
          @click="delCollection"
        />
      </template>
    </q-banner>
    <q-separator />
  </div>
</template>

<script>

import taskEvents from '../_events';
import storeCollection, { deleteCollection, setCollection } from 'src/models/collection';
import { deleteTasksByCollection } from 'src/models/tasks';

export default {
  props: {
    currentCollection: {
      type: String,
    },
  },

  methods: {
    openTaskDialog() {
      taskEvents.openTaskDialog();
    },

    delCollection() {
      const currentCollection = storeCollection.selectedCollection;
      const collections = storeCollection.collections;

      deleteCollection(currentCollection);
      deleteTasksByCollection(currentCollection);

      if (collections.length > 0) {
        setCollection(collections[0]);

        return;
      }

      setCollection('');
    }
  },
  
};
</script>

<style>
</style>