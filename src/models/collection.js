import Vue from 'vue';

const state = Vue.observable({
  collections: [],
  selectedCollection: ''
});

export function initCollections() {
  if (localStorage.getItem('collections')) {
    state.collections = JSON.parse(localStorage.getItem('collections'));
    
    if (state.collections.length > 0) {
      state.selectedCollection = state.collections[0];
    }
  }
}

export function createCollection(collection) {
  if (collection && !state.collections.some(item => item === collection)) {
    state.collections.push(collection.trim());
    saveCollection()

    return;
  }
}

export function saveCollection() {
  const parsed = JSON.stringify(state.collections);
  localStorage.setItem('collections', parsed);
}

export function deleteCollection(target) {
  state.collections = state.collections.filter(collection => collection !== target);
  saveCollection();
}

export function setCollection(collection) {
  state.selectedCollection = collection;
}

export default state;
