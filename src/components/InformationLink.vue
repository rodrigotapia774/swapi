<template>
    <div>
      <div class="box-content">
        <h4>{{ title }}</h4>
        <router-link
          :to="{
            name: type,
            params: { id: datos.id },
          }"
        >
          {{ datos.name }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      datos: {
        type: Object,
        default: {},
      },
      loding: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default:'Planet'
      }
    },
  }
  </script>

<style scoped>
.box-content {
  width: 190px;
  border: 1px solid #fff;
  padding: 0.5rem;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  margin: 5px;
  border-radius: 0.2rem;
}
.box-content h4 {
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
}
.box-content p {
  color:#fff;
  text-align: center;
}
@media (max-width: 768px) {
  .box-content {
    width: 170px;
  }
}
</style>