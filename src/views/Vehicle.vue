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
          :datos="vehicle"
          :components="components"
          :films="films"
          :pilots="pilots"
          :loading="loading"
          :loadingFilms="loadingFilms"
          :loadingPilots="loadingPilots"
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
      components: ['pilots', 'films']
    }
  },
  computed: {
    ...mapGetters({
        vehicle: 'getVehicle',
        loading: 'loading',
        pilots: 'getPilots',
        films: 'getFilms',
        loadingFilms: 'loadingFilms',
        loadingPilots: 'loadingPilots',
    })
  },
  mounted () {
    this.getsVehicle();
  },
  methods: {
    ...mapActions(["getVehicle"]),

    async getsVehicle() {
      const route = useRoute();
      const id = route.params.id;
      this.getVehicle(id)
    },
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  },
}
</script>