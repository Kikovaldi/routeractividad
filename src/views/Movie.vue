<template>
  <h1 v-if="movie" class=" text-lg font-extrabold my-2">{{ $route.params.title }}</h1>
  <div v-if="movie" class="flex justify-center gap-4 mx-10 mb-10">
    <!-- <div class="flex flex-col mx-10" v-for="item in movie" :key="item">{{item}}</div> -->
    <ul>
      <li class=" font-bold underline pb-2">Director</li>
      <li class=" text-yellow-100 pb-4">{{ movie.director }}</li>
      <li class=" font-bold underline pb-2" >Producer</li>
      <li class=" text-yellow-100 pb-4">{{ movie.producer }}</li>
      <li class=" font-bold underline pb-2">Date</li>
      <li class=" text-yellow-100 pb-4">{{ movie.release_date }}</li>
      <li class=" font-bold underline pb-2">Description</li>
      <li class=" text-yellow-100 pb-4"> {{ movie.opening_crawl }} </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: "Movie",
  props: ["title"],
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    this.getFilms();
  },
  methods: {
    getFilms() {
      console.log("getting film...");
      fetch(`https://swapi.dev/api/films/`)
        .then((res) => res.json())
        .then((data) => (this.films = data.results));
    },
  },
  computed: {
    movie() {
      const movie = this.films.find((movie) => movie.title === this.title);
      return movie;
    },
  },
};
</script>
<style></style>
