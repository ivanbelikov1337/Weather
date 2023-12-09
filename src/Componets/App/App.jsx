import React, {useEffect} from 'react';
import styles from "./App.module.css"
import {useDispatch} from "react-redux";
import {getWeather, getWeatherFiveDay} from "../../Redux/WeatherApi/weatherSlice";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../../Utils/routes";
import Home from "../Home/Home";
import ShowAll from "../ShowAll/ShowAll";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getWeather("london"))
        dispatch(getWeatherFiveDay("london"))
    }, [dispatch]);

    return (
            <section className={styles.wrapper}>
                <Routes>
                    <Route path={ROUTES.HOME} element={ <Home/>}/>
                    <Route path={ROUTES.VIEW_FIVE_DAYS} element={ <ShowAll/>}/>
                </Routes>
            </section>

    );
}

export default App;