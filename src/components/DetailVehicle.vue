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
          <h1>{{ vehicle.name }}</h1>
          <div class="contenedor">
            <div class="list-attr">
              <div class="box-content">
                <h4>Modelo</h4>
                <p>{{ vehicle.model }}</p>
              </div>
              <div class="box-content">
                <h4>Fabricante</h4> 
                <p>{{ vehicle.manufacturer }}</p>
              </div>
              <div class="box-content">
                <h4>Valor</h4> 
                <p>{{ vehicle.cost_in_credits }}</p>
              </div>
              <div class="box-content">
                <h4>Longitud</h4>
                <p>{{ vehicle.length }}</p>
              </div>
              <div class="box-content">
                <h4>Velocidad atmosférica máxima</h4>
                <p>{{ vehicle.max_atmosphering_speed }}</p>
              </div>
              <div class="box-content">
                <h4>Tripulación</h4>
                <p>{{ vehicle.crew }}</p>
              </div>
              <div class="box-content">
                <h4>Pasajeros</h4>
                <p>{{ vehicle.passengers }}</p>
              </div>
              <div class="box-content">
                <h4>Capacidad de carga</h4>
                <p>{{ vehicle.cargo_capacity }}</p>
              </div>
              <div class="box-content">
                <h4>Consumible</h4>
                <p>{{ vehicle.consumables }}</p>
              </div>
              <div class="box-content">
                <h4>Clase de vehículo</h4>
                <p>{{ vehicle.vehicle_class }}</p>
              </div>
            </div>
          </div>
          <h2 class="title-content">Pilotos</h2>
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
              :src="vehicle.img"
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
          vehicle: 'getVehicle',
          loading: 'loading',
          residents: 'getResidents',
          films: 'getFilms',
          loadingFilms: 'loadingFilms',
          loadingResidents: 'loadingResidents',
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