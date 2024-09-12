const temp = document.getElementById('temp'),
  date = document.getElementById('date-time'),
  condition = document.getElementById('condition'),
  rain = document.getElementById('rain'),
  mainIcon = document.getElementById('icon'),
  currentLocation = document.getElementById('location'),
  uvIndex = document.querySelector('.uv-index'),
  uvText = document.querySelector('.uv-text'),
  windSpeed = document.querySelector('.wind-speed'),
  sunRise = document.querySelector('.sun-rise'),
  sunSet = document.querySelector('.sun-set'),
  humidity = document.querySelector('.humidity'),
  visibilty = document.querySelector('.visibilty'),
  humidityStatus = document.querySelector('.humidity-status'),
  airQuality = document.querySelector('.air-quality'),
  airQualityStatus = document.querySelector('.air-quality-status'),
  visibilityStatus = document.querySelector('.visibilty-status'),
  searchForm = document.querySelector('#search'),
  search = document.querySelector('#query'),
  celciusBtn = document.querySelector('.celcius'),
  fahrenheitBtn = document.querySelector('.fahrenheit'),
  tempUnit = document.querySelectorAll('.temp-unit'),
  hourlyBtn = document.querySelector('.hourly'),
  weekBtn = document.querySelector('.week'),
  weatherCards = document.querySelector('#weather-cards')
leftbarOpener = document.querySelector('#leftbar-opener')
let currentCity = ''
let currentUnit = 'c'
let hourlyorWeek = 'week'
leftbarOpener.addEventListener('click', () => {
  document.querySelector('#leftbar-container').classList.toggle('show-leftbar')
})
fetch('leftbar.html')
  .then((response) => response.text())
  .then((data) => {
    document.getElementById('leftbar-container').innerHTML = data
  })
  .catch((error) => console.error('Error loading leftbar:', error))
window.addEventListener('load', () => {
  document.querySelector('#loading').remove()
})
// function to get date and time
function getDateTime() {
  let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes()

  let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
  ]
  // 12 hours format
  hour = hour % 12
  if (hour < 10) {
    hour = '0' + hour
  }
  if (minute < 10) {
    minute = '0' + minute
  }
  let dayString = days[now.getDay()]
  return `${dayString}, ${hour}:${minute}`
}

//Updating date and time
date.innerText = getDateTime()
setInterval(() => {
  date.innerText = getDateTime()
}, 1000)

// function to get public ip address
function getPublicIp() {
  fetch('https://geolocation-db.com/json/', {
    method: 'GET',
    headers: {}
  })
    .then((response) => response.json())
    .then((data) => {
      currentCity = data.city
      getWeatherData(data.city, currentUnit, hourlyorWeek)
    })
    .catch((err) => {
      console.error(err)
    })
}

getPublicIp()

