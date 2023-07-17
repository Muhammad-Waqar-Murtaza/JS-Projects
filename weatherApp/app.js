const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const icons = document.querySelector('.icon img')
const time = document.querySelector('.card img')

const updateUi = (data) => {

    console.log(data)
    const cityDetails = data.cityDetails
    const weather = data.weather

    details.innerHTML = 
    `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">
        ${weather.WeatherText}
    </div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`
    icons.setAttribute('src', iconSrc)

    const timeSrc = weather.IsDayTime ? 'images/day.png':'images/night.png'
    time.setAttribute('src', timeSrc)

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}


const updateCity = async (city)=>{

    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)

    return {
        cityDetails: cityDetails,
        weather: weather
    }
}

cityForm.addEventListener('submit', e =>{
    e.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset()

    updateCity(city).then((data)=>{
        updateUi(data)
    }).catch((err)=>{
        console.log(err)
    })

    localStorage.setItem('city', city)
})

    if(localStorage.getItem('city')){
        updateCity(localStorage.getItem('city'))
        .then((data) =>{
            updateUi(data)
        }).catch((err) => {
            console.log(err)
        })
    }