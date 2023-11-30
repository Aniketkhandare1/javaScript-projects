
const inputbox =document.querySelector(".search input" );
const searchbtn=document.querySelector(".search button")
const temp=document.querySelector(".temp");
const cityname=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const weathericon =document.querySelector(".weather-icon")



async function getData (city){

const fetchData= await fetch (`http://api.weatherapi.com/v1/current.json?key=f0534aeb106b4e2b98e142309230903&q=${city}`);
const result=await fetchData.json();




console.log(result);

cityname.innerHTML=result.location.name ;
temp.innerHTML=result.current.temp_c + "°C";
humidity.innerHTML=result.current.humidity+"%";
wind.innerHTML=result.current.wind_kph+"km/hr";

if(result.current.condition.text ==  "Partly cloudy"){
    weathericon.src="images/clouds.png"
}
else if(result.current.condition.text == "Sunny"){
    weathericon.src="images/clear.png"
}
else if(result.current.condition.text == "Drizzle"){
    weathericon.src="images/drizzle.png"
}
else if(result.current.condition.text == "Mist"){
    weathericon.src="images/mist.png"
}
else if(result.current.condition.text == "Moderate rain at times"|| "Rain"){
    weathericon.src="images/rain.png"
}
else if(result.current.condition.text == "Snow"){
    weathericon.src="images/snow.png"
}
document.querySelector("#h22").innerHTML= "CITY =>" +"  "+ city.toUpperCase();
document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click",()=>{
    getData(inputbox.value)
  

});