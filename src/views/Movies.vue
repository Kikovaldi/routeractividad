<template>
  <h1>Movies</h1>

  <ul
    class="grid grid-cols-3 py-4 my-4 gap-5 rounded-sm border-solid border-yellow-100"
  >
    <li v-for="item in films" :key="item.title">
      <RouterLink :to="`/movies/${item.title}`">{{ item.title }}</RouterLink>
    </li>
  </ul>
  <img class="flex justify-center object-cover w-96 bg-white" v-show="loading" src="../../public/Lightsaber-Progress-Bar.webp" alt="Gif loading">
</template>

<script>

export default {
    name: "Movies",
    data() {
        return {
            films: [],
            loading: false,
        };
    },
    mounted() {
        this.getFilms();
    },
    methods: {
        getFilms() {
            this.loading= true;
            console.log("loading...")
            fetch(`https://swapi.dev/api/films/`)

                .then((res) => res.json())
                .then((data) => {
                    this.films = data.results
                    this.loading= false;
                    return this.films
                })
                .catch((error) => console.log(error));

                
        },
    },
};
</script>
<style></style>
