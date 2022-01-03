<template>
  <q-item >
    <q-item-section side top>
      <q-checkbox v-model="done" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ caption }}</q-item-label>
      <q-item-label caption>
        {{description}}
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
export default {
  props: {
    caption: {
      type: String,
    },
    description: {
      type: String
    },
    done: {
      type: Boolean
    }
  },

};
</script>

<style>
</style>