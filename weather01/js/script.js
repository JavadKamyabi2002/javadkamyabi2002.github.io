let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "sunny",
    humidity: 23,
    windSpeed: 32,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  tabriz: {
    city: "Tabriz",
    temp: 1,
    weather: "cloudy",
    humidity: 43,
    windSpeed: 12,
  },
  mashhad: {
    city: "Mashhad",
    temp: 16,
    weather: "snowy",
    humidity: 7,
    windSpeed: 24,
  },
  esfahan: {
    city: "Esfahan",
    temp: 23,
    weather: "sunny",
    humidity: 15,
    windSpeed: 18,
  },
  kerman: {
    city: "Kerman",
    temp: 35,
    weather: "sunny",
    humidity: 15,
    windSpeed: 18,
  }
};

let $ = document;
const btn = $.getElementById("search");
const searchBar = $.querySelector(".search-bar");
const image = $.querySelector('#seaarchimg')
let flag = true

  btn.addEventListener("click", ChangeEVER)
  function ChangeEVER(){
    if(flag){
       image.setAttribute('src','../icons8-close-50.png') 
      let  searchValue =searchBar.value
      let lowersearchValue = searchValue.toLowerCase()
    let maincitiesData = citiesData[lowersearchValue];
    
    if (maincitiesData) {
      $.querySelector(".weather").classList.remove("loading");
      $.querySelector("#city").innerHTML = maincitiesData.city;
      $.querySelector("#temp").innerHTML = maincitiesData.temp;
      let weathericon = $.querySelector("#image");
  
      let urlimage = setweathericon(maincitiesData);
      weathericon.setAttribute("src", urlimage);
      $.querySelector("#name2").innerHTML = maincitiesData.weather;
  
      $.querySelector("#humidity").innerHTML = maincitiesData.humidity;
      $.querySelector("#wind").innerHTML = maincitiesData.windSpeed;
      flag=false;
    } else {
      alert("No City Found");
      image.setAttribute('src','../icons8-search-50.png')
    }
    
    }
    else{
      $.querySelector(".weather").classList.add("loading");
      image.setAttribute('src','../icons8-search-50.png')
      flag=true
      searchBar.value=''
    }
    
  }
    
   
 



function setweathericon(cityweather) {
  let urlimage;
  if (cityweather.weather === "sunny") {
    urlimage = "../icons8-sunny-50.png";
  } else if (cityweather.weather === "cloudy") {
    urlimage = "../cloud_3222791.png";
  } else if (cityweather.weather === "snowy") {
    urlimage = "../snowflake_100825.png";
  }
  else if(cityweather.weather==="windy")
  {
    urlimage='../icons8-windy-weather-50.png'
  }
  return urlimage;
}
