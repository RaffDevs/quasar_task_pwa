<template>
  <q-item >
    <q-item-section side top>
      <q-checkbox v-model="completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ task.title }}</q-item-label>
      <q-item-label caption>
        {{task.description}}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-btn
        icon="delete"
        color="negative"
        flat
        round
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { toggleTask } from 'src/models/tasks';

export default {
  props: {
    task: {
      type: Object
    }
  },

  data() {
    return {
      completed: this.task.isCompleted
    }
  },

  watch: {
    completed(recent, old) {
      toggleTask(this.task.id, recent);
    }
  }

  

};
</script>

<style>
</style>