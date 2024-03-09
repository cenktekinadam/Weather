//*Data extraction from html to js

const input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");

const info =document.querySelector(".info")
//Btni izle
btn.addEventListener("click", (e) => {
    e.preventDefault();
    getData(input.value)
})
function getData(name) {
    //console.log(name);

    //Api Key 
    const api = "fb5e1d1815ca44e237b1bc756c50fba1"
    //Base Url Tanımlama    
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&units=metric&lang=tr`;
    console.log(baseUrl);
    //Fetch ile promise Döndür
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like, humidity }, weather: [{ description }], wind: { speed }
            } = data

            //      console.log("İsim",name,"Ülke",country,"derece",temp,"Hissedilen",feels_like,"durum",description);
            // apidaki verileri Htmle dökme
info.innerHTML=`
<h4 id="location">${name.toUpperCase()},${country}<i class="fa-solid fa-location-dot"></i></h4>
<h1 id="degree">${temp}C°</h1>
<h4 id="felt">${feels_like} C° </span></h4>
<h4 id="stuation">${description.toUpperCase()}</h4>
<h4 id="wind">Rüzgar:${speed} <span id="moisture" >Nem: %${humidity}</span></h4>
`


        })

        .catch(err => console.log(err))
}

