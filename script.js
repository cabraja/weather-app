const API_KEY = 'af0ed49a90603484514cebbd741c972e';
let city = 'Belgrade';
const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
const image = document.getElementById('image');
const type = document.getElementById('type');
const temp = document.getElementById('temperature');
const humi = document.getElementById('humidity');
const press = document.getElementById('pressure');


const call = (url) => {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        image.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        type.innerHTML = `${data.weather[0].main}`;
        temp.innerHTML = `${Math.round(data.main.temp-272.15)}&#8451;`;
        humi.innerHTML = `${data.main.humidity}%`;
        press.innerHTML = `${data.main.pressure}mbar`;
    })
}

call(API_CALL);



