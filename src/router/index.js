import { createRouter, createWebHistory } from 'vue-router'
import Peoples from '../views/Peoples.vue'
import Planets from '../views/Planets.vue'
import Planet from '../views/Planet.vue'
import Ships from '../views/Ships.vue'
import People from '../views/People.vue'
import Ship from '../views/Ship.vue'
import Film from '../views/Film.vue'
import Specie from '../views/Specie.vue'
import Vehicle from '../views/Vehicle.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Peoples',
      component: Peoples
    },
    {
      path: "/planets",
      name: "Planets",
      component: Planets,
    },
    {
      path: "/ships",
      name: "Ships",
      component: Ships,
    },
    {
      path: "/people/:id",
      name: "People",
      component: People,
      params: ["id"],
    },
    {
      path: "/planet/:id",
      name: "Planet",
      component: Planet,
      params: ["id"],
    },
    {
      path: "/ship/:id",
      name: "Ship",
      component: Ship,
      params: ["id"],
    },
    {
      path: "/film/:id",
      name: "Film",
      component: Film,
      params: ["id"],
    },
    {
      path: "/specie/:id",
      name: "Specie",
      component: Specie,
      params: ["id"],
    },
    {
      path: "/vehicle/:id",
      name: "Vehicle",
      component: Vehicle,
      params: ["id"],
    },
    {
      path: "/:catchAll(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ]
})

export default router