// function to get weather data
function getWeatherData(city, unit, hourlyorWeek) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/istanbul?unitGroup=metric&key=CA4LHJDEV8LNAHUR3AX62LRQC&contentType=json`,
    {
      method: 'GET',
      headers: {}
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let today = data.currentConditions
      if (unit === 'c') {
        temp.innerText = today.temp
      } else {
        temp.innerText = celciusToFahrenheit(today.temp)
      }
      currentLocation.innerText = data.resolvedAddress
      uvIndex.innerText = today.uvindex
      windSpeed.innerText = today.windspeed
      measureUvIndex(today.uvindex)
      mainIcon.src = getIcon(today.icon)
      changeBackground(today.icon)
      humidity.innerText = today.humidity + '%'
      updateHumidityStatus(today.humidity)
      visibilty.innerText = today.visibility
      updateVisibiltyStatus(today.visibility)
      airQuality.innerText = today.winddir
      updateAirQualityStatus(today.winddir)
      if (hourlyorWeek === 'hourly') {
        updateForecast(data.days[0].hours, unit, 'day')
      } else {
        updateForecast(data.days, unit, 'week')
      }
      sunRise.innerText = covertTimeTo12HourFormat(today.sunrise)
      sunSet.innerText = covertTimeTo12HourFormat(today.sunset)
    })
    .catch((err) => {
      console.log('City not found in our database')
    })
}

//function to update Forecast
function updateForecast(data, unit, type) {
  weatherCards.innerHTML = ''
  let day = 0
  let numCards = 0
  if (type === 'day') {
    numCards = 24
  } else {
    numCards = 7
  }
  for (let i = 0; i < numCards; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    let dayName = getHour(data[day].datetime)
    if (type === 'week') {
      dayName = getDayName(data[day].datetime)
    }
    let dayTemp = data[day].temp
    if (unit === 'f') {
      dayTemp = celciusToFahrenheit(data[day].temp)
    }
    let iconCondition = data[day].icon
    let iconSrc = getIcon(iconCondition)
    let tempUnit = '°C'
    if (unit === 'f') {
      tempUnit = '°F'
    }
    card.innerHTML = `
                <h2 class="day-name">${dayName}</h2>
            <div class="card-icon">
              <img src="${iconSrc}" class="day-icon" alt="" />
            </div>
            <div class="day-temp">
              <h2 class="temp">${dayTemp}</h2>
              <span class="temp-unit">${tempUnit}</span>
            </div>
  `
    weatherCards.appendChild(card)
    day++
  }
}

// function to change weather icons
function getIcon(condition) {
  if (condition === 'partly-cloudy-day') {
    return 'https://weatherturkey.net/img/27.webp'
  } else if (condition === 'partly-cloudy-night') {
    return 'https://weatherturkey.net/img/15.webp'
  } else if (condition === 'rain') {
    return 'https://weatherturkey.net/img/39.webp'
  } else if (condition === 'clear-day') {
    return 'https://weatherturkey.net/img/26.webp'
  } else if (condition === 'clear-night') {
    return 'https://weatherturkey.net/img/10.webp'
  } else {
    return 'https://weatherturkey.net/img/26.webp'
  }
}

// function to change background depending on weather conditions
function changeBackground(condition) {
  const body = document.querySelector('body')
  let bg = ''
  if (condition === 'partly-cloudy-day') {
    bg = 'https://i.ibb.co/qNv7NxZ/pc.webp'
  } else if (condition === 'partly-cloudy-night') {
    bg = 'https://i.ibb.co/RDfPqXz/pcn.jpg'
  } else if (condition === 'rain') {
    bg = 'https://i.ibb.co/h2p6Yhd/rain.webp'
  } else if (condition === 'clear-day') {
    bg = 'https://i.ibb.co/WGry01m/cd.jpg'
  } else if (condition === 'clear-night') {
    bg = 'https://i.ibb.co/kqtZ1Gx/cn.jpg'
  } else {
    bg = 'https://i.ibb.co/qNv7NxZ/pc.webp'
  }
  body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bg})`
}

//get hours from hh:mm:ss
function getHour(time) {
  let [hour, min] = time.split(':').map(Number)

  // 24 saat formatına çevirir
  let period = hour >= 12 ? '' : ''

  // Saat 12'den büyükse, 24 saat formatında düzenler
  if (hour > 12) {
    hour -= 12
  }

  // Saat 0 ise, 24 saat formatında 12 olarak ayarlar
  if (hour === 0) {
    hour = 12
  }

  return `${hour}:00`
}

// convert time to 12 hour format
function covertTimeTo12HourFormat(time) {
  // 'time' parametresi 'hh:mm am/pm' formatında olmalıdır
  let [timePart, period] = time.split(' ')
  let [hour, minute] = timePart.split(':').map(Number)

  // Saatin AM veya PM olduğuna göre dönüştürme
  if (period === 'ös') {
    if (hour !== 12) {
      hour += 12
    }
  } else if (period === 'öö') {
    if (hour === 12) {
      hour = 0
    }
  }

  // Saat ve dakika formatlama
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute

  // 24 saat formatında döndürme
  return `${hour}:${minute}`
}

// function to get day name from date
function getDayName(date) {
  let day = new Date(date)
  let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
  ]
  return days[day.getDay()]
}

// function to get uv index status
function measureUvIndex(uvIndex) {
  if (uvIndex <= 2) {
    uvText.innerText = 'Düşük'
  } else if (uvIndex <= 5) {
    uvText.innerText = 'Orta'
  } else if (uvIndex <= 7) {
    uvText.innerText = 'Yüksek'
  } else if (uvIndex <= 10) {
    uvText.innerText = 'Çok Yüksek'
  } else {
    uvText.innerText = 'Çok Çok Yüksek'
  }
}

// function to get humidity status
function updateHumidityStatus(humidity) {
  if (humidity <= 30) {
    humidityStatus.innerText = 'Düşük'
  } else if (humidity <= 60) {
    humidityStatus.innerText = 'Normal'
  } else {
    humidityStatus.innerText = 'Yoğun'
  }
}

