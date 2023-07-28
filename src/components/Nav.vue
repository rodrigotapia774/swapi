<template>
  <div>
    <h1 class="title-starwars">STAR WARS</h1>
    <ul class="nav-list">
      <li class="sm-hidde">
        <h1>STAR WARS</h1>
      </li>
      <li>
        <router-link to="/">
          Personajes
        </router-link>
      </li>
      <li>
        <router-link to="/planets">
          Planetas
        </router-link>
      </li>
      <li>
        <router-link to="/ships">
          Naves
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-list {
  list-style: none;
  margin: 0 0 1rem 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.router-link-active {
  color:#fad006 !important;
}
.nav-list li {
  padding: 0 0.5rem 1rem;
}
.nav-list li a {
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
}
.nav-list li h1 {
  color: #fad006;
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>