import React from 'react'
import moment from 'moment';
import styles from './Forecast.module.css'

function Forecast({ forecast }) {
    return (
        <>
            <div className={`${styles.box}`}>
                <div className={`${styles.city}`}>{forecast.title}</div>
                <div className={`${styles.date}`}>{moment(forecast.data_applicable).format('LL')}</div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.temprature}`}>{Math.round(forecast.consolidated_weather[0].the_temp)}°C</div>
                    <img width="85" src={`https://www.metaweather.com/static/img/weather/${forecast.consolidated_weather[0].weather_state_abbr}.svg`} alt="weather" />
                </div>
                <div className={`${styles.atmosphere}`}>{forecast.consolidated_weather[0].weather_state_name}</div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.humidity}`}>Humidity </div>
                    <div className={`${styles.humidityVal}`}>{forecast.consolidated_weather[0].humidity} %</div>
                </div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.wind}`}>Wind </div>
                    <div className={`${styles.windVal}`}>{Math.round(forecast.consolidated_weather[0].wind_speed)} km/hr</div>
                </div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.maxTemp}`}>Max : {Math.round(forecast.consolidated_weather[0].max_temp)} °C ,</div>
                    <div className={`${styles.minTemp}`}>Min : {Math.round(forecast.consolidated_weather[0].min_temp)} °C </div>
                </div>
            </div>


        </>
    )
}

export default Forecast