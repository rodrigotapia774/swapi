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
          :placeTxt="'Buscar Planetas ..'"
          @search="buscar"
        />
        <List
          :results="planets.rows"
          :loading="loading"
        />
        <Pagination
          :loading="loading"
          :next="planets.next"
          :prev="planets.prev"
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
        planets: 'getPlanets',
        loading: 'loading'
    })
  },
  mounted () {
    this.getsAllPlanets();
  },
  methods: {
    ...mapActions(["getAllPlanets"]),

    async getsAllPlanets() {
      let params = {
        search: ''
      }
      this.getAllPlanets(params)
    },

    buscar (n) {
      this.search = n
      let params = {
        search: this.search
      }
      this.getAllPlanets(params)
    },

    prev (n) {
      if (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPlanets(params)
      }
    },

    next (n) {
      if (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPlanets(params)
      }
    },
  }
}
</script>