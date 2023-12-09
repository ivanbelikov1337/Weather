import React from 'react';
import {useSelector} from "react-redux";
import WeekItems from "../Dashborde/WeekItems/WeekItems";
import styles from "./ShowAll.module.css"
import { MdOutlineCancel } from 'react-icons/md';
import {Link} from "react-router-dom";
import {ROUTES} from "../../Utils/routes";


const ShowAll = (props) => {
    const {weatherFiveDay} = useSelector(({weather}) => weather)
    return (
        <section className={styles.wrapper}>
            <Link className={styles.link} to={ROUTES.HOME}>
                <MdOutlineCancel size={"5rem"}/>
            </Link>
            {weatherFiveDay.map(item => <WeekItems key={item.dt} item={item}/>)}
        </section>
    );
}

export default ShowAll;