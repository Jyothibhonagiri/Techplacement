let inputElement = document.getElementById("location-input")
let tempElement = document.getElementById("temp-value")
let locationElement = document.getElementById("location")
let weatherdescriptionElement = document.getElementById("weather-description")
let btnElement = document.getElementById("btn")



const apikey = '32745d32151d27852ec3b8b52164e55b';

btnElement.onclick = function(){
    if(inputElement.value == "")
      alert("Please enter some  location")
    else{
      loc = inputElement.value
      url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
      fetch(url).then(res=>res.json())
      .then(data=>{
        console.log(data)
        const {name} = data
        const {feels_like} = data.main
        const {description} = data.weather[0]
        tempElement.innerText = Math.floor(feels_like-273);
        locationElement.innerText = name;
        weatherdescriptionElement.innerText= description;
      })
      .catch(()=>{
        alert("Enter valid location")
      })
      inputelement.value ==" " 
      
    }
}

