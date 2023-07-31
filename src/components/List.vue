<script setup>
import DataList from './DataList.vue'
</script>

<template>
  <div>
    <div
      v-if="loading"
      class="spinner"
    ></div>
    <ul
      v-else
      class="list-data"
    >
      <li
        v-for="(datos, key) in results"
        :key="key"
      >
        <DataList 
          :data="datos"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    results: Array,
    loading: Boolean
  },
}
</script>

<style scoped>
.list-data {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.list-data li {
  margin: 5px;
  width: 250px;
}
@media (max-width: 999px) {
  .list-data li {
    width: calc(50% - 10px);
  }
}
@media (max-width: 768px) {
  .list-data li {
    width: 80%;
  }
}
</style>