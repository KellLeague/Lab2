const getMovieByTitle = (title, cb, API_KEY='83f5f1b4') => {
    // ?t=the+godfather&plot=full
    const API_BASE_URL = 'http://www.omdbapi.com';
    const url = `${API_BASE_URL}/?apikey=${API_KEY}&t=${title}`;

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', e => {
        const data = JSON.parse(e.currentTarget.response);
        cb(data)
    });
    request.addEventListener('error', e => {
        console.log(e, 'something failed!')
    })
    request.send();
}

getMovieByTitle('the godfather', (data) => {
    console.log('nyc info is...', data)
})

const state = {
    movies: [{
        "Title": "The Godfather",
        "Year": "1972",
        "Rated": "R",
        "Released": "24 Mar 1972",
        "Runtime": "175 min",
        "Genre": "Crime, Drama",
        "Director": "Francis Ford Coppola",
        "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
        "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
        "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "Language": "English, Italian, Latin",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 24 wins & 28 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "9.2/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "98%"
          },
          {
            "Source": "Metacritic",
            "Value": "100/100"
          }
        ],
        "Metascore": "100",
        "imdbRating": "9.2",
        "imdbVotes": "1,378,375",
        "imdbID": "tt0068646",
        "Type": "movie",
        "DVD": "09 Oct 2001",
        "BoxOffice": "N/A",
        "Production": "Paramount Pictures",
        "Website": "http://www.thegodfather.com",
        "Response": "True"
      }, {
        "Title": "The Godfather",
        "Year": "1972",
        "Rated": "R",
        "Released": "24 Mar 1972",
        "Runtime": "175 min",
        "Genre": "Crime, Drama",
        "Director": "Francis Ford Coppola",
        "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
        "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
        "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "Language": "English, Italian, Latin",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 24 wins & 28 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
          {
            "Source": "Internet Movie Database",
            "Value": "9.2/10"
          },
          {
            "Source": "Rotten Tomatoes",
            "Value": "98%"
          },
          {
            "Source": "Metacritic",
            "Value": "100/100"
          }
        ],
        "Metascore": "100",
        "imdbRating": "9.2",
        "imdbVotes": "1,378,375",
        "imdbID": "tt0068646",
        "Type": "movie",
        "DVD": "09 Oct 2001",
        "BoxOffice": "N/A",
        "Production": "Paramount Pictures",
        "Website": "http://www.thegodfather.com",
        "Response": "True"
      }]
}

const render = state => {
    const {movies} = state;
    // const movies = state.movies;

    // implement a sample UI
    // your UI should be able to support multiple movies in the page
    // use at least 5 attributes from the movies array in your UI

    const movietitle = state.movies[0].Title;
    const Title = document.querySelector('.card-title');
    Title.innerHTML = movietitle;

    const cast = state.movies[0].Actors;
    const Actors = document.querySelector('.card-actors')
    Actors.innerHTML = cast

    const description = state.movies[0].Plot;
    const Plot = document.querySelector('.card-text');
    Plot.innerHTML = description

    const Year = state.movies[0].Released;
    const Released = document.querySelector('.card-year');
    Released.innerHTML = Year

    const Recognition = state.movies[0].Awards;
    const Awards = document.querySelector('.card-recognition');
    Awards.innerHTML = Recognition
}
render(state);