const API_KEY = '20dc39afa5765da430a3d38c06eed923';
const API_BASE_URL = 'https://api.openweathermap.org/data';
const VERSION = '2.5';

const url = `${API_BASE_URL}/${VERSION}/weather?q=south korea, usa&appid=${API_KEY}`;

console.log(url)

const request = new XMLHttpRequest();
request.open('GET', url);
request.addEventListener('load', e => {
    console.log('data is back!', e)
    console.log(e.currentTarget.response)

    const data = JSON.parse(e.currentTarget.response)
    console.log(data)
});
request.send();