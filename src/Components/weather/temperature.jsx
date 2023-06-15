import React, { useEffect, useState } from 'react'
import WeatherStructure from './weatherStructure';
import "./style.css"

const Temperature = () => {

    const [searchValue, setSearchValue] = useState("Dahanu");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url =`
            https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6f482f8e2520a64dde200f865fce0382 `;

            const res = await fetch(url);
            const data = await res.json();

            const {temp, humidity, pressure} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const newWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            }

            setTempInfo(newWeatherInfo)

            console.log(temp);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <div className="wrap">
                    <div className="search">
                        <input type="search"
                         name="" id="search" 
                         placeholder='Search 🔍' 
                         autoFocus className='searchTerm'
                         value={searchValue}
                         onChange={(e) => setSearchValue(e.target.value)} 
                         />
                        <button className="searchButton" type='button' onClick={getWeatherInfo}>Search </button>
                    </div>
                </div>
            </div>

            < WeatherStructure tempInfo = {tempInfo}/>
            {/* < WeatherStructure{...tempInfo}/> */}
        </>
    )
}

export default Temperature
