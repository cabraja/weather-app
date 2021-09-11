const API_KEY = 'af0ed49a90603484514cebbd741c972e';
// DEFAULT CITY IS BELGRADE,SERBIA
let city = 'Belgrade'; 
const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.getElementById('main');
const forecastContainer = document.getElementById('forecast-container');


// EVENT LISTENER
form.addEventListener('submit',e => {
    forecastContainer.innerHTML = '';
    e.preventDefault();
    city = search.value;
    call(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
})


// API CALL FUNCTION
const call = (url1,url2) => {
    fetch(url1).then(res => res.json()).then(data => {
        main.innerHTML = `
        <h2>${city}</h2>
        <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' id="image" >
        <h3>${data.weather[0].main}</h3>
        <div id="info">
            <h4 ><i class="fas fa-thermometer-half"></i> ${Math.round(data.main.temp-272.15)}&#8451;</h4>
            <h4 ><i class="fas fa-tint"></i> ${data.main.humidity}%</h4>
            <h4 ><i class="fab fa-cloudscale"></i> ${data.main.pressure}mbar</h4>
        </div>`


        fetch(url2).then(res => res.json()).then(data => {
            console.log(data);
            for(let i = 8; i <25; i+=8){
                let day;
                if(i == 8) day = 'Tomorrow';
                if(i == 16) day = 'In 2 Days';
                if(i == 24) day = 'In 3 Days';

                forecastContainer.innerHTML += `
                <div class="forecast">
                    <h3>${day}</h3>
                    <div class="image-forecast" style ='background-image:url(http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png)'></div>
                    <div class="info">
                        <h5>${Math.round(data.list[i].main.temp-272.15)}&#8451;</h5>
                        <h5>${data.list[i].main.humidity}%</h5>
                        <h5>${data.list[i].main.pressure}mbar</h5>
                    </div>
                </div>
                `;
            }
        })
    })
}

call(API_CALL,API_FORECAST);



