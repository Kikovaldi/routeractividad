import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Characters from "./views/Characters.vue"
import Planets from "./views/Planets.vue"
import Movies from "./views/Movies.vue"
import Movie from "./views/Movie.vue"
import NotFound from "./views/NotFound.vue"
export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/characters', component: Characters },
    { path: '/planets', component: Planets },
    { path: '/movies', component: Movies },
    { path: '/movies/:title', component: Movie , props: true },
    { path: '/:path(.*)', component: NotFound}
  
  ]