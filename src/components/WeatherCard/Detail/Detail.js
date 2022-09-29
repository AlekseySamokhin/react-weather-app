import { WeatherDay } from "const";

import styles from "./Detail.module.css";

const Detail = (props) => {
    const {onChangeDay, weatherDay, weather} = props;

    const entities = Object.entries(weather);

    return (
        <>
            <dl className={styles.card__details}>
                {entities.map(([title, value]) => (
                    <div key={title} className={styles.details__group}>
                        <dt>{title}</dt>
                        <dt>{value}</dt>
                    </div>
                ))}
            </dl>
            <div className={`${styles.card__toggle} ${styles.toggle}`}>
                <input 
                    onChange={onChangeDay} 
                    className={styles.toggle__radio} 
                    type="radio" 
                    name="day" 
                    id="today" 
                    checked={weatherDay === WeatherDay.today}
                    />
                <label 
                    className={styles.toggle__label} 
                    htmlFor="today">
                        Today
                </label>
                <input
                    onChange={onChangeDay}  
                    className={styles.toggle__radio} 
                    type="radio" 
                    name="day" 
                    id="tomorrow" 
                    checked={weatherDay === WeatherDay.tomorrow}
                    />
                <label 
                    className={styles.toggle__label} 
                    htmlFor="tomorrow">
                        Tomorrow
                </label>
            </div>
        </>
    )
}

export default Detail;