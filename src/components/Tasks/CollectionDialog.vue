<template>
  <q-dialog v-model="showDialog" @hide="showDialog = false">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Collection</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="nameCollection"
          autofocus
          @keyup.enter="handleCreateCollection"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn 
          flat 
          label="Create" 
          v-close-popup
          @click="handleCreateCollection"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import taskEvents from './_events';
import { createCollection, setCollection } from 'src/models/collection';

export default {
  mounted() {
    taskEvents.onCollectionDialogOpened(fn => this.showDialog = true);
  },

  data: () => ({
    showDialog: false,
    nameCollection: ''
  }),

  methods: {
    handleCreateCollection() {
      createCollection(this.nameCollection);
      setCollection(this.nameCollection);
      this.nameCollection = '';
    }
  }
};
</script>

<style>
</style>