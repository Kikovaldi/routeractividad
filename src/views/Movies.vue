<template>
  <h1>Movies</h1>

       
       <ul class="grid grid-cols-3 py-4 my-4 gap-5 rounded-sm border-solid border-yellow-100">
        <li v-for="item in films" :key="item.title">
        
        <RouterLink :to="`/movies/${item.title}`">{{ item.title }}</RouterLink></li>
      </ul>
      
    
</template>

<script>

export default {
    name: "Movies",
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
            fetch(`https://swapi.dev/api/films/`)
                .then((res) => res.json())
                .then((data) => (this.films = data.results))
                .catch((error) => console.log(error));
        },
    },
};
</script>
<style></style>
