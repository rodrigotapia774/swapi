<script setup>
import Nav from '../components/Nav.vue'
import Detail from '../components/Detail.vue'
</script>

<template>
  <div>
    <div class="section">
      <div class="container-fake"></div>
      <div class="container">
        <Nav/>
        <Detail
          :datos="planet"
          :components="components"
          :residents="residents"
          :films="films"
          :loading="loading"
          :loadingFilms="loadingFilms"
          :loadingResidents="loadingResidents"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      components: ['films', 'residents']
    }
  },
  computed: {
    ...mapGetters({
      planet: 'getPlanet',
      loading: 'loadingPlanet',
      residents: 'getResidents',
      films: 'getFilms',
      loadingFilms: 'loadingFilms',
      loadingResidents: 'loadingResidents',
    })
  },
  mounted () {
    this.getsPlanet();
  },
  methods: {
    ...mapActions(["getPlanet"]),

    async getsPlanet() {
      const route = useRoute();
      const id = route.params.id;
      this.getPlanet(id)
    },
  },
}
</script>