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
        <h1>{{ film.title }}</h1>
        <div class="contenedor">
          <div class="list-attr">
            <div class="box-content">
              <h4>Episodio</h4>
              <p>{{ film.episode_id }}</p>
            </div>
            <div class="box-content">
              <h4>director</h4> 
              <p>{{ film.director }}</p>
            </div>
            <div class="box-content">
              <h4>Productos</h4>
              <p>{{ film.producer }}</p>
            </div>
            <div class="box-content">
              <h4>Lanzamiento</h4>
              <p>{{ film.release_date }}</p>
            </div>
          </div>
        </div>
        <div class="contenedor">
          <h4 class="subtitle">Resumén</h4>
          <p>{{ film.opening_crawl }}</p>
        </div>
        <h2 class="title-content">Personajes</h2>
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
              :key="key"
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
        <h2 class="title-content">Planetas</h2>
        <div class="contenedor">
          <div
            v-if="loadingPlanet"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in planets"
              :key="'residents'+key"
            >
              <router-link
                :to="{
                  name: 'Planet',
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
        <h2 class="title-content">Naves</h2>
        <div class="contenedor">
          <div
            v-if="loadingStarship"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in ships"
              :key="'residents'+key"
            >
              <router-link
                :to="{
                  name: 'Ship',
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
        <h2 class="title-content">Vehículos</h2>
        <div class="contenedor">
          <div
            v-if="loadingVehicle"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in vehicles"
              :key="'residents'+key"
            >
              <router-link
                :to="{
                  name: 'Vehicle',
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
        <h2 class="title-content">Especies</h2>
        <div class="contenedor">
          <div
            v-if="loadingSpecies"
            class="subspinner"
          ></div>
          <ul
            v-else
            class="list-fimls"
          >
            <li
              v-for="(data, key) in species"
              :key="'residents'+key"
            >
              <router-link
                :to="{
                  name: 'Specie',
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
            :src="film.img"
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
        film: 'getFilm',
        loading: 'loading',
        residents: 'getResidents',
        loadingResidents: 'loadingResidents',
        planets: 'getPlanets',
        loadingPlanet: 'loadingPlanet',
        ships: 'getShips',
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
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  },
}
</script>