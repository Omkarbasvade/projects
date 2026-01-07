const apiKey = ""; 

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "City not found ❌";
        return;
      }

      const weatherHTML = `
        <h3>${data.name}</h3>
        <p> Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} km/h</p>
      `;

      document.getElementById("weatherResult").innerHTML = weatherHTML;
    })
    .catch(error => {
      console.log(error);
    });
}
