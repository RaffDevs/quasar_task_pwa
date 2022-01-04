<template>
  <q-layout view="lHh Lpr lFf">
    <q-header v-if="$q.platform.is.mobile" elevated >
      <q-toolbar>
        <q-btn flat @click="drawer = true" round dense icon="menu" />
        <q-toolbar-title>QTasks</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <Drawer 
      :collections="collections" 
      :drawer="drawer"
      @toogleDrawer="drawer = false"
    />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import storeCollection, { initCollections } from 'src/models/collection';
import storeTasks, { initTask } from 'src/models/tasks';
import Drawer from 'src/components/Tasks/layout/TheDrawer.vue';

export default {
  name: 'MainLayout',

  components: {
    Drawer
  },

  mounted() {
    initCollections();
    initTask();
  },

  data: () => ({
    drawer: true,
  }),

  computed: {
    collections() {
      return storeCollection.collections
    },

    tasks() {
      return storeTasks.tasks
    }
  }

}
</script>
