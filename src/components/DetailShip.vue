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
        <h1>{{ ship.name }}</h1>
        <div class="contenedor">
          <div class="list-attr">
            <div class="box-content">
              <h4>Modelo</h4>
              <p>{{ ship.model }}</p>
            </div>
            <div class="box-content">
              <h4>Fabricante</h4> 
              <p>{{ ship.manufacturer }}</p>
            </div>
            <div class="box-content">
              <h4>Valor</h4> 
              <p>{{ ship.cost_in_credits }}</p>
            </div>
            <div class="box-content">
              <h4>Largo</h4>
              <p>{{ ship.length }}</p>
            </div>
            <div class="box-content">
              <h4>Velocidad atmosférica máxima</h4>
              <p>{{ ship.max_atmosphering_speed }}</p>
            </div>
            <div class="box-content">
              <h4>Tripulación</h4>
              <p>{{ ship.crew }}</p>
            </div>
            <div class="box-content">
              <h4>Clase de nave</h4>
              <p>{{ ship.starship_class }}</p>
            </div>
            <div class="box-content">
              <h4>Clase de nave</h4>
              <p>{{ ship.starship_class }}</p>
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
              v-for="(data, key) in pilots"
              :key="'ship'+key"
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
            :src="ship.img"
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
        ship: 'getShip',
        loading: 'loading',
        films: 'getFilms',
        pilots: 'getPilots',
        loadingFilms: 'loadingFilms',
        loadingResidents: 'loadingResidents',
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
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  },
}
</script>