import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({

  state: { 
    peoples: [],
    people: {},
    planets: [],
    planet: {},
    ships: [],
    ship: {},
    residents: [],
    films: [],
    film: {},
    pilots: [],
    vehicle: {},
    vehicles: [],
    species: [],
    specie: {},
    loading: false,
    loadingResidents: false,
    loadingFilms: false,
    loadingPlanet: false,
    loadingVehicle: false,
    loadingStarship: false,
    loadingSpecies: false,
  }, mutations: {

    setPeoples (state, data) {
      const datos = {
        rows: [],
        count: 0,
        next: '',
        prev: ''
      }

      data.results.forEach(function (item, index) {
        let params = item.url.split('/')
        let id = params[params.length - 2]

        datos.rows.push({
          id: id,
          name: item.name,
          img: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        })
      })

      datos.count = data.count

      let paramsNext = new URLSearchParams(data.next)
      datos.next = ( paramsNext.get('page') ) ? paramsNext.get('page') : false
      
      let paramsPrev = new URLSearchParams(data.previous)
      datos.prev = ( paramsPrev.get('page') )? paramsPrev.get('page') : false

      state.peoples = datos;
    },

    setPeople (state, data) {
      state.planet = {}
      state.ships = []
      state.species = []
      state.loadingFilms = true
      state.loadingVehicle = true
      state.loadingStarship = true
      state.loadingSpecies = true
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
      datos.eye_color = (data.eye_color != 'unknown') ? data.eye_color : 'Sin datos'
      datos.height = (data.height != 'unknown') ? Intl.NumberFormat("es-CL").format(data.height) : 'Sin datos'
      datos.mass = (data.mass != 'unknown') ? Intl.NumberFormat("es-CL").format(data.mass) : 'Sin datos'
      datos.hair_color = (data.hair_color != 'unknown') ? data.hair_color : 'Sin datos'
      datos.skin_color = (data.skin_color != 'unknown') ? data.skin_color : 'Sin datos'
      datos.birth_year = (data.birth_year != 'unknown') ? data.birth_year : 'Sin datos'
      datos.gender = (data.gender != 'unknown') ? data.gender : 'Sin datos'
      datos.homeworld = (data.homeworld != 'unknown') ? data.homeworld : 'Sin datos'

      params = data.homeworld.split('/')
      id = params[params.length - 2]
      this.dispatch('getPlanetInto', id);

      const films = []

      data.films.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        films.push(id)
      })

      const send = film =>
        new Promise(resolve =>
          resolve(this.dispatch('getFilms', film))
        );
      
      let film = '';

      const sendAllFilms = async () => {
        for (film of films) {
          const filmInfo = await send(film)
        }
        state.loadingFilms = false
      };

      sendAllFilms()

      const vehicles = []

      data.vehicles.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        vehicles.push(id)
      })

      const sendVehicles = vehicle =>
        new Promise(resolve =>
          resolve(this.dispatch('getVehicles', vehicle))
        );
      
      let vehicle = '';

      const sendAllVehicles = async () => {
        for (vehicle of vehicles) {
          const vehicleInfo = await sendVehicles(vehicle)
        }
        state.loadingVehicle = false
      };

      sendAllVehicles()

      const starships = []

      data.starships.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        starships.push(id)
      })

      const sendStarships = starship =>
        new Promise(resolve =>
          resolve(this.dispatch('getShipPush', starship))
        );
      
      let starship = '';

      const sendAllStarships = async () => {
        for (starship of starships) {
          const starshipInfo = await sendStarships(starship)
        }
        state.loadingStarship = false
      };

      sendAllStarships()

      const species = []

      data.species.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        species.push(id)
      })

      const sendSpecies = specie =>
        new Promise(resolve =>
          resolve(this.dispatch('getSpecies', specie))
        );
      
      let specie = '';

      const sendAllSpecies = async () => {
        for (specie of species) {
          const specieInfo = await sendSpecies(specie)
        }
        state.loadingSpecies = false
      };

      sendAllSpecies()

      state.people = datos;
    },

    setCharacter (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.title
      datos.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

      state.residents.push(datos)
    },

    setPilots (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.title
      datos.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

      state.pilots.push(datos)
    },

    setFilms (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.title
      datos.img = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`

      state.films.push(datos);
    },

    setFilm (state, data) {
      state.loadingStarship = true
      state.loadingResidents = true
      state.loadingPlanet = true
      state.loadingVehicle = true
      state.loadingSpecies = true
      state.peoples = []
      state.planets = []
      state.ships = []
      state.vehicles = []
      
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.title = (data.title != 'unknown') ? data.title : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`
      datos.episode_id = (data.episode_id != 'unknown') ? data.episode_id : 'Sin datos'
      datos.opening_crawl = (data.opening_crawl != 'unknown') ? data.opening_crawl : 'Sin datos'
      datos.director = (data.director != 'unknown') ? data.director : 'Sin datos'
      datos.producer = (data.producer != 'unknown') ? data.producer : 'Sin datos'
      datos.release_date = (data.release_date != 'unknown') ? data.release_date : 'Sin datos'

      const characters = []

      data.characters.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        characters.push(id)
      })

      const sendCharacters = character =>
        new Promise(resolve =>
          resolve(this.dispatch('getCharacter', character))
        );
      
      let character = '';

      const sendAllCharacter = async () => {
        for (character of characters) {
          const characterInfo = await sendCharacters(character)
        }
        state.loadingResidents = false
      };

      sendAllCharacter()

      const planets = []

      data.planets.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        planets.push(id)
      })

      const sendPlanets = planet =>
        new Promise(resolve =>
          resolve(this.dispatch('getPushPlanet', planet))
        );
      
      let planet = '';

      const sendAllPlanet = async () => {
        for (planet of planets) {
          const planetInfo = await sendPlanets(planet)
        }
        state.loadingPlanet = false
      };

      sendAllPlanet()

      const ships = []

      data.starships.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        ships.push(id)
      })

      const sendShips = ship =>
        new Promise(resolve =>
          resolve(this.dispatch('getShipPush', ship))
        );
      
      let ship = '';

      const sendAllShip = async () => {
        for (ship of ships) {
          const shipInfo = await sendShips(ship)
        }
        state.loadingStarship = false
      };

      sendAllShip()

      const vehicles = []

      data.vehicles.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        vehicles.push(id)
      })

      const sendVehicles = vehicle =>
        new Promise(resolve =>
          resolve(this.dispatch('getVehicles', vehicle))
        );
      
      let vehicle = '';

      const sendAllVehicle = async () => {
        for (vehicle of vehicles) {
          const vehicleInfo = await sendVehicles(vehicle)
        }
        state.loadingVehicle = false
      };

      sendAllVehicle()

      const species = []

      data.species.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        species.push(id)
      })

      const sendSpecies = specie =>
        new Promise(resolve =>
          resolve(this.dispatch('getSpecies', specie))
        );
      
      let specie = '';

      const sendAllSpecie = async () => {
        for (specie of species) {
          const specieInfo = await sendSpecies(specie)
        }
        state.loadingSpecies = false
      };

      sendAllSpecie()

      state.film = datos
    },

    setSpecies (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.title
      datos.img = `https://starwars-visualguide.com/assets/img/species/${id}.jpg`

      state.species.push(datos);
    },

    setSpecie (state, data) {
      state.loadingResidents = true
      state.loadingFilms = true
      state.residents = []
      state.films = []
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]
      datos.img = `https://starwars-visualguide.com/assets/img/species/${id}.jpg`

      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.classification = (data.classification != 'unknown') ? data.classification : 'Sin datos'
      datos.designation = (data.designation != 'unknown') ? data.designation : 'Sin datos'
      datos.average_height = (data.average_height != 'unknown') ? data.average_height : 'Sin datos'
      datos.skin_colors = (data.skin_colors != 'unknown') ? data.skin_colors : 'Sin datos'
      datos.hair_colors = (data.hair_colors != 'unknown') ? data.hair_colors : 'Sin datos'
      datos.eye_colors = (data.eye_colors != 'unknown') ? data.eye_colors : 'Sin datos'
      datos.average_lifespan = (data.average_lifespan != 'unknown') ? data.average_lifespan : 'Sin datos'
      datos.homeworld = (data.homeworld != 'unknown') ? data.homeworld : 'Sin datos'
      datos.language = (data.language != 'unknown') ? data.language : 'Sin datos'

      const characters = []

      data.people.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        characters.push(id)
      })

      const sendCharacters = character =>
        new Promise(resolve =>
          resolve(this.dispatch('getCharacter', character))
        );
      
      let character = '';

      const sendAllCharacter = async () => {
        for (character of characters) {
          const characterInfo = await sendCharacters(character)
        }
        state.loadingResidents = false
      };

      sendAllCharacter()

      const films = []

      data.films.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        films.push(id)
      })

      const send = film =>
        new Promise(resolve =>
          resolve(this.dispatch('getFilms', film))
        );
      
      let film = '';

      const sendAllFilms = async () => {
        for (film of films) {
          const filmInfo = await send(film)
        }
        state.loadingFilms = false
      };

      sendAllFilms()

      state.specie = datos
    },

    setVehicle (state, data) {
      state.loadingResidents = true
      state.loadingFilms = true
      state.residents = []
      state.films = []

      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id
      datos.img = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.model = (data.model != 'unknown') ? data.model : 'Sin datos'
      datos.manufacturer = (data.manufacturer != 'unknown') ? data.manufacturer : 'Sin datos'
      datos.cost_in_credits = (data.cost_in_credits != 'unknown') ? Intl.NumberFormat("es-CL").format(data.cost_in_credits) : 'Sin datos'
      datos.length = (data.length != 'unknown') ? data.length : 'Sin datos'
      datos.max_atmosphering_speed = (data.max_atmosphering_speed != 'unknown') ? Intl.NumberFormat("es-CL").format(data.max_atmosphering_speed) : 'Sin datos'
      datos.crew = (data.crew != 'unknown') ? Intl.NumberFormat("es-CL").format(data.crew) : 'Sin datos'
      datos.passengers = (data.passengers != 'unknown') ? Intl.NumberFormat("es-CL").format(data.passengers) : 'Sin datos'
      datos.cargo_capacity = (data.cargo_capacity != 'unknown') ? Intl.NumberFormat("es-CL").format(data.cargo_capacity) : 'Sin datos'
      datos.consumables = (data.consumables != 'unknown') ? data.consumables : 'Sin datos'
      datos.vehicle_class = (data.vehicle_class != 'unknown') ? data.vehicle_class : 'Sin datos'
      datos.pilots = (data.pilots != 'unknown') ? data.pilots : 'Sin datos'

      const residents = []

      data.pilots.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        residents.push(id)
      })

      const sendResident = resident =>
        new Promise(resolve =>
          resolve(this.dispatch('getResidents', resident))
        );
      
      let resident = '';

      const sendAllResidents = async () => {
        for (resident of residents) {
          const residentmInfo = await sendResident(resident)
        }
        state.loadingResidents = false
      };

      sendAllResidents()

      const films = []

      data.films.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        films.push(id)
      })

      const send = film =>
        new Promise(resolve =>
          resolve(this.dispatch('getFilms', film))
        );
      
      let film = '';

      const sendAllFilms = async () => {
        for (film of films) {
          const filmInfo = await send(film)
        }
        state.loadingFilms = false
      };

      sendAllFilms()

      state.vehicle = datos
    },

    setVehicles (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.title
      datos.img = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`

      state.vehicles.push(datos);
    },

    setResidents (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.name
      datos.img = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

      state.residents.push(datos);
    },

    setPushPlanet (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id,
      datos.name = data.name
      datos.img = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

      state.planets.push(datos);
    },

    setPlanets (state, data) {
      const datos = {
        rows: [],
        count: 0,
        next: '',
        prev: ''
      }

      data.results.forEach(function (item, index) {
        let params = item.url.split('/')
        let id = params[params.length - 2]

        datos.rows.push({
          id: id,
          name: item.name,
          img: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
        })
      })
      
      datos.count = data.count

      let paramsNext = new URLSearchParams(data.next)
      datos.next = ( paramsNext.get('page') ) ? paramsNext.get('page') : false
      
      let paramsPrev = new URLSearchParams(data.previous)
      datos.prev = ( paramsPrev.get('page') )? paramsPrev.get('page') : false

      state.planets = datos;
      state.residents = []
    },

    setPlanet (state, data) {
      state.residents = []
      state.films = []
      state.loadingFilms = true
      state.loadingResidents = true
      const datos = {}
      state.films

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id
      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
      datos.rotation_period = (data.rotation_period != 'unknown') ? Intl.NumberFormat("es-CL").format(data.rotation_period) : 'Sin datos'
      datos.orbital_period = (data.orbital_period != 'unknown') ? Intl.NumberFormat("es-CL").format(data.orbital_period) : 'Sin datos'
      datos.diameter = (data.diameter != 'unknown') ? Intl.NumberFormat("es-CL").format(data.diameter) : 'Sin datos'
      datos.climate = (data.climate != 'unknown') ? data.climate : 'Sin datos'
      datos.gravity = (data.gravity != 'unknown') ? data.gravity : 'Sin datos'
      datos.terrain = (data.terrain != 'unknown') ? data.terrain : 'Sin datos'
      datos.surface_water = (data.surface_water != 'unknown') ? Intl.NumberFormat("es-CL").format(data.surface_water) : 'Sin datos'
      datos.population = (data.population != 'unknown') ? Intl.NumberFormat("es-CL").format(data.population) : 'Sin datos'

      const residents = []

      data.residents.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        residents.push(id)
      })

      const sendResident = resident =>
        new Promise(resolve =>
          resolve(this.dispatch('getResidents', resident))
        );
      
      let resident = '';

      const sendAllResidents = async () => {
        for (resident of residents) {
          const residentmInfo = await sendResident(resident)
        }
        state.loadingResidents = false
      };

      sendAllResidents()

      const films = []

      data.films.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        films.push(id)
      })

      const send = film =>
        new Promise(resolve =>
          resolve(this.dispatch('getFilms', film))
        );
      
      let film = '';

      const sendAllFilms = async () => {
        for (film of films) {
          const filmInfo = await send(film)
        }
        state.loadingFilms = false
      };

      sendAllFilms()

      state.planet = datos;
    },

    setPlanetInto (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id
      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

      state.planet = datos
    },

    setShips (state, data) {
      const datos = {
        rows: [],
        count: 0,
        next: '',
        prev: ''
      }

      data.results.forEach(function (item, index) {
        let params = item.url.split('/')
        let id = params[params.length - 2]

        datos.rows.push({
          id: id,
          name: item.name,
          img: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
        })
      })
      
      datos.count = data.count

      let paramsNext = new URLSearchParams(data.next)
      datos.next = ( paramsNext.get('page') ) ? paramsNext.get('page') : false
      
      let paramsPrev = new URLSearchParams(data.previous)
      datos.prev = ( paramsPrev.get('page') )? paramsPrev.get('page') : false

      state.ships = datos;
    },

    setShip (state, data) {
      state.films = []
      state.pilots = []
      state.loadingFilms = true 
      state.loadingResidents = true
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
      datos.model = (data.model != 'unknown') ? data.model : 'Sin datos'
      datos.manufacturer = (data.manufacturer != 'unknown') ? data.manufacturer : 'Sin datos'
      datos.cost_in_credits = (data.cost_in_credits != 'unknown') ? Intl.NumberFormat("es-CL").format(data.cost_in_credits) : 'Sin datos'
      datos.length = (data.length != 'unknown') ? Intl.NumberFormat("es-CL").format(data.length) : 'Sin datos'
      datos.max_atmosphering_speed = (data.max_atmosphering_speed != 'unknown') ? Intl.NumberFormat("es-CL").format(data.max_atmosphering_speed) : 'Sin datos'
      datos.crew = (data.crew != 'unknown') ? Intl.NumberFormat("es-CL").format(data.crew) : 'Sin datos'
      datos.passengers = (data.passengers != 'unknown') ? Intl.NumberFormat("es-CL").format(data.passengers) : 'Sin datos'
      datos.cargo_capacity = (data.cargo_capacity != 'unknown') ? Intl.NumberFormat("es-CL").format(data.cargo_capacity) : 'Sin datos'
      datos.consumables = (data.consumables != 'unknown') ? data.consumables : 'Sin datos'
      datos.hyperdrive_rating = (data.hyperdrive_rating != 'unknown') ? data.hyperdrive_rating : 'Sin datos'
      datos.MGLT = (data.MGLT != 'unknown') ? Intl.NumberFormat("es-CL").format(data.MGLT) : 'Sin datos'
      datos.starship_class = (data.starship_class != 'unknown') ? data.starship_class : 'Sin datos'
      datos.pilots = (data.pilots != 'unknown') ? data.pilots : 'Sin datos'

      const films = []

      data.films.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        films.push(id)
      })

      const send = film =>
        new Promise(resolve =>
          resolve(this.dispatch('getFilms', film))
        );
      
      let film = '';

      const sendAllFilms = async () => {
        for (film of films) {
          const filmInfo = await send(film)
        }
        state.loadingFilms = false
      };

      sendAllFilms()

      const pilots = []

      data.pilots.forEach(function (item, index) {
        params = item.split('/')
        id = params[params.length - 2]
        pilots.push(id)
      })

      const sendPilots = pilot =>
        new Promise(resolve =>
          resolve(this.dispatch('getPilots', pilot))
        );
      
      let pilot = '';

      const sendAllPilots = async () => {
        for (pilot of pilots) {
          const pilotInfo = await sendPilots(pilot)
        }
        state.loadingResidents = false
      };

      sendAllPilots()

      state.ship = datos;
    },

    setShipPush (state, data) {
      const datos = {}

      let params = data.url.split('/')
      let id = params[params.length - 2]

      datos.id = id
      datos.name = (data.name != 'unknown') ? data.name : 'Sin datos'
      datos.img = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`

      state.ships.push(datos);
    },

    loading (state, newLoading) {
      state.loading = newLoading
    },

    loadingResidents (state, newLoading) {
      state.loadingResidents = newLoading
    },

    loadingPlanet (state, newLoading) {
      state.loadingPlanet = newLoading
    },

    loadingVehicle (state, newLoading) {
      state.loadingVehicle = newLoading
    },

  }, actions: {

    async getAllPeople({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( 'https://swapi.dev/api/people', { params });
      if (res.status === 200) {
        commit('setPeoples', res.data);
        commit('loading', false)
      }
    },

    async getCharacter({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/people/${params}`);
      if (res.status === 200) {
        commit('setCharacter', res.data);
      }
    },

    async getPeople({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( `https://swapi.dev/api/people/${params}`);
      if (res.status === 200) {
        commit('setPeople', res.data);
        commit('loading', false)
      }
    },

    async getPilots({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/people/${params}`);
      if (res.status === 200) {
        commit('setPilots', res.data);
      }
    },

    async getAllPlanets({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( 'https://swapi.dev/api/planets', { params });
      if (res.status === 200) {
        commit('setPlanets', res.data);
        commit('loading', false)
      }
    },

    async getPlanet({ commit }, params) {
      commit('loadingPlanet', true)
      const res = await axios.get( `https://swapi.dev/api/planets/${params}`);
      if (res.status === 200) {
        commit('setPlanet', res.data);
        commit('loadingPlanet', false)
      }
    },

    async getPlanetInto({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/planets/${params}`);
      if (res.status === 200) {
        commit('setPlanetInto', res.data);
      }
    },

    async getPushPlanet({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/planets/${params}`);
      if (res.status === 200) {
        commit('setPushPlanet', res.data);
      }
    },

    async getResidents({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/people/${params}`);
      if (res.status === 200) {
        commit('setResidents', res.data);
      }
    },

    async getFilms({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/films/${params}`);
      if (res.status === 200) {
        commit('setFilms', res.data);
      }
    },

    async getSpecies({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/species/${params}`);
      if (res.status === 200) {
        commit('setSpecies', res.data);
      }
    },

    async getFilm({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( `https://swapi.dev/api/films/${params}`);
      if (res.status === 200) {
        commit('setFilm', res.data);
        commit('loading', false)
      }
    },

    async getSpecides({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/species/${params}`);
      if (res.status === 200) {
        commit('setSpecies', res.data);
      }
    },

    async getVehicles({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/vehicles/${params}`);
      if (res.status === 200) {
        commit('setVehicles', res.data);
      }
    },

    async getVehicle({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( `https://swapi.dev/api/vehicles/${params}`);
      if (res.status === 200) {
        commit('setVehicle', res.data);
        commit('loading', false)
      }
    },

    async getSpecie({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( `https://swapi.dev/api/species/${params}`);
      //return res.data
      if (res.status === 200) {
        commit('setSpecie', res.data);
        commit('loading', false)
      }
    },

    async getAllShips({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( 'https://swapi.dev/api/starships', { params });
      if (res.status === 200) {
        commit('setShips', res.data);
        commit('loading', false)
      }
    },

    async getShip({ commit }, params) {
      commit('loading', true)
      const res = await axios.get( `https://swapi.dev/api/starships/${params}`);
      if (res.status === 200) {
        commit('setShip', res.data);
        commit('loading', false)
      }
    },

    async getShipPush({ commit }, params) {
      const res = await axios.get( `https://swapi.dev/api/starships/${params}`);
      if (res.status === 200) {
        commit('setShipPush', res.data);
      }
    },

  }, getters: {

    getPeoples: (state) => {
      return state.peoples;
    },

    getPeople: (state) => {
      return state.people;
    },

    getPlanets: (state) => {
      return state.planets;
    },

    getPlanet: (state) => {
      return state.planet;
    },

    getResidents: (state) => {
      return state.residents;
    },

    getFilms: (state) => {
      return state.films;
    },

    getFilm: (state) => {
      return state.film;
    },

    getSpecies: (state) => {
      return state.species;
    },

    getSpecie: (state) => {
      return state.specie;
    },

    getShips: (state) => {
      return state.ships;
    },

    getShip: (state) => {
      return state.ship;
    },

    getVehicle: (state) => {
      return state.vehicle;
    },

    getVehicles: (state) => {
      return state.vehicles;
    },

    getPilots: (state) => {
      return state.pilots;
    },

    loading: (state) => {
      return state.loading
    },

    loadingResidents: (state) => {
      return state.loadingResidents
    },

    loadingPlanet: (state) => {
      return state.loadingPlanet
    },

    loadingFilms: (state) => {
      return state.loadingFilms
    },

    loadingVehicle: (state) => {
      return state.loadingVehicle
    },

    loadingStarship: (state) => {
      return state.loadingStarship
    },

    loadingSpecies: (state) => {
      return state.loadingSpecies
    },

  }
})