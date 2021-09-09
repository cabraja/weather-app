const API_KEY = 'af0ed49a90603484514cebbd741c972e';
let city = 'Belgrade';
const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

const search = document.getElementById('search');
const form = document.getElementById('form');
form.addEventListener('submit',e => {
    e.preventDefault();
    city = search.value;
    call(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
})

// HTML CALLS
const image = document.getElementById('image');
const type = document.getElementById('type');
const temp = document.getElementById('temperature');
const humi = document.getElementById('humidity');
const press = document.getElementById('pressure');
const cityh2 = document.getElementById('city-h2');


const call = (url) => {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        image.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        cityh2.innerHTML = `${city}`;
        type.innerHTML = `${data.weather[0].main}`;
        temp.innerHTML = `${Math.round(data.main.temp-272.15)}&#8451;`;
        humi.innerHTML = `${data.main.humidity}%`;
        press.innerHTML = `${data.main.pressure}mbar`;
    })
}

call(API_CALL);



