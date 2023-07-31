<script setup>
import Nav from '../components/Nav.vue'
</script>

<template>
  <div>
    <div class="section">
      <div class="container-fake"></div>
      <div class="container">
        <Nav/>
        <div class="notfound-container">
          <div>
            <div class="notfoung-404">
              <h2>4</h2>
              <img :src="deathStar"/>
              <h2>4</h2>
            </div>
            <p>La página que esta buscando no existe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deathStar from '@/assets/img/death-star-2.png';

export default {
  name: "PageNotFound",
}
</script>

<style scoped>
.notfound-container{
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items:center;
  vertical-align: middle;
}
.notfound-container p {
  color:rgba(255,255,255,.9);
  text-align: center;
  font-size: 25px;
  margin-top: 20px;
}
.notfoung-404 {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.notfoung-404 h2 {
  color: rgba(255,255,255,.9);
  font-size: 150px;
  line-height: 150px;
}
.notfoung-404 img {
  width: 130px;
  height: 130px;
  margin: 0 10px;
}

</style>