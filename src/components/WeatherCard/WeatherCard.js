import { useState } from "react";

import Header from "./Header";
import Detail from "./Detail";

import styles from "./Weather.module.css"

const WeatherCard = (props) => {
    const [currentDay, setCurrentDay] = useState("today");
    
    const { data } = props;

    const {city, sunrise, sunset} = data;
    
    const currentWeather = data[currentDay];

    const weatherDetail = {
      humidity: currentWeather.humidity,
      wind: currentWeather.wind,
      visibility: currentWeather.visibility,
      sunrise,
      sunset
    }

    return (
        <article className={styles.card}>
            <div className={styles.leftColumn}>
                <Header 
                    city={city}
                    date={currentWeather.date}
                    temp={currentWeather.temp}
                    icon={currentWeather.icon}
                    description={currentWeather.description}
                    shortDescription={currentWeather.shortDescription}
                />
            </div>
            <div className={styles.rightColumn}>
                <Detail 
                    onChangeDay={({target}) => setCurrentDay(target.id)} 
                    weatherDay={currentDay}
                    weather={weatherDetail}
                />
            </div>
        </article>
    )
}

export default WeatherCard;