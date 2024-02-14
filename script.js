
async function fetchWeatherData(cityName){

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e00c8ff1128b32d048ac66e031a0f03c`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
//demo()


function fetchCity()

{
	let cityName = document.getElementById("city_name");
	if(cityName.value===" ")
	{
		alert("Enter the city name");
	}
	else
	{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}

}

