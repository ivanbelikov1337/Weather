import React from 'react';
import Dashboard from "../Dashborde/Dashboard";
import SearchWeather from "../SearchWeather/SearchWeather";

const Home = () => {
    return (
       <>
           <SearchWeather/>
           <Dashboard/>
       </>
    );
}

export default Home;