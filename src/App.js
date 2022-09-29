import { useEffect, useState } from "react";
import { useLocation } from "./hooks/useLocation";

import PageTitle from "./components/PageTitle/PageTitle";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Loader from "./components/Loader/Loader";

import { API_END_POINT, API_KEY } from "./const";

import { getUrl, transformWeatherData } from "./utils";

const App = () => {
    const [latitude, longitude] = useLocation();

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        (async () => {
            if(!latitude || !longitude) return;

            const url = getUrl(latitude, longitude, API_END_POINT, API_KEY);

            const response = await fetch(url);
            const rawData = await response.json();

            setWeatherData(transformWeatherData(rawData));
        })();

    }, [latitude, longitude]);

    return (
        <>
            <PageTitle title="Weather App" />
            {!weatherData ? <Loader /> : <WeatherCard data={weatherData} />}
        </>
    )
}

export default App;