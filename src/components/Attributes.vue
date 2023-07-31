<template>
  <div>
    <h2 class="title-content">{{ title }}</h2>
    <div
      v-if="loading"
      class="subspinner"
    ></div>
    <div
      v-else
    >
      <ul
        v-if="datos.length > 0"
        class="list-fimls"
      >
        <li
          v-for="(data, key) in datos"
          :key="key"
        >
          <router-link
            :to="{
              name: type,
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
      <p
        v-else
      >
        Sin datos para mostrar
      </p>
    </div>
  </div>
</template>

<script>
import imgNot from '@/assets/img/notfound.png';

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'People'
    },
    loading: {
      type: Boolean,
      default: false
    },
    datos: {
      type: Array,
      default: []
    }
  },
  methods: {
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  }
}
</script>

<style scoped>
.title-content {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  margin-top:1rem;
}
.list-fimls {
  list-style: none;
  padding:0;
  display: flex;
  flex-wrap: wrap;
}
.list-fimls li {
  overflow: hidden;
  width: 20%;
}
.list-fimls li a {
  display: block;
  margin: 5px;
  border: 1px solid #fff;
  padding: 5px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.list-fimls li a:hover {
  border-color: #fad006;
}
.list-fimls li a .content-film {
  position: relative;
  display: flex;
  width: 100%;
}  
.list-fimls li a .content-film img {
  width: 100%;
}
@media (max-width: 768px) {
  .list-fimls li {
    width: 33.333%;
  }
}
</style>