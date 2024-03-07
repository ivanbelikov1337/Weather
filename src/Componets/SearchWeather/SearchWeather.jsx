import React, {useState} from 'react';
import styles from "./SearchWeather.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getWeather, getWeatherFiveDay} from "../../Redux/WeatherApi/weatherSlice";
import WeatherIcons from "./WeatherIcons/WeatherIcons";
import {MdPlace} from "react-icons/md";
import {SiWindicss} from "react-icons/si";
import {WiHumidity} from "react-icons/wi";
import {IoRainySharp} from "react-icons/io5";

const SearchWeather = () => {
    const {
        weatherDataMain,
        weatherData,
        weatherDataClouds,
        weatherDataWind,
        error,
        weatherDataWeather,
        isLoading,
    } = useSelector(({weather}) => weather)
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getWeather(cityName))
        dispatch(getWeatherFiveDay(cityName))
        setCityName("")
    }
    const handleChange = (e) => {
        setCityName(e.target.value)
    }


    return (
        <>
            {!isLoading ? <section className={styles.wrapper}>
                <div className={styles.cite}>
                    <MdPlace size={"1.5rem"} color="#C2BFF4"/>
                    <p className={styles.citeName}>{weatherData.name}</p>
                </div>
                <div className={styles.item}>
                    <div className={styles.mainTemperature}>
                        <p className={styles.mt}>{Math.round(weatherDataMain.temp || "")}</p>
                        <span className={styles.celsius}>°C</span>
                    </div>
                    <p className={styles.otherTemp}>
                        {Math.round(weatherDataMain.temp_min || "")}° ~ {Math.round(weatherDataMain.temp_max || "")}°
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input className={styles.input}
                               type="text"
                               value={cityName}
                               onChange={handleChange}
                               placeholder={"City name"}
                               autoComplete={"off"}/>
                        {error ? <p className={styles.err}>City {error}</p> : null}
                    </form>

                </div>
                <div className={styles.info}>
                    <div className={styles.infoItems}>
                        <SiWindicss color="white" size={"2.2rem"}/>
                        <div>
                            <p className={styles.element}>Wind</p>
                            <p className={styles.number}>
                                {Math.round(weatherDataWind.speed)} km/h
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItems}>
                        <WiHumidity color="white" size={"2.6rem"}/>
                        <div>
                            <p className={styles.element}>Humidity</p>
                            <p className={styles.number}>
                                {Math.round(weatherDataMain.humidity)}%
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItems}>
                        <IoRainySharp color="white" size={"2.2rem"}/>
                        <div>
                            <p className={styles.element}>Clouds</p>
                            <p className={styles.number}>
                                {Math.round(weatherDataClouds.all)}%
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.mainCloud}>
                    <WeatherIcons weatherDataWeather={weatherDataWeather}/>
                </div>
            </section> : <div className={styles.loading}>Loading...</div>
            }
        </>
    );
}

export default SearchWeather;
