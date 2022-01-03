import Vue from 'vue';

export default new Vue({
  methods: {
    openCollectionDialog() {
      this.$emit('openCollectionDialog');
    },

    onCollectionDialogOpened(callback) {
      this.$on('openCollectionDialog', callback);
    }
  }
});