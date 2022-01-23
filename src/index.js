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


// const apiKey = '9124a3e9d976ff3d3135422bbaeca018';
srch.addEventListener('keyup',(event) => {
    if(event.keyCode === 13){
        event.preventDefault(); //it doesnt let the page refresh
        var city = srch.value;
        if(city!== ""){
          getdata(city);
        }
        else{
          alert("Enter Place Name!")
        }
        
    }
});
getdata = (city) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
          "GET",
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
        // https://home.openweathermap.org/users/sign_up
    
        xhr.send();
        xhr.onload = () => {
          if (xhr.status === 404) {
            alert("Place Not Found!");
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
            visibility.innerHTML = (data.visibility / 10000).toFixed(2) + " Kilometer" ;
            wind.innerHTML = (data.wind.speed * 1.609).toFixed(2) + " Km/h";
            humidity.innerHTML = data.main.humidity + "%"
            // let sunriseTime = `${new Date(data.sys.sunrise).getHours()} : ${new Date(data.sys.sunrise).getMinutes()}`;
            // let sunsetTime = `${new Date(data.sys.sunset).getHours()} : ${new Date(data.sys.sunset).getMinutes()}`;
            // sunrise.innerHTML = sunriseTime + " AM";
            // sunset.innerHTML = sunsetTime + " PM";
            if(data.weather[0].main == "Clouds"){
              document.getElementById('cloud').style.display = 'block';
            }
            else{
              document.getElementById('cloud').style.display = 'none';
              event.preventDefault();
            }
            if(data.weather[0].main == "Clear"){
              document.getElementById('sun').style.display = 'block';
            }
            else{
              document.getElementById('sun').style.display = 'none';
              event.preventDefault();
            }
            if(data.weather[0].main == "Mist"){
              document.getElementById('mist').style.display = 'block';
            }
            else{
              document.getElementById('mist').style.display = 'none';
              event.preventDefault();
            }
            // if(data.weather[0].main == "Smoke"){
            //   // document.getElementById('mist').style.display = 'block';
            //   event.preventDefault();
            // }
            // else{
            //   // document.getElementById('mist').style.display = 'none';
            // }
            if(data.weather[0].main == "Snow"){
              document.getElementById('snow').style.display = 'block';
            }
            else{
              document.getElementById('snow').style.display = 'none';
              event.preventDefault();
            }
            if(data.weather[0].main == "Rain"){
              document.getElementById('rain').style.display = 'block';
            }
            else{
              document.getElementById('rain').style.display = 'none';
              event.preventDefault();
            }
            if(data.weather[0].main == "Drizzle"){
              document.getElementById('drizzle').style.display = 'block';
            }
            else{
              document.getElementById('drizzle').style.display = 'none';
              event.preventDefault();
            }
            if(data.weather[0].main == "Fog"){
              document.getElementById('fog').style.display = 'block';
            }
            else{
              document.getElementById('fog').style.display = 'none';
              event.preventDefault();
            }
            
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
          
  
