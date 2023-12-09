import React from 'react';
import {IoIosCloud, IoMdPartlySunny, IoMdSunny} from "react-icons/io";
import {FaCloudMoonRain, FaCloudSunRain} from "react-icons/fa";
import {IoMoonSharp} from "react-icons/io5";
import {BsCloudMoon} from "react-icons/bs";
import {RiMoonFoggyLine} from "react-icons/ri";

const WeatherIcons = ({weatherDataWeather}) => {
    return (
        <>
            {weatherDataWeather === "04d" && <IoMdPartlySunny size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "03d" && <FaCloudSunRain size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "10d" && <IoMdPartlySunny size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "02d" && <IoIosCloud size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "01d" && <IoMdSunny size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "04n" && <BsCloudMoon size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "03n" && <BsCloudMoon size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "10n" && <FaCloudMoonRain size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "02n" && <IoIosCloud size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "01n" && <IoMoonSharp size={"5rem"} color={"white"}/>}
            {weatherDataWeather === "50n" && <RiMoonFoggyLine size={"5rem"} color={"white"}/>}
        </>
    );
}

export default WeatherIcons;