import { imgSetter, convertDate } from './utils'
// eslint-disable-next-line import/prefer-default-export
function renderCurrentWeather(cityData) {
  console.log(cityData)
  const cityName = document.querySelector('.current-city-name > h1')
  cityName.innerHTML = `${cityData.name} <span class="country-name"><sup>${cityData.country}</sup></span>`
  const dateTime = document.querySelector('.current-date-time')
  const currentDateTime = convertDate(
    cityData.current.dt,
    cityData.timezone_offset
  )
  dateTime.innerText = currentDateTime
  const currentTemp = document.querySelector('.current-city-temp > h1')
  const temp = Math.round(cityData.current.temp)
  currentTemp.innerText = `${temp}°`
  const weatherDescription = cityData.current.weather[0].description
  const currentWeatherImgContainer = document.querySelector(
    '.current-weather-svg'
  )
  const imgLink = imgSetter(weatherDescription)
  currentWeatherImgContainer.innerHTML = ` <img
  src="${imgLink}"
  alt="current weather image"
  srcset=""
  title="${weatherDescription}"
/>`
}

function renderHourlyForecast(cityData) {
  // hour1
  const tf1Day = document.querySelector('.tf-1 > .tdf-day')
  tf1Day.innerText = convertDate(
    cityData.hourly[4].dt,
    cityData.timezone_offset,
    false
  )
  const tf1Img = document.querySelector('.tf-1 > img')

  tf1Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[4].weather[0].description)
  )
  tf1Img.setAttribute('title', cityData.hourly[4].weather[0].description)
  const tf1Temp = document.querySelector('.tf-1 > h3')
  tf1Temp.innerText = `${Math.round(cityData.hourly[4].temp)}°`
  // hour2
  const tf2Day = document.querySelector('.tf-2 > .tdf-day')
  tf2Day.innerText = convertDate(
    cityData.hourly[8].dt,
    cityData.timezone_offset,
    false
  )
  const tf2Img = document.querySelector('.tf-2 > img')

  tf2Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[8].weather[0].description)
  )
  tf2Img.setAttribute('title', cityData.hourly[8].weather[0].description)
  const tf2Temp = document.querySelector('.tf-2 > h3')
  tf2Temp.innerText = `${Math.round(cityData.hourly[8].temp)}°`
  // hour3
  const tf3Day = document.querySelector('.tf-3 > .tdf-day')
  tf3Day.innerText = convertDate(
    cityData.hourly[12].dt,
    cityData.timezone_offset,
    false
  )
  const tf3Img = document.querySelector('.tf-3 > img')

  tf3Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[12].weather[0].description)
  )
  tf3Img.setAttribute('title', cityData.hourly[12].weather[0].description)
  const tf3Temp = document.querySelector('.tf-3 > h3')
  tf3Temp.innerText = `${Math.round(cityData.hourly[12].temp)}°`
  // hour4
  const tf4Day = document.querySelector('.tf-4 > .tdf-day')
  tf4Day.innerText = convertDate(
    cityData.hourly[16].dt,
    cityData.timezone_offset,
    false
  )
  const tf4Img = document.querySelector('.tf-4 > img')

  tf4Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[16].weather[0].description)
  )
  tf4Img.setAttribute('title', cityData.hourly[16].weather[0].description)
  const tf4Temp = document.querySelector('.tf-4 > h3')
  tf4Temp.innerText = `${Math.round(cityData.hourly[16].temp)}°`
  // hour 5
  const tf5Day = document.querySelector('.tf-5 > .tdf-day')
  tf5Day.innerText = convertDate(
    cityData.hourly[20].dt,
    cityData.timezone_offset,
    false
  )
  const tf5Img = document.querySelector('.tf-5 > img')

  tf5Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[20].weather[0].description)
  )
  tf5Img.setAttribute('title', cityData.hourly[20].weather[0].description)
  const tf5Temp = document.querySelector('.tf-5 > h3')
  tf5Temp.innerText = `${Math.round(cityData.hourly[20].temp)}°`

  // hour 6

  const tf6Day = document.querySelector('.tf-6 > .tdf-day')
  tf6Day.innerText = convertDate(
    cityData.hourly[24].dt,
    cityData.timezone_offset,
    false
  )
  const tf6Img = document.querySelector('.tf-6 > img')

  tf6Img.setAttribute(
    'src',
    imgSetter(cityData.hourly[24].weather[0].description)
  )
  tf6Img.setAttribute('title', cityData.hourly[24].weather[0].description)
  const tf6Temp = document.querySelector('.tf-6 > h3')
  tf6Temp.innerText = `${Math.round(cityData.hourly[24].temp)}°`
}

export { renderHourlyForecast, renderCurrentWeather }
