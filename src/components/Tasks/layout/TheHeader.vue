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
        <q-btn round icon="more_vert" flat color="primary" />
      </template>
    </q-banner>
    <q-separator />
  </div>
</template>

<script>

import taskEvents from '../_events';

export default {
  props: {
    currentCollection: {
      type: String,
    },
  },

  methods: {
    openTaskDialog() {
      taskEvents.openTaskDialog();
    }
  }
};
</script>

<style>
</style>