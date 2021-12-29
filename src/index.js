let srch = document.getElementById('srch');
const cityName = document.getElementById('city');
const Temp = document.getElementById('temp');
const maxtemp = document.getElementById('maxtemp');
const mintemp = document.getElementById('mintemp');
const airquality = document.getElementById('airquality');
const visibility = document.getElementById('visibility');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const date = new Date();


const apiKey = '9124a3e9d976ff3d3135422bbaeca018';
srch.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        event.preventDefault(); //it doesnt let the page refresh
        var city = srch.value;
        if(city!== ""){
          getdata(city);
        }
        else{
          alert("Abey Gaon ka Naam toh daal")
        }
        
    }
});
getdata = (city) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
          "GET",
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
        // in place of appid enter your open weather API Key
        // You can create it for free
        // https://home.openweathermap.org/users/sign_up
    
        xhr.send();
        xhr.onload = () => {
          if (xhr.status === 404) {
            alert("Konsi Jagah Hai Ye!");
          }  
          else {
            var data = JSON.parse(xhr.response);
            cityName.innerHTML = data.name;
            var temp = data.main.temp-273.15;
            Temp.innerHTML = `${temp.toFixed(2)}°C`;
            maxtemp.innerHTML = (data.main.temp_max - 273.15).toFixed(2);
            mintemp.innerHTML = (data.main.temp_min - 273.15).toFixed(2);
            feelslike.innerHTML = (data.main.feels_like - 273.15).toFixed(2);
            airquality.innerHTML = (data.weather[0].main);
            visibility.innerHTML = data.visibility / 1000 ;
            wind.innerHTML = (data.wind.speed * 1.609).toFixed(2);
            humidity.innerHTML = data.main.humidity
            let sunriseTime = `${new Date(data.sys.sunrise).getHours()} : ${new Date(data.sys.sunrise).getMinutes()}`;
            let sunsetTime = `${new Date(data.sys.sunset).getHours()} : ${new Date(data.sys.sunset).getMinutes()}`;
            sunrise.innerHTML = sunriseTime + "AM";
            sunset.innerHTML = sunsetTime + "PM";
            // sunrise.innerHTML = sunriseTime;
          }   
          const res = JSON.parse(xhr.response);
              console.log("Temp: " + res.main.temp);
              console.log("Min Temp: " + res.main.temp_min);
              console.log("Max Temp: " + res.main.temp_max);
              console.log("Feels Like: " + res.main.feels_like);
              console.log("Time: " + res.timezone);
              console.log("Air Quality: " + res.weather[0].main);
              console.log("Speed:" + res.wind.speed);
              console.log("Speed:" + res.wind.speed);
              // console.log("Speed:" + res.wind.speed);
              };
            };
          
  
