import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

export default function WeatherDetail(
    {temp,
    humidity,
    pressure,
    weatherType,
    name,
    speed,
    country,
    sunset}) {
        
    const [weatherState, setWeatherState] = useState();
    useEffect(()=>{
        if(weatherType){
            switch (weatherType) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherState("wi-fog")
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny")
                    break;
                case "Mist":
                    setWeatherState("wi-dust")
                    break;
                case "Rain":
                    setWeatherState("wi-day-rain")
                    break;
                    
                default:
                        setWeatherState("wi-day-sunny")
                    break;
            }
        }
    },[weatherType])

    let sec= sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`
    let day = new Date().getDate();
    let month = new Date().getMonth()+1;
    let year = new Date().getFullYear();
    let dateStr = `${day}/${month}/${year},\n${timeStr} `

    return (
        <div>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}°</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherType}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{dateStr}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeStr} PM <br />
                                sunset
                            </p>
                        </div>
                 
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}<br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}<br />
                                Pressure
                            </p>
                        </div>
                  
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}<br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

    