import React from 'react';
import styles from "../Dashborde.module.css";
import IconWeather from "./IconWeather/IconWeather";


const WeekItems = ({item}) => {

    return (
        <div className={styles.weekItems}>
            <p className={styles.date}>{item.dt_txt}</p>
            <div className={styles.imgContainer}>
                <IconWeather item={item} />
            </div>

            <p className={styles.otherTemp}>{Math.round(item.main.temp_min)}° {Math.round(item.main.temp_max)}°</p>
        </div>
    );
}

export default WeekItems;
