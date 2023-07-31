<template>
  <div>
    <div class="form-group">
      <input
        type="text"
        v-model="search"
        :placeholder=placeTxt
        v-on:keyup.enter="buscarData"
      />
      <button
        @click="buscarData"
      >Buscar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeTxt: String
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    buscarData () {
      if ( this.search.length > 0 ) {
        this.$emit('search', this.search)
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  max-width: 100%;
  width: 500px;
  position: relative;
  border-radius: 25px;
  margin: 0px auto 1rem;
}
.form-group input {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  border: 1px solid #fff;
  padding: 0.6rem 0.4rem;
  background: #000;
  color: #fff;
  font-size: 14px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.form-group input:focus-visible {
  outline: none;
}
.form-group button {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #fff;
  margin-left: -2px;
  padding: 0.2rem 0.8rem;
  font-size: 14px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.form-group button:hover {
  color: #000;
  background-color: #fad006;
}
@media (max-width: 999px) {
  .form-group {
    width: 60%;
  }
}
@media (max-width: 768px) {
  .form-group {
    width: 80%;
  }
}
</style>