<template>
  <div>
    <div class="form-group">
      <input
        type="text"
        v-model="search"
        placeholder="Buscar personajes ..."
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
        v-for="(datos, key) in peoples.rows"
        :key="key"
      >
        <router-link
          :to="{
            name: 'People',
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
        @click="prev(peoples.prev)"
        :class="{'inactive': peoples.prev === false }"
      >
        Anterior
      </li>
      <li
        @click="next(peoples.next)"
        :class="{'inactive': peoples.next === false }"
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
        peoples: 'getPeoples',
        loading: 'loading'
    })
  },
  mounted () {
    this.getsAllPeople();
  },
  methods: {
    ...mapActions(["getAllPeople"]),

    async getsAllPeople() {
      let params = {
        people: this.people,
        search: this.search
      }
      this.getAllPeople(params)
    },

    buscar () {
      let params = {
        search: this.search
      }
      this.getAllPeople(params)
    },

    prev (n) {
      let params = {
        search: this.search,
        page: n
      }
      this.getAllPeople(params)
    },

    next (n) {
      let params = {
        search: this.search,
        page: n
      }
      this.getAllPeople(params)
    },

    imageNotFounf (event) {
      event.target.src = imgNot
    },
  }
}
</script>