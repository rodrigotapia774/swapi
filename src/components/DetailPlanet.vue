<template>
  <div>
    <div
      v-if="loading"
      class="spinner"
    ></div>
    <div
      v-else
      class="row"
    >
      <div class="col-60">
        <h1>{{ planet.name }}</h1>
        <div class="contenedor">
          <div class="list-attr">
            <div class="box-content">
              <h4>Rotación</h4>
              <p>{{ planet.rotation_period }}</p>
            </div>
            <div class="box-content">
              <h4>Órbita</h4> 
              <p>{{ planet.orbital_period }}</p>
            </div>
            <div class="box-content">
              <h4>Diametro</h4> 
              <p>{{ planet.diameter }}</p>
            </div>
            <div class="box-content">
              <h4>Clima</h4>
              <p>{{ planet.climate }}</p>
            </div>
            <div class="box-content">
              <h4>Gravedad</h4>
              <p>{{ planet.gravity }}</p>
            </div>
            <div class="box-content">
              <h4>Terreno</h4>
              <p>{{ planet.terrain }}</p>
            </div>
            <div class="box-content">
              <h4>Superficie de agua</h4>
              <p>{{ planet.surface_water }}</p>
            </div>
            <div class="box-content">
              <h4>Población</h4>
              <p>{{ planet.population }}</p>
            </div>
          </div>
        </div>
        <h2 class="title-content">Peliculas</h2>
        <div class="contenedor">
          <div
            v-if="loadingFilms"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in films"
              :key="key"
            >
              <router-link
                :to="{
                  name: 'Film',
                  params: { id: data.id },
                }"
              >
                <div class="content-film">
                  <img
                    :src="data.img"
                    @error="imageNotFounf"
                  />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <h2 class="title-content">Residentes</h2>
        <div class="contenedor">
          <div
            v-if="loadingResidents"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in residents"
              :key="'residents'+key"
            >
              <router-link
                :to="{
                  name: 'People',
                  params: { id: data.id },
                }"
              >
                <div class="content-film">
                  <img
                    :src="data.img"
                    @error="imageNotFounf"
                  />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-40">
        <div class="profile-image">
          <img
            :src="planet.img"
            @error="imageNotFounf"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapGetters, mapActions } from "vuex";
import imgNot from '@/assets/img/notfound.png';

export default {
  data() {
    return {
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
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  },
}
</script>