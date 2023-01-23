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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function displayTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let changeCity = document.querySelector("#city");
  changeCity.innerHTML = `${response.data.name}`;
  let changeTemp = document.querySelector("#currentTemp");
  changeTemp.innerHTML = `${temp}`;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  celsTemp = response.data.main.temp;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", getCity);

//Celcius to Fahrenheit
function showFahrTemp(event) {
  event.preventDefault();

  let tempElement = document.querySelector("#currentTemp");
  let fahrTemp = (celsTemp * 9) / 5 + 32;
  tempElement.innerHTML = Math.round(fahrTemp);
}

function showCelsTemp(event) {
  event.preventDefault();

  let tempElement = document.querySelector("#currentTemp");
  tempElement.innerHTML = Math.round(celsTemp);
}

let celsTemp = null;

let fahrenheitLink = document.querySelector("#fahr-link");
fahrenheitLink.addEventListener("click", showFahrTemp);

let celsiusLink = document.querySelector("#cels-link");
celsiusLink.addEventListener("click", showCelsTemp);
