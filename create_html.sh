#!/bin/bash

# Şehir isimlerini tanımlayın
sehirler=("Adana" "Adıyaman" "Afyonkarahisar" "Ağrı" "Aksaray" "Amasya" "Ankara" "Antalya" "Ardahan" "Artvin" "Aydın" "Balıkesir" "Bartın" "Batman" "Bayburt" "Bilecik" "Bingöl" "Bitlis" "Bolu" "Burdur" "Bursa" "Çanakkale" "Çankırı" "Çorum" "Denizli" "Diyarbakır" "Düzce" "Edirne" "Elazığ" "Erzincan" "Erzurum" "Eskişehir" "Gaziantep" "Giresun" "Gümüşhane" "Hakkari" "Hatay" "Iğdır" "Isparta" "İstanbul" "İzmir" "Kahramanmaraş" "Karabük" "Karaman" "Kars" "Kastamonu" "Kayseri" "Kırıkkale" "Kırklareli" "Kırşehir" "Kilis" "Kocaeli" "Konya" "Kütahya" "Malatya" "Manisa" "Mardin" "Mersin" "Muğla" "Muş" "Nevşehir" "Niğde" "Ordu" "Osmaniye" "Rize" "Sakarya" "Samsun" "Siirt" "Sinop" "Sivas" "Şanlıurfa" "Şırnak" "Tekirdağ" "Tokat" "Trabzon" "Tunceli" "Uşak" "Van" "Yalova" "Yozgat" "Zonguldak")

# Türkçe karakterlerin karşılıklarını tanımlayın
declare -A char_map=(
    ["ç"]="c"
    ["Ç"]="c"
    ["ğ"]="g"
    ["Ğ"]="g"
    ["ı"]="i"
    ["I"]="i"
    ["ö"]="o"
    ["Ö"]="o"
    ["ş"]="s"
    ["Ş"]="s"
    ["ü"]="u"
    ["Ü"]="u"
)

