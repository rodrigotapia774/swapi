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
          :datos="film"
          :components="components"
          :residents="residents"
          :planets="planets"
          :starships="starships"
          :vehicles="vehicles"
          :species="species"
          :loading="loading"
          :loadingResidents="loadingResidents"
          :loadingPlanet="loadingPlanet"
          :loadingStarship="loadingStarship"
          :loadingVehicle="loadingVehicle"
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
      components: ['residents', 'planets', 'starships', 'vehicles', 'species']
    }
  },
  computed: {
    ...mapGetters({
        film: 'getFilm',
        loading: 'loading',
        residents: 'getResidents',
        loadingResidents: 'loadingResidents',
        planets: 'getPlanets',
        loadingPlanet: 'loadingPlanet',
        starships: 'getShips',
        loadingStarship: 'loadingStarship',
        vehicles: 'getVehicles',
        loadingVehicle: 'loadingVehicle',
        species: 'getSpecies',
        loadingSpecies: 'loadingSpecies',
    })
  },
  mounted () {
    this.getsFilm();
  },
  methods: {
    ...mapActions(["getFilm"]),

    async getsFilm() {
      const route = useRoute();
      const id = route.params.id;
      this.getFilm(id)
    },
  },
}
</script>