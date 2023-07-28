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
          <h1>{{ specie.name }}</h1>
          <div class="contenedor">
            <div class="list-attr">
              <div class="box-content">
                <h4>Clasificación</h4>
                <p>{{ specie.classification }}</p>
              </div>
              <div class="box-content">
                <h4>Designación</h4> 
                <p>{{ specie.designation }}</p>
              </div>
              <div class="box-content">
                <h4>Altura media</h4> 
                <p>{{ specie.average_height }}</p>
              </div>
              <div class="box-content">
                <h4>Color de piel</h4>
                <p>{{ specie.skin_colors }}</p>
              </div>
              <div class="box-content">
                <h4>Color de cabello</h4>
                <p>{{ specie.hair_colors }}</p>
              </div>
              <div class="box-content">
                <h4>Color de ojos</h4>
                <p>{{ specie.eye_colors }}</p>
              </div>
              <div class="box-content">
                <h4>Promedio de vida</h4>
                <p>{{ specie.average_lifespan }}</p>
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
              <div class="box-content">
                <h4>Lneguaje</h4>
                <p>{{ specie.language }}</p>
              </div>
            </div>
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
                :key="'ship'+key"
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
        </div>
        <div class="col-40">
          <div class="profile-image">
            <img
              :src="specie.img"
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
      imageNotFounf (event) {
        event.target.src = imgNot
      },
    },
  }
  </script>