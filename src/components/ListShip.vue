<template>
    <div>
      <div class="form-group">
        <input
          type="text"
          v-model="search"
          placeholder="Buscar naves ..."
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
          v-for="(datos, key) in ships.rows"
          :key="key"
        >
          <router-link
            :to="{
              name: 'Ship',
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
          @click="prev(ships.prev)"
          :class="{'inactive': ships.prev === false }"
        >
          Anterior
        </li>
        <li
          @click="next(ships.next)"
          :class="{'inactive': ships.next === false }"
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
          ships: 'getShips',
          loading: 'loading'
      })
    },
    mounted () {
      this.getsAllShips();
    },
    methods: {
      ...mapActions(["getAllShips"]),
  
      async getsAllShips() {
        let params = {
          search: this.search
        }
        this.getAllShips(params)
      },
  
      buscar () {
        let params = {
          search: this.search
        }
        this.getAllShips(params)
      },
  
      prev (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllShips(params)
      },
  
      next (n) {
        let params = {
          search: this.search,
          page: n
        }
        this.getAllShips(params)
      },

      imageNotFounf (event) {
        event.target.src = imgNot
      },
    }
  }
  </script>