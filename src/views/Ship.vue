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
          :datos="starship"
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
      components: ['films', 'pilots']
    }
  },
  computed: {
    ...mapGetters({
        starship: 'getShip',
        loading: 'loading',
        films: 'getFilms',
        pilots: 'getPilots',
        loadingFilms: 'loadingFilms',
        loadingPilots: 'loadingPilots',
    })
  },
  mounted () {
    this.getsShip();
  },
  methods: {
    ...mapActions(["getShip"]),

    async getsShip() {
      const route = useRoute();
      const id = route.params.id;
      this.getShip(id)
    },
  },
}
</script>