/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE

//
*/
/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/
const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            showMovies: true,
            movies: [
                  {title: '#app_title', owner: 'Angel Bomova',  github: '#github'}
                  
            ],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            // let app = new Vue({
            //       el: '#app',
            //       data: {
            //         title: "IMDB + Angel’s Top 8 Movies",
            //         owner: "Angel",
            //         github: "https://angelbomova.github.io/NJIT-3_StarterFiles-master/"
            //       }
            //     });
             movies = [
                  {title: '', isscore: '', rating: '', released: '', country: '', posters: '', imdb: '', website: '', likes: '', dislikes: '', posterindex: '', isFav: true},
                  {title: '', isscore: '', rating: '', released: '', country: '', posters: '', imdb: '', website: '', likes: '', dislikes: '', posterindex: '', isFav: true}
            ]
      }
    },
    
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            toggleShowMovies(){
                  this.showMovies = !this.showMovies; // sets it to whatever it currently isn't
              },
              toggleFav(movie){
                  movie.isFav = !movie.isFav
              }
      }
})

vue_app.mount("#vue_app")
