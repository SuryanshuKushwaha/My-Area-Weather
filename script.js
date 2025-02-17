const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '220f94fb62msh994865576209b0bp131804jsn29ffb8a0492b',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};


const cityInput = document.getElementById("city");
const submit = document.getElementById("submit"); 

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const visibility = document.getElementById("visibility");
const pressure = document.getElementById("pressure");
const wind_speed = document.getElementById("wind_speed");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const getWeather = (city) => {
	if (!city) {
		alert("Please enter a city name!");
		return;
	}

	cityName.innerHTML = city;

	fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${encodeURIComponent(city)}&format=json`, options)
		.then(response => response.json()) 
		.then((response) => {
			console.log(response);

			
			if (!response.current_observation) {
				alert("Weather data not available for this city.");
				return;
			}

			
			temp.innerHTML = response.current_observation.condition.temperature;
			visibility.innerHTML = response.current_observation.atmosphere.visibility;
			pressure.innerHTML = response.current_observation.atmosphere.pressure;
			wind_speed.innerHTML = response.current_observation.wind.speed;
			sunrise.innerHTML = response.current_observation.astronomy.sunrise;
			sunset.innerHTML = response.current_observation.astronomy.sunset;
		})
		.catch(err => {
			console.error("Error fetching weather data:", err);
			alert("Failed to fetch weather data. Please try again.");
		});
};


submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(cityInput.value.trim()); 
});


getWeather("New Delhi");
