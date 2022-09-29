import dayjs from "dayjs";

import styles from "./Header.module.css";

const FORMAT_DATE_STRING = "DD MMM YYYY";

const Header = (props) => {
    const {city, temp, description, shortDescription, icon, date} = props;

    return (
        <>
            <h2 className={styles.title}>{city}</h2>
            <time 
                className={styles.date}
                dateTime={dayjs(date).toISOString()}
            >
                {dayjs(date).format(FORMAT_DATE_STRING)}
            </time>
            <div className={styles.icon}>
                <img 
                    src={`img/${icon}.png`} 
                    alt={shortDescription} 
                />
            </div>
            <div className={styles.degree}>{temp}</div>
            <div className={styles.weather}>{description}</div>
        </>
    )
}

export default Header;