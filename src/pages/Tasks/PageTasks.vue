<template>
  <q-page class="row">
    <TasksContainer/>
  </q-page>
</template>

<script>
import TasksContainer from 'components/Tasks/TasksContainer.vue';

export default {
  name: 'PageTasks',
  components: {
    TasksContainer
  }
}
</script>
