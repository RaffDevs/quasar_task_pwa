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
      <q-badge label="10" />
    </q-item-section>
  </q-item>
</template>

<script>
import store, { setCollection } from 'src/models/collection';

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
      if (store.selectedCollection === this.collection) {
        return true
      }

      return false
    }
  }
};
</script>

<style>
</style>