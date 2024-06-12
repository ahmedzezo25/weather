
var loc = document.querySelector(" .loc");
var num = document.querySelector(".num");
var custom1 = document.querySelector(".custom1");
var custom2 = document.querySelector(".custom2");
var custom3 = document.querySelector(".custom3");
var weathimg = document.querySelector(".weathimg");
var degree1 = document.querySelector(".degree1");
var degree2 = document.querySelector(".degree2");
var small1 = document.querySelector(".small1");
var small2 = document.querySelector(".small2");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var weeatherimg1 = document.querySelector(".weeatherimg1");
var weeatherimg2 = document.querySelector(".weeatherimg2");
var search = document.getElementById("search");


checkweather("cairo");
async function checkweather(x) {

    var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=bf8fe1a2cd674d7eb5d93512240906&q=${x}&days=3`);
    var data = await res.json();
    console.log(data);



    loc.innerHTML =  data.location.name;
    num.innerHTML = data.current.temp_c + "<sup>o</sup>c";
    custom1.innerHTML = data.current.condition.text;
    weathimg.src = "https:" + data.current.condition.icon;
    custom2.innerHTML = data.forecast.forecastday[0].day.condition.text;
    custom3.innerHTML = data.forecast.forecastday[1].day.condition.text;
    degree1.innerHTML = data.forecast.forecastday[0].day.maxtemp_c + "<sup>o</sup>C";
    small1.innerHTML =data.forecast.forecastday[0].day.mintemp_c + "<sup>o</sup>";
    degree2.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C";
    small2.innerHTML = data.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>";
    weeatherimg1.src  = "https:" + data.forecast.forecastday[0].day.condition.icon;
    weeatherimg2.src = "https:" + data.forecast.forecastday[1].day.condition.icon;
    humidity.innerHTML = data.current.humidity + "%";
    wind.innerHTML= data.current.wind_kph + " km/h";
    

// day 

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date(data.forecast.forecastday[0].date);
let month = months[d.getMonth()];
let dayy = d.getDate();


document.querySelector(".date").innerHTML = dayy + month;

 
// geolo 

// navigator.geolocation.getCurrentPosition(showPosition);
// function showPosition(position) {
//   var gelo =   position.coords.latitude + "," +  position.coords.longitude;
//   checkweather(gelo)
//   }




   
function day() {
     
    var dayy = new Date(data.forecast.forecastday[0].date );
    var valentines = new Date(data.forecast.forecastday[1].date  );
    var valentin = new Date(data.forecast.forecastday[2].date   );

    var dayNames = ["sunday", "Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday" ];

    var g = dayy.getDay();
    var y = valentines.getDay();
    var z = valentin.getDay();
   
   

    document.querySelector(".day").innerHTML =  dayNames[g] ;
     document.querySelector(".day1").innerHTML =  dayNames[y] ;
     document.querySelector(".day2").innerHTML =  dayNames[z] ;
    
}
    day();


     }
     





search.addEventListener("input", function(){
  
    checkweather(search.value, "cairo");
    
})