// function to get visibility status
function updateVisibiltyStatus(visibility) {
  if (visibility <= 0.03) {
    visibilityStatus.innerText = 'Yoğun Sis'
  } else if (visibility <= 0.16) {
    visibilityStatus.innerText = 'Orta Sis'
  } else if (visibility <= 0.35) {
    visibilityStatus.innerText = 'Hafif Sis'
  } else if (visibility <= 1.13) {
    visibilityStatus.innerText = 'Çok Hafif Sis'
  } else if (visibility <= 2.16) {
    visibilityStatus.innerText = 'Hafif sis'
  } else if (visibility <= 5.4) {
    visibilityStatus.innerText = 'Very Light Mist'
  } else if (visibility <= 10.8) {
    visibilityStatus.innerText = 'Çok Hafif Sis'
  } else {
    visibilityStatus.innerText = 'Çok Berrak Hava'
  }
}

// function to get air quality status
function updateAirQualityStatus(airquality) {
  if (airquality <= 50) {
    airQualityStatus.innerText = 'İyi👌'
  } else if (airquality <= 100) {
    airQualityStatus.innerText = 'Orta😐'
  } else if (airquality <= 150) {
    airQualityStatus.innerText = 'Hassas Gruplar İçin Sağlıksız😷'
  } else if (airquality <= 200) {
    airQualityStatus.innerText = 'Sağlıksız😷'
  } else if (airquality <= 250) {
    airQualityStatus.innerText = 'Çok Sağlıksız😨'
  } else {
    airQualityStatus.innerText = 'Hazardous😱'
  }
}
getWeatherData('istanbul', currentUnit, hourlyorWeek)

// function to handle search form
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let location = search.value
  if (location) {
    currentCity = location
    getWeatherData(location, currentUnit, hourlyorWeek)
  }
})

// function to conver celcius to fahrenheit
function celciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1)
}

var currentFocus
search.addEventListener('input', function (e) {
  removeSuggestions()
  var a,
    b,
    i,
    val = this.value
  if (!val) {
    return false
  }
  currentFocus = -1

  a = document.createElement('ul')
  a.setAttribute('id', 'suggestions')

  this.parentNode.appendChild(a)
})
/*execute a function presses a key on the keyboard:*/
search.addEventListener('keydown', function (e) {
  var x = document.getElementById('suggestions')
  if (x) x = x.getElementsByTagName('li')
  if (e.keyCode == 40) {
    /*If the arrow DOWN key
      is pressed,
      increase the currentFocus variable:*/
    currentFocus++
    /*and and make the current item more visible:*/
    addActive(x)
  } else if (e.keyCode == 38) {
    /*If the arrow UP key
      is pressed,
      decrease the currentFocus variable:*/
    currentFocus--
    /*and and make the current item more visible:*/
    addActive(x)
  }
  if (e.keyCode == 13) {
    /*If the ENTER key is pressed, prevent the form from being submitted,*/
    e.preventDefault()
    if (currentFocus > -1) {
      /*and simulate a click on the "active" item:*/
      if (x) x[currentFocus].click()
    }
  }
})
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false
  /*start by removing the "active" class on all items:*/
  removeActive(x)
  if (currentFocus >= x.length) currentFocus = 0
  if (currentFocus < 0) currentFocus = x.length - 1
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add('active')
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('active')
  }
}

function removeSuggestions() {
  var x = document.getElementById('suggestions')
  if (x) x.parentNode.removeChild(x)
}

fahrenheitBtn.addEventListener('click', () => {
  changeUnit('f')
})
celciusBtn.addEventListener('click', () => {
  changeUnit('c')
})

// function to change unit
function changeUnit(unit) {
  if (currentUnit !== unit) {
    currentUnit = unit
    tempUnit.forEach((elem) => {
      elem.innerText = `°${unit.toUpperCase()}`
    })
    if (unit === 'c') {
      celciusBtn.classList.add('active')
      fahrenheitBtn.classList.remove('active')
    } else {
      celciusBtn.classList.remove('active')
      fahrenheitBtn.classList.add('active')
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek)
  }
}

hourlyBtn.addEventListener('click', () => {
  changeTimeSpan('hourly')
})
weekBtn.addEventListener('click', () => {
  changeTimeSpan('week')
})

// function to change hourly to weekly or vice versa
function changeTimeSpan(unit) {
  if (hourlyorWeek !== unit) {
    hourlyorWeek = unit
    if (unit === 'hourly') {
      hourlyBtn.classList.add('active')
      weekBtn.classList.remove('active')
    } else {
      hourlyBtn.classList.remove('active')
      weekBtn.classList.add('active')
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek)
  }
}
