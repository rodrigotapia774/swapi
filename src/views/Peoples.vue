<script setup>
import Nav from '../components/Nav.vue'
import Search from '../components/Search.vue'
import List from '../components/List.vue'
import Pagination from '../components/Pagination.vue'
</script>

<template>
  <div>
    <div class="section">
      <div class="container-fake"></div>
      <div class="container">
        <Nav/>
        <Search
          :placeTxt="'Buscar personajes ..'"
          @search="buscar"
        />
        <List
          :results="peoples.rows"
          :loading="loading"
        />
        <Pagination
          :loading="loading"
          :next="peoples.next"
          :prev="peoples.prev"
          @nextPage="next"
          @prevPage="prev"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters({
        peoples: 'getPeoples',
        loading: 'loading'
    })
  },
  mounted () {
    this.getsAllPeople();
  },
  methods: {
    ...mapActions(["getAllPeople"]),

    async getsAllPeople() {
      let params = {
        search: ''
      }
      this.getAllPeople(params)
    },

    buscar (n) {
      this.search = n
      let params = {
        search: this.search
      }
      this.getAllPeople(params)
    },

    prev (n) {
      if (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPeople(params)
      }
    },

    next (n) {
      if (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPeople(params)
      }
    },
  }
}
</script>