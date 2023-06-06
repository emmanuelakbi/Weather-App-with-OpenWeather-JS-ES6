/**
 * NOT WORKING
 */
// https://api.openweathermap.org/data/2.5/weather?id=2332453&appid=8241dd5ea92d0d5d64368af5ceb5187f&units=metric

/**
 * WORKING
 */
// https://api.openweathermap.org/data/2.5/weather?id=2332453&appid=03a094de2fbed757402784c8ab602833&units=metric

console.log({
  coord: { lon: 3.75, lat: 6.5833 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: 24.18,
    feels_like: 25.11,
    temp_min: 24.18,
    temp_max: 24.18,
    pressure: 1014,
    humidity: 94,
    sea_level: 1014,
    grnd_level: 1014,
  },
  visibility: 10000,
  wind: { speed: 1.57, deg: 173, gust: 3.4 },
  clouds: { all: 100 },
  dt: 1686089709,
  sys: {
    type: 1,
    id: 1185,
    country: "NG",
    sunrise: 1686029346,
    sunset: 1686074304,
  },
  timezone: 3600,
  id: 2332453,
  name: "Lagos",
  cod: 200,
});

console.log({
  coord: { lon: 3.75, lat: 6.5833 },
  weather: [
    { id: 804, main: "Clouds", description: "overcast clouds", icon: "04n" },
  ],
  base: "stations",
  main: {
    temp: 24.18,
    feels_like: 25.11,
    temp_min: 24.18,
    temp_max: 24.18,
    pressure: 1014,
    humidity: 94,
    sea_level: 1014,
    grnd_level: 1014,
  },
  visibility: 10000,
  wind: { speed: 1.57, deg: 173, gust: 3.4 },
  clouds: { all: 100 },
  dt: 1686090055,
  sys: {
    type: 1,
    id: 1185,
    country: "NG",
    sunrise: 1686029346,
    sunset: 1686074304,
  },
  timezone: 3600,
  id: 2332453,
  name: "Lagos",
  cod: 200,
});
let button = document.querySelector(".button");
let inputvalue = document.querySelector(".search-box");
let temp = document.querySelector(".current .temp");
let description = document.querySelector(".current .weather");
let city = document.querySelector(".location .city");
let date = document.querySelector(".location .date");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=03a094de2fbed757402784c8ab602833`
  )
    .then((response) => response.json())
    .then(displayData)
    .catch((err) => alert("Please Enter a Correct City Name"));
});

const displayData = (weather) => {
  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  description.innerText = `${weather.weather[0].description}`;
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  date.innerText = dateBuilder(now);
};

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
