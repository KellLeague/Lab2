// // const OMDB = ()
// const myKey = '3e207658';
// const URL = `http://www.omdbapi.com/?apikey=${myKey}&t=Inception`;
// const request = new XMLHttpRequest();
// request.open('GET', URL);
// request.addEventListener('load', e => {
//     console.log('data is back', e);
//     console.log(e.currentTarget.response);
// const data = JSON.parse(e.currentTarget.response);
//     console.log(data)
// })
// request.send();

const getMovieData = (title, cb, API_KEY = '3e207658') => {
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
const request = new XMLHttpRequest();
request.open('GET', URL);
request.addEventListener('load', e => {
const data = JSON.parse(e.currentTarget.response);
    cb(data)
})
request.send();
}
getMovieData('Inception', (data) =>{
    console.log('this movie is...', data)
})
getMovieData('The MEG', (data) =>{
    console.log('this movie is...', data)
})