const GETRequest = (url, cb) => {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', response => {
        const data = JSON.parse(response.currentTarget.response);
        cb(data)
    });
    request.send();
}

const getGifs = (search, cb) => {
    if (search === "" || search.trim() === "") {
        return;
    }

    const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;

    GETRequest(url, data => {
        const gifArray = [];
        data.data.forEach(currentGif => {
            const url = currentGif.images.original.url;
            gifArray.push(url);
        });

        cb(gifArray);
    });
}

const getWeather = (lat, lng, cb) => {
    // TODO; apply some validation to lat, lng

    const URL_BASE = 'https://wt-taqqui_karim-gmail_com-0.sandbox.auth0-extend.com/darksky'
    const api_key = `22606787c90723f054947dee6724e091`;
    const url = `${URL_BASE}?api_key=${api_key}&lat=${lat}&lng=${lng}`

    GETRequest(url, data => {
        console.log(data);
        const forecast = JSON.parse(data.res.text);
        cb(forecast);
    });
}

getWeather(37.8267,-122.4233, data => {
    console.log(data)
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // console.log(JSON.stringify(data.daily.data.map(item => {
    //     return {
    //         icon: item.icon,
    //         hi: item.temperatureHigh,
    //         lo: item.temperatureLow,
    //         desc: item.summary,
    //         datetime: item.time,
    //         day: days[new Date(item.time).getDay()]
    //     }
    // })))
    // save data to state
    getGifs(data.daily.data[0].icon, gifs => {
        console.log(gifs[0])
    })
});

const state = {
    locations:[{
        lat: 37.8267,
        lng: -122.4233,
        lastUpdated: 1544375218298,
        forecast:[{"icon":"partly-cloudy-day","hi":54.93,"lo":49.09,"desc":"Mostly cloudy throughout the day.","datetime":1544342400,"day":"Sunday"},{"icon":"partly-cloudy-day","hi":56.13,"lo":46.48,"desc":"Mostly cloudy until afternoon.","datetime":1544428800,"day":"Sunday"},{"icon":"partly-cloudy-day","hi":57.01,"lo":52.39,"desc":"Partly cloudy throughout the day.","datetime":1544515200,"day":"Sunday"},{"icon":"partly-cloudy-day","hi":58.32,"lo":49.18,"desc":"Partly cloudy until evening.","datetime":1544601600,"day":"Sunday"},{"icon":"partly-cloudy-night","hi":57.75,"lo":50.33,"desc":"Partly cloudy starting in the evening.","datetime":1544688000,"day":"Sunday"},{"icon":"partly-cloudy-day","hi":56.34,"lo":46.92,"desc":"Mostly cloudy until evening.","datetime":1544774400,"day":"Sunday"},{"icon":"partly-cloudy-day","hi":53.98,"lo":50.3,"desc":"Mostly cloudy throughout the day.","datetime":1544860800,"day":"Sunday"},{"icon":"rain","hi":55.94,"lo":55.94,"desc":"Rain and breezy until afternoon.","datetime":1544947200,"day":"Sunday"}],
    }],
    gifs: {
        'partly-cloudy': 'https://media2.giphy.com/media/1uLQUtPLbJMQ0/giphy.gif',
        'not-loaded': 'https://media1.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif',
    },
}

console.log(state)