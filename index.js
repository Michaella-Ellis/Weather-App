//Date and Time
function formatDate(date) {
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturdaty",
  ];
  let day = days[now.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let now = new Date();
let dateTime = document.querySelector("#date-time");
dateTime.innerHTML = formatDate(now);

//Weather

function getCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let city = input.value;
  let apiKey = "281450ec88936f4fa8ee9864682b49a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(displayTemp);
}

function displayTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let changeCity = document.querySelector("#city");
  changeCity.innerHTML = `${response.data.name}`;
  let changeTemp = document.querySelector("#currentTemp");
  changeTemp.innerHTML = `${temp}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);
