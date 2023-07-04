const button = document.querySelector(".weather__input-button");
const input = document.querySelector(".weather__input-searchBox");

const city = document.querySelector(".weather__details-city");
const date = document.querySelector(".weather__details-date");

const temp = document.querySelector(".weather__details-temp");
const description = document.querySelector(".weather__details-description");

button.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=8241dd5ea92d0d5d64368af5ceb5187f&units=metric`
  )
    .then((response) => response.json())
    .then(displayData);
});

const displayData = (weather) => {
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  console.log(city);

  temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
  console.log(temp);

  description.innerHTML = `${weather.weather[0].description}`;
  console.log(description);

  let now = new Date();
  date.innerHTML = dateBuilder(now);
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

  return `${day} ${date} ${month}, ${year}`;
}
