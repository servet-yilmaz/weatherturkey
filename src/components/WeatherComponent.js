import React from 'react'
import umbrella from '../images/icon-umberella.png'
import wind from '../images/icon-wind.png'
import compass from '../images/icon-compass.png'

export default function WeatherComponent() {
  return (
    <div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="day">Bugün</div>
								<div class="date">6 Oct</div>
							</div>
							<div class="forecast-content">
								<div class="location">İstanbul</div>
								<div class="degree">
									<div class="num">23<sup>o</sup>C</div>
									<div class="forecast-icon">
										<img src="images/icons/icon-1.svg" alt="" width="90" />
									</div>	
								</div>
								<span><img src={umbrella} alt="" />20%</span>
								<span><img src={wind} alt="" />18km/h</span>
								<span><img src={compass} alt="" />East</span>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Tuesday</div>
							</div>
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-3.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Wednesday</div>
							</div>
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-5.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Thursday</div>
							</div>
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-7.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Friday</div>
							</div> 
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-12.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Saturday</div>
							</div> 
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-13.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
						<div class="forecast">
							<div class="forecast-header">
								<div class="day">Sunday</div>
							</div> 
							<div class="forecast-content">
								<div class="forecast-icon">
									<img src="images/icons/icon-14.svg" alt="" width="48" />
								</div>
								<div class="degree">23<sup>o</sup>C</div>
								<small>18<sup>o</sup></small>
							</div>
						</div>
					</div>
				</div>
			</div>
  )
}
