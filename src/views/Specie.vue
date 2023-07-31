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
          :datos="specie"
          :components="components"
          :planet="planet"
          :films="films"
          :residents="residents"
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
      components: ['residents', 'films']
    }
  },
  computed: {
    ...mapGetters({
        specie: 'getSpecie',
        loading: 'loading',
        residents: 'getResidents',
        planet: 'getPlanet',
        films: 'getFilms',
        loadingFilms: 'loadingFilms',
        loadingResidents: 'loadingResidents',
        loadingPlanet: 'loadingPlanet'
    })
  },
  mounted () {
    this.getsSpecie();
  },
  methods: {
    ...mapActions(["getSpecie"]),

    async getsSpecie() {
      const route = useRoute();
      const id = route.params.id;
      this.getSpecie(id)
    },
  },
}
</script>