# Her şehir için HTML dosyası oluştur
for sehir in "${sehirler[@]}"
do
    # Şehir adını küçük harfe çevirin
    sehir_kucuk=$(echo "$sehir" | tr '[:upper:]' '[:lower:]')

    # Türkçe karakterleri İngilizce karşılıklarına çevirin
    seo_uyumlu_sehir="$sehir_kucuk"
    for tr_char in "${!char_map[@]}"
    do
        seo_uyumlu_sehir=$(echo "$seo_uyumlu_sehir" | sed "s/$tr_char/${char_map[$tr_char]}/g")
    done

    # Boşlukları tire ile değiştirin
    seo_uyumlu_sehir=$(echo "$seo_uyumlu_sehir" | tr ' ' '-')

    # HTML dosyasını oluşturun
    cat <<EOL > "${seo_uyumlu_sehir}.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${sehir} Hava Durumu - WeatherTurkey</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="leftbar">
      <div class="logo">WeatherTurkey</div>
      <div class="menu">
        <div class="menu-title" style="font-size: 20px; color: #000">
          Şehirler
        </div>
        <ul>
          <li>
            <a href="/adana.html">Adana</a>
          </li>
          <li>
            <a href="/adiyaman.html">Adıyaman</a>
          </li>
          <li>
            <a href="/afyonkarahisar.html">Afyonkarahisar</a>
          </li>
          <li>
            <a href="/agri.html">Ağrı</a>
          </li>
          <li>
            <a href="/aksaray.html">Aksaray</a>
          </li>
          <li>
            <a href="/amasya.html">Amasya</a>
          </li>
          <li>
            <a href="/ankara.html">Ankara</a>
          </li>
          <li>
            <a href="/antalya.html">Antalya</a>
          </li>
          <li>
            <a href="/ardahan.html">Ardahan</a>
          </li>
          <li>
            <a href="/artvin.html">Artvin</a>
          </li>
          <li>
            <a href="/aydin.html">Aydın</a>
          </li>
          <li>
            <a href="/balikesir.html">Balıkesir</a>
          </li>
          <li>
            <a href="/bartin.html">Bartın</a>
          </li>
          <li>
            <a href="/batman.html">Batman</a>
          </li>
          <li>
            <a href="/bayburt.html">Bayburt</a>
          </li>
          <li>
            <a href="/bilecik.html">Bilecik</a>
          </li>
          <li>
            <a href="/bingol.html">Bingöl</a>
          </li>
          <li>
            <a href="/bitlis.html">Bitlis</a>
          </li>
          <li>
            <a href="/bolu.html">Bolu</a>
          </li>
          <li>
            <a href="/burdur.html">Burdur</a>
          </li>
          <li>
            <a href="/bursa.html">Bursa</a>
          </li>
          <li>
            <a href="/canakkale.html">Çanakkale</a>
          </li>
          <li>
            <a href="/cankiri.html">Çankiri</a>
          </li>
          <li>
            <a href="/corum.html">Çorum</a>
          </li>
          <li>
            <a href="/denizli.html">Denizli</a>
          </li>
          <li>
            <a href="/diyarbakir.html">Diyarbakır</a>
          </li>
          <li>
            <a href="/duzce.html">Düzce</a>
          </li>
          <li>
            <a href="/edirne.html">Edirne</a>
          </li>
          <li>
            <a href="/elazig.html">Elazığ</a>
          </li>
          <li>
            <a href="/erzincan.html">Erzincan</a>
          </li>
          <li>
            <a href="/erzurum.html">Erzurum</a>
          </li>
          <li>
            <a href="/eskisehir.html">Eskişehir</a>
          </li>
          <li>
            <a href="/gaziantep.html">Gaziantep</a>
          </li>
          <li>
            <a href="/giresun.html">Giresun</a>
          </li>
          <li>
            <a href="/gumushane.html">Gümüşhane</a>
          </li>
          <li>
            <a href="/hakkari.html">Hakkari</a>
          </li>
          <li>
            <a href="/hatay.html">Hatay</a>
          </li>
          <li>
            <a href="/igdir.html">Iğdır</a>
          </li>
          <li>
            <a href="/isparta.html">Isparta</a>
          </li>
          <li>
            <a href="/istanbul.html">İstanbul</a>
          </li>
          <li>
            <a href="/izmir.html">İzmir</a>
          </li>
          <li>
            <a href="/kahramanmaras.html">Kahramanmaraş</a>
          </li>
          <li>
            <a href="/karabuk.html">Karabük</a>
          </li>
          <li>
            <a href="/karaman.html">Karaman</a>
          </li>
          <li>
            <a href="/kars.html">Kars</a>
          </li>
          <li>
            <a href="/kastamonu.html">Kastamonu</a>
          </li>
          <li>
            <a href="/kayseri.html">Kayseri</a>
          </li>
          <li>
            <a href="/kirikkale.html">Kırıkkale</a>
          </li>
          <li>
            <a href="/kirklareli.html">Kırklareli</a>
          </li>
          <li>
            <a href="/kirsehir.html">Kırşehir</a>
          </li>
          <li>
            <a href="/kilis.html">Kilis</a>
          </li>
          <li>
            <a href="/kocaeli.html">Kocaeli</a>
          </li>
          <li>
            <a href="/konya.html">Konya</a>
          </li>
          <li>
            <a href="/kutahya.html">Kütahya</a>
          </li>
          <li>
            <a href="/malatya.html">Malatya</a>
          </li>
          <li>
            <a href="/manisa.html">Manisa</a>
          </li>
          <li>
            <a href="/mardin.html">Mardin</a>
          </li>
          <li>
            <a href="/mersin.html">Mersin</a>
          </li>
          <li>
            <a href="/mugla.html">Muğla</a>
          </li>
          <li>
            <a href="/mus.html">Muş</a>
          </li>
          <li>
            <a href="/nevsehir.html">Nevşehir</a>
          </li>
          <li>
            <a href="/nigde.html">Niğde</a>
          </li>
          <li>
            <a href="/ordu.html">Ordu</a>
          </li>
          <li>
            <a href="/osmaniye.html">Osmaniye</a>
          </li>
          <li>
            <a href="/rize.html">Rize</a>
          </li>
          <li>
            <a href="/sakarya.html">Sakarya</a>
          </li>
          <li>
            <a href="/samsun.html">Samsun</a>
          </li>
          <li>
            <a href="/siirt.html">Siirt</a>
          </li>
          <li>
            <a href="/sinop.html">Sinop</a>
          </li>
          <li>
            <a href="/sivas.html">Sivas</a>
          </li>
          <li>
            <a href="/sanliurfa.html">şanlıurfa</a>
          </li>
          <li>
            <a href="/sirnak.html">Şırnak</a>
          </li>
          <li>
            <a href="/tekirdag.html">Tekirdağ</a>
          </li>
          <li>
            <a href="/tokat.html">Tokat</a>
          </li>
          <li>
            <a href="/trabzon.html">Trabzon</a>
          </li>
          <li>
            <a href="/tunceli.html">Tunceli</a>
          </li>
          <li>
            <a href="/usak.html">Uşak</a>
          </li>
          <li>
            <a href="/van.html">Van</a>
          </li>
          <li>
            <a href="/yalova.html">Yalova</a>
          </li>
          <li>
            <a href="/yozgat.html">Yozgat</a>
          </li>
          <li>
            <a href="/zonguldak.html">Zonguldak</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <div class="sidebar">
        <div id="leftbar-opener">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div>
          <form class="search" id="search">
            <input type="text" id="query" placeholder="Search..." />
            <button><i class="fas fa-search"></i></button>
          </form>
          <div class="weather-icon">
            <img id="icon" src="icons/sun/4.png" alt="" />
          </div>
          <div class="temperature">
            <h1 id="temp">0</h1>
            <span class="temp-unit">°C</span>
          </div>
          <div class="date-time">
            <p id="date-time">Monday, 12:00</p>
          </div>
          <div class="divider"></div>
        </div>
        <div class="location">
          <div class="location-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="location-text">
            <p id="location">location</p>
          </div>
        </div>
      </div>
      <div class="main">
        <nav>
          <ul class="options">
            <button class="hourly">bugün</button>
            <button class="week active">haftalık</button>
          </ul>
          <ul class="options units">
            <button class="celcius active">°C</button>
            <button class="fahrenheit">°F</button>
          </ul>
        </nav>
        <div class="cards" id="weather-cards"></div>
        <div class="highlights">
          <h2 class="heading">günün analizi</h2>
          <div class="cards">
            <div class="card2">
              <h4 class="card-heading">UV İndeksi</h4>
              <div class="content">
                <p class="uv-index">0</p>
                <p class="uv-text">Low</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Rüzgar Hızı</h4>
              <div class="content">
                <p class="wind-speed">0</p>
                <p>km/h</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Gün Doğumu</h4>
              <div class="content">
                <p class="sun-rise">0</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Gün Batımı</h4>
              <div class="content">
                <p class="sun-set">0</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Nem</h4>
              <div class="content">
                <p class="humidity">0</p>
                <p class="humidity-status">Normal</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Görüş Mesafesi</h4>
              <div class="content">
                <p class="visibilty">0</p>
                <p class="visibilty-status">Normal</p>
              </div>
            </div>
            <div class="card2">
              <h4 class="card-heading">Hava Kalitesi</h4>
              <div class="content">
                <p class="air-quality">0</p>
                <p class="air-quality-status">Normal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
    <script>
      const city = '$sehir'
       function getWeatherData(city, unit, hourlyorWeek) {
        fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`,
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
            alert('City not found in our database')
          })
      }
      getWeatherData(city, currentUnit, hourlyorWeek)
    </script>
  </body>
</html>
EOL

    echo "$seo_uyumlu_sehir.html dosyası oluşturuldu."
done

