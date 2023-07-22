    const objData = {
        kerman:{
            temp:35,
            weather:"sunny",
            humidity:30,
            windspeed:50
        },
        shiraz:{
            temp:30,
            weather:"cloudy",
            humidity:35,
            windspeed:20
        },
        tabriz:{
            temp:20,
            weather:"snowy",
            humidity:10,
            windspeed:40
        }



    }



const searchinput = document.getElementById('citysearch')
const btn = document.getElementById('btnsearch')
//information part selection 
const info = document.getElementById('info')
const cityname = document.getElementById('citynamepar')
const citytemp = document.getElementById('citytemp')
const weathericon = document.getElementById('weathericon')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

btn.addEventListener('click',()=>{
    let input =  searchinput.value
    let citydata = objData[input]
    if(citydata){
        info.style.height='310px'
        cityname.innerHTML=input
        citytemp.innerHTML=citydata.temp
        /* weathericon.setAttribute('src',"./icons8-sunny-50.png") */
        setweathericon(citydata.weather)
        humidity.innerHTML=citydata.humidity
        wind.innerHTML=citydata.windspeed

    }
    else {
        alert("city not found")
    }

})
function setweathericon(cityweather){
     if(cityweather ==='sunny')
     {
        weathericon.setAttribute('src',"./icons8-sunny-50.png")
     }
     else if(cityweather ==='cloudy')
        
        {
            weathericon.setAttribute('src',"./cloud_3222791.png")
        }
        else {
            weathericon.setAttribute('src',"./snowflake_100825.png")
        }
}