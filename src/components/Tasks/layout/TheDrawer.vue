<template>
  <q-drawer
    :value="drawer"
    @hide="dismissDrawer"
    show-if-above
    bordered
    :breakpoint="700"
  >
    <div class="flex column items-center q-my-xl">
      <q-icon name="task_alt" size="150px" color="primary" />
      <div class="text-h5 text-primary">Quasar Tasks</div>
    </div>

    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="apps" />
        </q-item-section>
        <q-item-section>Overview</q-item-section>
      </q-item>

      <q-separator />
      <q-item-label class="flex justify-between" header>
        <div class="q-mt-xs">Collections</div>
        <q-btn
          size="8px"
          icon="add"
          color="positive"
          round
          @click="collectionDialog"
        />
      </q-item-label>

      <template v-if="collections.length > 0">
        <q-scroll-area style="height: 250px" >
          <template v-for="(collection, index) in collections">
            <CollectionItem 
              :key="index" 
              :collection="collection"
            />
          </template>
        </q-scroll-area>
      </template>

      <div v-else class="flex column items-center q-mt-xl">
        <q-icon color="primary" name="mood_bad" size="80px" />
        <div class="text-h5 text-primary">No collections yet</div>
      </div>
    </q-list>
  </q-drawer>
</template>

<script>
import taskEvents from "../_events";
import CollectionItem from '../CollectionItem.vue';

export default {
  components: {
    CollectionItem
  },

  props: {
    collections: {
      type: Array,
    },

    drawer: {
      type: Boolean,
    },
  },

  methods: {
    dismissDrawer() {
      this.$emit("toogleDrawer");
    },

    collectionDialog() {
      taskEvents.openCollectionDialog();
    },

  },
};
</script>

<style>
</style>