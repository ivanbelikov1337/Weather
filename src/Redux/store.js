import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./WeatherApi/weatherSlice";

const rootReducer = combineReducers({
    weather: weatherSlice.reducer
})
export const store = configureStore({
        reducer: rootReducer,
    }
)