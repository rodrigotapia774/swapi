<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ data }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.subtitle {
  color:#fff;
  font-weight: 800;
  text-transform: uppercase;
}
</style>