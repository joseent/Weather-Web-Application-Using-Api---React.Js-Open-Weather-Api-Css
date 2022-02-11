import React, { useEffect, useState } from 'react';
import '../components/style.css'
import WeatherDetail from './WeatherDetail';

export default function SearchMain(props) {
    const [searchTerm, setSearchTerm] = useState('mumbai')
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=5debbfe1322041f2d96bef2adaee3feb`;
            let res = await fetch(url);
            let data = await res.json();
            const{temp, humidity, pressure} = data.main;
            const {main: weatherType} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset
            };
            setTempInfo(myNewWeatherInfo);

        }catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getWeatherInfo()
    },[searchTerm])

    
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" id="search" placeholder="Search city.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="searchButton" onClick={getWeatherInfo}>Search </button>
                </div>
            </div>
            <WeatherDetail {...tempInfo}/>
        </>
    );
}

