<template>
  <h1>Planets</h1>
  <div v-for="item in planets" :key="item.id">
    <ul class="grid grid-cols-3 justify-between items-center">
      <li class=" bg-slate-950">NAME: {{ item.name }}</li>
      <li class=" bg-black">GRAVITY: {{ item.gravity }}</li>
      <li class=" bg-slate-950">POPULATION: {{ item.population }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Planets",
  data() {
    return {
      planets: [],
    };
  },
  mounted() {
    this.getPlanets();
  },
  methods: {
    getPlanets() {
      fetch(`https://swapi.dev/api/planets/`)
        .then((res) => res.json())
        .then((data) => (this.planets = data.results));
    },
    // .catch((error) => console.log(error));
  },
};
</script>
<style></style>
