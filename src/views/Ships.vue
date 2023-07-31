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
          :results="ships.rows"
          :loading="loading"
        />
        <Pagination
          :loading="loading"
          :next="ships.next"
          :prev="ships.prev"
          @nextPage="next"
          @prevPage="prev"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapGetters({
        ships: 'getShips',
        loading: 'loading'
    })
  },
  mounted () {
    this.getsAllShips();
  },
  methods: {
    ...mapActions(["getAllShips"]),

    async getsAllShips() {
      let params = {
        search: this.search
      }
      this.getAllShips(params)
    },

    buscar (n) {
      thius.search = n
      let params = {
        search: this.search
      }
      this.getAllShips(params)
    },

    prev (n) {
      let params = {
        search: this.search,
        page: n
      }
      this.getAllShips(params)
    },

    next (n) {
      let params = {
        search: this.search,
        page: n
      }
      this.getAllShips(params)
    },
  }
}
</script>