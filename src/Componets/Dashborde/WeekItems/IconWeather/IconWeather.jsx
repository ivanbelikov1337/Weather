import React from 'react';
import {IoIosCloud, IoMdPartlySunny, IoMdSunny} from "react-icons/io";
import {FaCloudMoonRain, FaCloudSunRain} from "react-icons/fa";
import {BsCloudMoon} from "react-icons/bs";
import {IoMoonSharp} from "react-icons/io5";
import {RiMoonFoggyLine} from "react-icons/ri";

const IconWeather = ({item}) => {
    return (
        <>
            {item.weather[0].icon === "04d" && <IoMdPartlySunny size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "03d" && <FaCloudSunRain size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "10d" && <IoMdPartlySunny size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "02d" && <IoIosCloud size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "01d" && <IoMdSunny size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "04n" && <BsCloudMoon size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "03n" && <BsCloudMoon size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "10n" && <FaCloudMoonRain size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "02n" && <IoIosCloud size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "01n" && <IoMoonSharp size={"5rem"} color={"white"}/>}
            {item.weather[0].icon === "50n" && <RiMoonFoggyLine size={"5rem"} color={"white"}/>}
        </>
    );
}

export default IconWeather;