import React from 'react';
import styles from "./Dashborde.module.css"
import {WiDust} from "react-icons/wi";
import {BsFillSunriseFill, BsFillSunsetFill} from "react-icons/bs";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaSun} from "react-icons/fa";
import {useSelector} from "react-redux";
import WeekItems from "./WeekItems/WeekItems";
import {Link} from "react-router-dom";
import {ROUTES} from "../../Utils/routes";


const Dashboard = () => {
    const {
        weatherDataWind,
        weatherDataMain,
        weatherDataSys,
        weatherFiveDay
    } = useSelector(({weather}) => weather)
    const list = weatherFiveDay.filter((_, i) => i < 5)

    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.air}>
                        <div className={styles.title}>
                            <WiDust size={"3rem"}/>
                            <p>Air quality</p>
                        </div>
                        <p className={styles.number}>
                            {weatherDataWind.deg}
                            <RiDashboard3Fill size={"3rem"}/>
                        </p>
                        <p className={styles.pressure}>Pressure: {weatherDataMain.pressure}</p>
                    </div>
                    <div className={styles.sunset}>
                        <div className={styles.title}>
                            <FaSun color={"yellow"} size={"2rem"}/>
                            <p>Sun</p>
                        </div>
                        <p className={styles.numbers}>
                            <BsFillSunriseFill color={"yellow"} size={"3rem"}/>
                            {new Date((weatherDataSys.sunrise ) * 1000).toJSON().slice(11,19)}
                        </p>
                        <p className={styles.numbers}>
                            <BsFillSunsetFill color={"yellow"} size={"3rem"}/>
                            {new Date((weatherDataSys.sunset ) * 1000).toJSON().slice(11,19)}
                        </p>
                    </div>
                </div>
                <div className={styles.week}>
                    <div className={styles.items}>
                        {list.map(item => <WeekItems key={item.dt} item={item}/>)}
                    </div>
                    <Link className={styles.link} to={ROUTES.VIEW_FIVE_DAYS}>View for 5 days</Link>
                </div>
            </section>
        </>
    );
}

export default Dashboard;