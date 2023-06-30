const apiKey = "16f22edb8db3c27f8187016f740810f8";

const getWeatherData = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayWeatherData = (data) => {
  const cityEl = document.getElementById("city");
  const tempEl = document.getElementById("temp");
  const iconEl = document.getElementById("icon");
  const windEl = document.getElementById("wind");
  const cloudsEl = document.getElementById("clouds");
  const sunriseEl = document.getElementById("sunrise");
  const sunsetEl = document.getElementById("sunset");

  cityEl.innerText = data.name;
  tempEl.innerText = `Temperature: ${data.main.temp}°C`;
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  windEl.innerText = `Wind Speed: ${data.wind.speed} m/s`;
  cloudsEl.innerText = `Cloudiness: ${data.clouds.all}%`;
  sunriseEl.innerText = `Sunrise: ${new Date(
    data.sys.sunrise * 1000
  ).toLocaleTimeString()}`;
  sunsetEl.innerText = `Sunset: ${new Date(
    data.sys.sunset * 1000
  ).toLocaleTimeString()}`;

  const mapEl = document.getElementById("map");
  mapEl.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${data.coord.lat},${data.coord.lon}"></iframe>`;
};

const getWeatherBtn = document.getElementById("getWeatherBtn");

getWeatherBtn.addEventListener("click", async () => {
  const cityName = document.getElementById("cityName").value;
  if (!cityName) {
    alert("Please enter a city name.");
    return;
  }
  const data = await getWeatherData(cityName);
  displayWeatherData(data);
});
