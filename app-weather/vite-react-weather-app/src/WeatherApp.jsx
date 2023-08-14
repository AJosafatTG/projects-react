import React from 'react'
import { useState } from 'react'


export const WeatherApp = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY ='093f862693a0baa8d41ffc4ff9061c55';
    const convKelvin = 273.15;
    const convWind = 3.6;
    const [city, setCity] = useState('');
    const [dataWeather, setDataWeather] = useState(null)

    const handleChangeCity = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (city.length > 0) {
            fetchWeather();
        }
    }

    const fetchWeather = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
            const data = await response.json();
            setDataWeather(data);
        } catch (error) {
            console.error('Problem: ', error);
        }
    }

    return (
        <>
            <div className="weather-container">
                <div className="current">
                {
                    dataWeather && (
                        <div className="city">
                            {dataWeather.name}, {dataWeather.sys.country}
                        </div>
                    )
                }
                
                <div className="day">Now</div>
                <div className="row">
                    <div className="icon">
                        {
                            dataWeather && (
                                <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather"/>
                            )
                        }
                    </div>
                    <div className="info">
                        <div className="temperature">
                            <div className="temperature-now">
                                {parseInt(dataWeather?.main?.temp - convKelvin)}°
                            </div>
                            <div className="temperature-low">/{parseInt(dataWeather?.main?.temp_min - convKelvin)}°</div>
                        </div>
                        {
                            dataWeather && (
                                <div className="status">{dataWeather.weather[0].main}, {dataWeather.weather[0].description}</div>
                            )
                        }
                        
                    </div>
                </div>
                <div className="more">
                <div className="item">
                        <div className="icon">
                        <span className="material-symbols-outlined">device_thermostat</span>
                        </div>
                        <div className="text">
                            <div className="value">{parseInt(dataWeather?.main?.feels_like - convKelvin)} °C</div>
                            <div className="type">Real Sensation</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <span className="material-symbols-outlined">air</span> 
                        </div>
                        <div className="text">
                            <div className="value">{parseInt(dataWeather?.wind?.speed * convWind)} km/h</div>
                            <div className="type">Wind</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <span className="material-symbols-outlined">water_drop</span> 
                        </div>
                        <div className="text">
                            <div className="value">{dataWeather?.main?.humidity} %</div>
                            <div className="type">Humidity</div>
                        </div>
                    </div>
                    
                </div>
            </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={city}
                        onChange={handleChangeCity}
                    />
                    <button type="submit">Search</button>
                </form>
                {
                    dataWeather && (
                        <div>
                            
                            <h2>{dataWeather.name}, {dataWeather.sys.country}</h2>
                            <p><b>Temperature:</b> {parseInt(dataWeather?.main?.temp - convKelvin)} °C</p>
                            <p><b>Temp. Min:</b> {parseInt(dataWeather?.main?.temp_min - convKelvin)} °C</p>
                            <p><b>Temp. Max:</b> {parseInt(dataWeather?.main?.temp_max - convKelvin)} °C</p>
                            <p><b>Weather Condition:</b> {dataWeather.weather[0].main}, {dataWeather.weather[0].description}</p>
                            <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather"/>
                        </div>
                    )
                }
            </div>
        </>
        
    );
}
