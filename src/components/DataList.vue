<template>
  <div>
    <router-link
      :to="{
        name: data.type,
        params: { id: data.id },
      }"
    >
      <div class="box-img">
        <img
          :src="data.img"
          @error="imageNotFounf"
        />
      </div>
      <span>{{ data.name }}</span>
    </router-link>
  </div>
</template>

<script>
import imgNot from '@/assets/img/notfound.png';

export default {
  props: {
    data: Object
  },
  methods: {
    imageNotFounf (event) {
      event.target.src = imgNot
    },
  }
}
</script>

<style scoped>
.list-data li a {
  border:1px solid #dcdcdc;
  display: block;
  cursor: pointer;
  text-align: center;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 0.4rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.2rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.list-data li a:hover {
  border-color: #fad006;
}
.list-data li a .box-img {
  width: 100%;
  height: 250px;
  border-radius: 0.2rem;
  overflow: hidden;
  border:1px solid transparent;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
.list-data li a .box-img img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
}
.list-data li a span {
  height: 55px;
  font-weight: 900;
  font-size: 18px;
  display: block;
}
</style>