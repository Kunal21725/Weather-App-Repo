const apiKey = "5011409511dd5240c4166a6a0c94a850";

async function getWeather() {

    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod != 200){
            document.getElementById("result").innerHTML="City not found";
            return;
        }

        document.getElementById("result").innerHTML=`
            <h2>${data.name}</h2>
            <h3>${data.main.temp} °C</h3>
            <p>${data.weather[0].main}</p>
            <p>Humidity : ${data.main.humidity}%</p>
            <p>Wind : ${data.wind.speed} m/s</p>
        `;

    }

    catch(error){

        document.getElementById("result").innerHTML="Something went wrong";

    }

}