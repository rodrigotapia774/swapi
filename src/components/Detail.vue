<script setup>
import Info from './Information.vue'
import InfoLink from './InformationLink.vue'
import Resumen from './Resumen.vue'
import Attributes from './Attributes.vue'
</script>

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
        <h1>{{ datos.name }}</h1>
        <div class="contenedor">
          <div class="list-attr">
            <div
              v-for="(data, key) in datos.rows"
              :key="key"
            >
              <Info
                :datos="data"
              />
            </div>
            <InfoLink
              v-if="planet"
              :title="'Planeta'"
              :loading="loadingPlanet"
              :datos="planet"
              :type="'Planet'"
            />
          </div>
        </div>
        <div
          v-if="datos.opening_crawl"
          class="contenedor">
          <Resumen
            :title="'Resumen'"
            :data="datos.opening_crawl"
          />
        </div>
        <Attributes
          v-if="components.includes('films')"
          :title="'Peliculas'"
          :type="'Film'"
          :loading="loadingFilms"
          :datos="films"
        />
        <Attributes
          v-if="components.includes('planets')"
          :title="'Planetas'"
          :type="'Planet'"
          :loading="loadingPlanet"
          :datos="planets"
        />
        <Attributes
          v-if="components.includes('starships')"
          :title="'Naves'"
          :type="'Ship'"
          :loading="loadingStarship"
          :datos="starships"
        />
        <Attributes
          v-if="components.includes('vehicles')"
          :title="'Vehículos'"
          :type="'Vehicle'"
          :loading="loadingVehicle"
          :datos="vehicles"
        />
        <Attributes
          v-if="components.includes('residents')"
          :title="'Residentes'"
          :type="'People'"
          :loading="loadingResidents"
          :datos="residents"
        />
        <Attributes
           v-if="components.includes('species')"
          :title="'Especies'"
          :type="'Specie'"
          :loading="loadingSpecies"
          :datos="species"
        />
        <Attributes
          v-if="components.includes('pilots')"
          :title="'Pilotos'"
          :type="'People'"
          :loading="loadingPilots"
          :datos="pilots"
        />
      </div>
      <div class="col-40">
        <div class="profile-image">
          <img
            :src="datos.img"
            @error="imageNotFounf"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgNot from '@/assets/img/notfound.png';

export default {
  props: {
    datos: {
      type: Object,
      default: {}
    },
    planet: {
      type: [Object, Boolean],
      default: false
    },
    components: {
      type: Array,
      default: []
    },
    films: {
      type: Array,
      default: Array
    },
    planets: {
      type: Array,
      default: Array
    },
    vehicles: {
      type: Object,
      default: Array
    },
    starships: {
      type: Object,
      default: Array
    },
    species: {
      type: Object,
      default: Array
    },
    residents: {
      type: Object,
      default: Array
    },
    pilots: {
      type: Object,
      default: Array
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingFilms: {
      type: Boolean,
      default: false
    },
    loadingPlanet: {
      type: Boolean,
      default: false
    },
    loadingVehicle: {
      type: Boolean,
      default: false
    },
    loadingStarship: {
      type: Boolean,
      default: false
    },
    loadingSpecies: {
      type: Boolean,
      default: false
    },
    loadingPilots: {
      type: Boolean,
      default: false
    },
    loadingResidents: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  }
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-60 {
  width: 60%;
}
.col-40 {
  width: 40%;
}
.list-attr {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.profile-image {
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-radius: 0.2rem;
}
@media (max-width: 768px) {
  .row {
    flex-direction: column-reverse;
  }
  .col-60 {
    width: 100%;
  }
  .col-40 {
    width: 100%;
  }
}
</style>