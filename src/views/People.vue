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
          :datos="people"
          :planet="planet"
          :components="components"
          :films="films"
          :vehicles="vehicles"
          :starships="starships"
          :species="species"
          :loading="loading"
          :loadingFilms="loadingFilms"
          :loadingPlanet="loadingPlanet"
          :loadingVehicle="loadingVehicle"
          :loadingStarship="loadingStarship"
          :loadingSpecies="loadingSpecies"
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
      components: ['films', 'vehicles', 'starships', 'species']
    }
  },
  computed: {
    ...mapGetters({
        people: 'getPeople',
        loading: 'loading',
        planet: 'getPlanet',
        films: 'getFilms',
        vehicles: 'getVehicles',
        starships: 'getShips',
        species: 'getSpecies',
        loadingFilms: 'loadingFilms',
        loadingPlanet: 'loadingPlanet',
        loadingVehicle: 'loadingVehicle',
        loadingStarship: 'loadingStarship',
        loadingSpecies: 'loadingSpecies',
    })
  },
  mounted () {
    this.getsPeople();
  },
  methods: {
    ...mapActions(["getPeople"]),

    async getsPeople() {
      const route = useRoute();
      const id = route.params.id;
      this.getPeople(id)
    },
  },
}
</script>