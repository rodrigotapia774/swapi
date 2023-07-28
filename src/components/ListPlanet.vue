<template>
    <div>
      <div class="form-group">
        <input
          type="text"
          v-model="search"
          placeholder="Buscar planetas ..."
          v-on:keyup.enter="buscar"
        />
        <button
          @click="buscar"
        >Buscar</button>
      </div>
      <div
        v-show="loading"
        class="spinner"
      ></div>
      <ul
        v-show="loading === false"
        class="list-data"
      >
        <li
          v-for="(datos, key) in planets.rows"
          :key="key"
        >
          <router-link
            :to="{
              name: 'Planet',
              params: { id: datos.id },
            }"
          >
            <div class="box-img">
              <img
                :src="datos.img"
                @error="imageNotFounf"
              />
            </div>
            <span>{{ datos.name }}</span>
          </router-link>
        </li>
      </ul>
      <ul
        v-if="loading === false"
        class="paginations"
      >
        <li
          @click="prev(planets.prev)"
          :class="{'inactive': planets.prev === false }"
        >
          Anterior
        </li>
        <li
          @click="next(planets.next)"
          :class="{'inactive': planets.next === false }"
        >
          Siguiente
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  import imgNot from '@/assets/img/notfound.png';
  
  export default {
    data() {
      return {
        search: '',
      }
    },
    computed: {
      ...mapGetters({
          planets: 'getPlanets',
          loading: 'loading'
      })
    },
    mounted () {
      this.getsAllPlanets();
    },
    methods: {
      ...mapActions(["getAllPlanets"]),
  
      async getsAllPlanets() {
        let params = {
          search: this.search
        }
        this.getAllPlanets(params)
      },
  
      buscar () {
        let params = {
          search: this.search
        }
        this.getAllPlanets(params)
      },
  
      prev (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPlanets(params)
      },
  
      next (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllPlanets(params)
      },

      imageNotFounf (event) {
        event.target.src = imgNot
      },
    }
  }
  </script>