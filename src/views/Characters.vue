<template>
  <h1>Characters</h1>
  <div v-for="item in characters" :key="item.id">
    <ul class="grid grid-cols-3 justify-between">
      <li class=" bg-slate-950">NAME: {{ item.name }}</li>
      <li class=" bg-black">GENDER: {{ item.gender }}</li>
      <li class=" bg-slate-950">BIRTH: {{ item.birth_year }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      fetch(`https://swapi.dev/api/people/`)
        .then((res) => res.json())
        .then((data) => (this.characters = data.results));
    },
    // .catch((error) => console.log(error));
  },
};
</script>

<style></style>
