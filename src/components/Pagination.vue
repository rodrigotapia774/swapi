<template>
  <div>
    <ul
      v-if="loading === false"
      class="paginations"
    >
      <li
        @click="prevClick(prev)"
        :class="{'inactive': prev === false }"
      >
        Anterior
      </li>
      <li
        @click="nextClick(next)"
        :class="{'inactive': next === false }"
      >
        Siguiente
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    next: {
      type: [Number, String, Boolean],
      default: false
    },
    prev: {
      type: [Number, String, Boolean],
      default: false
    },
    loading: Boolean
  },
  methods: {
    nextClick (n) {
      this.$emit('nextPage', n);
    },
    prevClick (n) {
      this.$emit('prevPage', n);
    },
  }
}
</script>

<style scoped>
.paginations {
  margin-top:10px;
  display: flex;
  list-style: none;
  justify-content: center;
}
.paginations li {
  padding: 0.3rem 0.8rem;
  border: 1px solid #dcdcdc;
  color:#dcdcdc;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
  cursor: pointer;
}
.paginations li:hover {
  border-color: #fad006;
  color: #fad006;
}
.paginations li.inactive {
  color: #eee;
  border: 1px solid #eee;
  cursor: default;
}
.paginations li.inactive:hover {
  background-color: #000;
  color: #eee;
}
</style>