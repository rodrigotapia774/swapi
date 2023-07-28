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
        <h1>{{ people.name }}</h1>
        <div class="contenedor">
          <div class="list-attr">
            <div class="box-content">
              <h4>Color de ojos</h4>
              <p>{{ people.eye_color }}</p>
            </div>
            <div class="box-content">
              <h4>Altura</h4> 
              <p>{{ people.height }}</p>
            </div>
            <div class="box-content">
              <h4>Masa</h4> 
              <p>{{ people.mass }}</p>
            </div>
            <div class="box-content">
              <h4>Color cabello</h4>
              <p>{{ people.hair_color }}</p>
            </div>
            <div class="box-content">
              <h4>Color de piel</h4>
              <p>{{ people.skin_color }}</p>
            </div>
            <div class="box-content">
              <h4>Cumpleaños</h4>
              <p>{{ people.birth_year }}</p>
            </div>
            <div class="box-content">
              <h4>Genero</h4>
              <p>{{ people.gender }}</p>
            </div>
            <div class="box-content">
              <h4>Planeta</h4>
              <span
                v-if="loadingPlanet"
                class="bar-loader"
              ></span>
              <router-link
                v-else
                :to="{
                  name: 'Planet',
                  params: { id: planet.id },
                }"
              >
                {{ planet.name }}
              </router-link>
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
              v-for="(data, key) in starships"
              :key="'ship'+key"
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
              :key="'vehicle'+key"
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
              :key="'specie'+key"
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
            :src="people.img"
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
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  },
}
</script>