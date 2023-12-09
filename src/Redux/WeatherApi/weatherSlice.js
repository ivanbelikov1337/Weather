import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiKey, FiveDay, oneDay} from "../../Utils/Utils";
import axios from "axios";


export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async  (city, {rejectWithValue}) => {

        try {
            const res = axios.get(`${oneDay}?q=${city}&appid=${apiKey}&units=metric`)

            if ((await res).statusText !== "OK") {
                throw new Error("Not founded")
            }
            return (await res).data
        } catch (err) {
            return rejectWithValue(err.response.statusText)
        }

    }
)

export const getWeatherFiveDay = createAsyncThunk(
    "weather/getWeatherFiveDay",
    async (city, {rejectWithValue}) => {

        try {
            const res = axios.get(`${FiveDay}?q=${city}&appid=${apiKey}&units=metric`)

            if ((await res).statusText !== "OK") {
                throw new Error("Not founded")
            }

            return (await res).data
        } catch (err) {
            return rejectWithValue(err.response.statusText)
        }

    }
)

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherDataMain: [],
        weatherDataWind: [],
        weatherDataWeather: [],
        weatherData: [],
        weatherDataSys: [],
        weatherDataClouds: [],
        isLoading: false,
        weatherFiveDay: [],
        error: null,
        status: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state) => {
            state.isLoading = true;
            state.status = "loading"
        })
        builder.addCase(getWeather.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.weatherDataMain = payload.main
            state.weatherDataWind = payload.wind
            state.weatherDataSys = payload.sys
            state.weatherDataWeather = payload.weather[0].icon
            state.weatherDataClouds = payload.clouds
            state.weatherData = payload
            state.status = "resolved"
            state.error = null
        })
        builder.addCase(getWeather.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.status = "rejected"
            state.error = payload
        })
        builder.addCase(getWeatherFiveDay.fulfilled, (state, {payload}) => {
            state.weatherFiveDay = payload.list
            state.status = "resolved"
        })
    }
})



